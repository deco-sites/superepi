import Header from "$store/components/ui/SectionHeader.tsx";

export interface Form {
  name: {
    placeholder?: string;
  };
  email: {
    placeholder?: string;
  };
  buttonText?: string;
  /** @format html */
  helpText?: string;
}

export interface Props {
  title?: string;
  /** @format textarea */
  description?: string;
  form?: Form;
  layout?: {
    headerFontSize?: "Large" | "Normal";
    content?: {
      border?: boolean;
      alignment?: "Center" | "Left" | "Side to side";
      bgColor?: "Normal" | "Reverse";
    };
  };
}

const DEFAULT_PROPS: Props = {
  title: "SEJA UM CLIENTE PREFERENCIAL SUPER EPI",
  description: "Receba novidades e ofertas com exclusividade.",
  form: {
    name: {
      placeholder: "Digite seu nome",
    },
    email: {
      placeholder: "Digite seu email",
    },
    buttonText: "ENVIAR",
  },
  layout: {
    headerFontSize: "Large",
    content: {
      border: false,
      alignment: "Center",
    },
  },
};

export default function Newsletter(props: Props) {
  const { title, description, form, layout } = { ...DEFAULT_PROPS, ...props };
  const isReverse = layout?.content?.bgColor === "Reverse";
  const bordered = Boolean(layout?.content?.border);

  const headerLayout = title || description ? (
        <div
          class={`flex flex-col gap-2 ${
            layout?.content?.alignment === "Left" ? "text-left" : "text-center"
          }`}
        >
          {title &&
            (
              <h1
                class={`text-[20px] text-[#F8A531] font-bold`}
              >
                {title}
              </h1>
            )}
          {description &&
            (
              <h2
                class="text-lg"
              >
                {description}
              </h2>
            )}
        </div>
      )
      : null

  const formLayout = form && (
    <form action="/" class="flex flex-col gap-4">
      <div class="flex flex-col lg:flex-row gap-3">
        <div class="flex gap-2">
          <input
            class="input input-bordered lg:w-80 bg-[#F8F8F8] text-[#000]"
            type="text"
            placeholder={form.name.placeholder}
          />
          <input
            class="input input-bordered lg:w-80 bg-[#F8F8F8] text-[#000]"
            type="text"
            placeholder={form.email.placeholder}
          />
        </div>
        <button
          class={`btn btn-accent ${isReverse ? "" : "bg-[#f8a531]"}`}
          type="submit"
        >
          {form.buttonText}
        </button>
      </div>
      {form.helpText && (
        <div
          class="text-sm"
          dangerouslySetInnerHTML={{ __html: form.helpText }}
        />
      )}
    </form>
  );

  const bgLayout = isReverse
    ? "bg-secondary text-secondary-content"
    : "bg-transparent";

  return (
    <div
      class={`${
        bordered
          ? isReverse ? "bg-secondary-content" : "bg-secondary"
          : bgLayout
      } ${bordered ? "p-4 lg:p-16" : "p-0"}`}
    >
      {(!layout?.content?.alignment ||
        layout?.content?.alignment === "Center") && (
        <div
          class={`container flex flex-col md:flex-row md:justify-around rounded p-4 gap-6 lg:p-16 lg:gap-12 ${bgLayout}`}
        >
          {headerLayout}
          <div class="flex justify-center">
            {formLayout}
          </div>
        </div>
      )}
      {layout?.content?.alignment === "Left" && (
        <div
          class={`container flex flex-col rounded p-4 gap-10 lg:p-16 md:gap-16 ${bgLayout}`}
        >
          {headerLayout}
          <div class="flex justify-start">
            {formLayout}
          </div>
        </div>
      )}
      {layout?.content?.alignment === "Side to side" && (
        <div
          class={`container flex flex-col rounded justify-between md:flex-row p-4 gap-6 lg:p-16 lg:gap-12 ${bgLayout}`}
        >
          {headerLayout}
          <div class="flex justify-center">
            {formLayout}
          </div>
        </div>
      )}
    </div>
  );
}
