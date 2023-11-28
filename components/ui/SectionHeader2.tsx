interface Props {
  title?: string;
  fontSize?: "Normal" | "Large";
  description?: string;
  alignment: "center" | "left";
  color?: boolean;
}

function HeaderSections(props: Props) {
  return (
    <>
      {props?.title || props?.description
        ? (
          <div
            class={`flex flex-col ${
              props.alignment === "left" ? "justify-start" : "justify-center"
            } pb-1`}
          >
            {props.title &&
              (
                <h1
                  class={`text-xl leading-2 font-semibold tracking-widest
                  ${
                    props.color
                    ? `text-[${props.color ?? ""}]`
                    : "text-base-content"
                  }
                `}
                >
                  {props.title}
                </h1>
              )}
            {props.description &&
              (
                <h2
                  class={`
                  leading-6 lg:leading-8
                  ${
                    props.color
                      ? `text-[${props.color}]`
                      : "text-neutral"
                  }
                  ${props.fontSize === "Normal" ? "lg:text-xl" : "lg:text-2xl"}
                `}
                >
                  {props.description}
                </h2>
              )}
          </div>
        )
        : null}
    </>
  );
}

export default HeaderSections;
