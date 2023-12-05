import Icon from "deco-sites/superepi/components/ui/Icon.tsx";
import { clx } from "deco-sites/superepi/sdk/clx.ts";

export interface Props {
  heading: string;
};

export const ShelfWithTabs = () => {
  return (
    <div className="sm:flex sm:px-6 sm:w-full">
      <div className="sm:flex sm:max-w-page-container sm:mx-auto sm:w-full">
        <Icon
          className="sm:h-9 sm:w-9"
          id="Helmet"
          strokeWidth={1}
        />

        <h1>Teste</h1>
      </div>
    </div>
  );
};

export default ShelfWithTabs;