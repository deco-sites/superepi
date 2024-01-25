import type { JSX } from "preact"
import { clx } from "deco-sites/superepi/sdk/clx.ts";
import { useId } from "deco-sites/superepi/sdk/useId.ts";

function Collapsable(props: JSX.IntrinsicElements["div"]) {
    return <div {...props} />
}

function Trigger(props: JSX.IntrinsicElements["label"]) {
    const id = useId()

    return (
        <>
            <input type='checkbox' id={id} class='hidden peer' />
            <label for={id} {...props} class={clx('cursor-pointer select-none', props.class as string)} />
        </>
    )
}

function ContentWrapper(props: JSX.IntrinsicElements["div"] & { customTransition?: boolean }) {
    return <div {...props} class={clx('group grid transition-all duration-500', !props.customTransition && 'grid-rows-[0fr] peer-checked:grid-rows-[1fr]', props.class as string)} />
}

function Content(props: JSX.IntrinsicElements["div"]) {
    return <div {...props} class={clx('overflow-hidden [grid-row:1_/_span_2]', props.class as string)} />
}

Collapsable.Trigger = Trigger
Collapsable.Content = Content
Collapsable.ContentWrapper = ContentWrapper

export default Collapsable