import { useSignal } from "@preact/signals";
import { JSX } from "preact";
import { forwardRef } from "preact/compat";
import {
  useContext,
  useEffect,
  useImperativeHandle,
  useRef
} from "preact/hooks";
import {
  Context,
  ContextProps
} from "deco-sites/superepi/components/ui/Tabs/Context/Context.tsx";

type HandleKeyboard = (arg0: {
  element: HTMLButtonElement;
  event: KeyboardEvent;
  focus: ContextProps['value'];
}) => void;

export type TabProps = Omit<JSX.HTMLAttributes<HTMLButtonElement>, "value"> & {
  value: number;
};

export const Tab = forwardRef<HTMLButtonElement, TabProps>(({
  value: valueProp,
  ...props
}, ref) => {
  const {
    id,
    focus,
    value
  } = useContext(Context);

  const render = useSignal(0);

  const button = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const element = button.current;
    if (element === null) return;

    const listener: (this: HTMLButtonElement, ev: KeyboardEvent) => any = (event) => {
      handleKeyboard({
        element: element,
        event: event,
        focus: focus
      });
    };

    element.addEventListener("keydown", listener);

    return () => element.removeEventListener("keydown", listener);
  }, []);

  useEffect(() => {
    const element = button.current;

    if (
      render.value === 0 ||
      element === undefined
    ) {
      render.value = 1;

      return;
    };

    if (valueProp === focus.value) element?.focus();
  }, [focus.value]);

  useImperativeHandle(ref, () => ({ ...button.current as HTMLButtonElement }));

  return (
    <button
      {...props}
      aria-controls={`tabpanel-${valueProp}-${id}`}
      aria-selected={valueProp === value.value}
      data-value={valueProp}
      id={`tab-${valueProp}-${id}`}
      onClick={(event) => {
        value.value = valueProp;
        focus.value = valueProp;

        if (props.onClick !== undefined) props.onClick(event);
      }}
      ref={button}
      tabIndex={valueProp ===
        value.value ? 0 :
        -1
      }
      role="tab"
    />
  );
});

const handleKeyboard: HandleKeyboard = ({
  element,
  event,
  focus
}) => {
  const code = event.code;
  const index = focus.value;

  const tablist = element.closest("[role='tablist']");
  if (tablist === null) return;

  const buttons = Array.from(tablist.querySelectorAll("button"));
  const lastIndex = parseFloat(buttons.at(-1)?.getAttribute("data-value") ?? "0")

  switch (code) {
    case "ArrowLeft":
      if (index === 0) focus.value = lastIndex;
      else focus.value -= 1;

      break;
    case "ArrowRight":
      if (index === lastIndex) focus.value = 0;
      else focus.value += 1;

      break;
    case "End":
      focus.value = lastIndex;

      break;
    case "Home":
      event.preventDefault();
      focus.value = 0;

      break
  }
};

export default Tab;