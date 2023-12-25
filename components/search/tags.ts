import type {
  FilterToggleValue,
  ProductListingPage,
} from "apps/commerce/types.ts";

type SelectedConstructor = {
  label: string;
  url: string;
};

class Selected {
  public label: SelectedConstructor["label"];
  public url: SelectedConstructor["url"];

  constructor({
    label,
    url,
  }: SelectedConstructor) {
    this.label = label;
    this.url = url;
  }
}

export const tags = (filter: ProductListingPage["filters"] | undefined) => {
  if (filter === undefined) return [];

  const items: Selected[] = [];

  filter
    .filter((filter) => filter["@type"] === "FilterToggle")
    .map(({ values: valuesProp }) => {
      const values = valuesProp as FilterToggleValue[];

      values.forEach(({
        label,
        url,
        selected,
      }) => {
        if (selected === true) {
          items.push(
            new Selected({
              label: label,
              url: url,
            }),
          );
        }
      });
    });

  return items;
};

export default tags;
