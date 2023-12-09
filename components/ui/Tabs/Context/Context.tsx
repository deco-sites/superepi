import { Signal, useSignal } from "@preact/signals";
import { ComponentChildren, createContext } from "preact";

export type ContextProps = {
  id: string;
  focus: Signal<number>;
  value: Signal<number>;
};

export type ProviderProps = ContextProps & {
  children: ComponentChildren;
};

export const Context = createContext<ContextProps>({} as ContextProps);

export const Provider = ({
  children,
  ...other
}: ProviderProps) => {
  return (
    <Context.Provider value={{ ...other }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
