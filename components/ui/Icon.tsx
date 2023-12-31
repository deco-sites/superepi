import { asset } from "$fresh/runtime.ts";
import type { JSX } from "preact";

export type AvailableIcons =
  | "ArrowsPointingOut"
  | "Bars3"
  | "ChevronLeft"
  | "ChevronRight"
  | "ChevronUp"
  | "ChevronDown"
  | "CreditCard"
  | "Check"
  | "Deco"
  | "Diners"
  | "Discord"
  | "Discount"
  | "Elo"
  | "Facebook"
  | "FilterList"
  | "Heart"
  | "Helmet"
  | "Instagram"
  | "Linkedin"
  | "Menu"
  | "Minus"
  | "MapPin"
  | "MagnifyingGlass"
  | "Mastercard"
  | "Message"
  | "Phone"
  | "Pix"
  | "Plus"
  | "QuestionMarkCircle"
  | "Return"
  | "Ruler"
  | "Search"
  | "ShoppingCart"
  | "Star"
  | "Tiktok"
  | "Trash"
  | "Truck"
  | "Twitter"
  | "User"
  | "Visa"
  | "WhatsApp"
  | "XMark"
  | "Zoom"
  | "BlackFriday"
  | "FichaTecnica"
  | "Question"
  | "Sale"
  | "PagePrev"
  | "Service"
  | "TicketPay"
  | "BuyButton"
  | "BtnLeft"
  | "BtnRight"
  | "Search2"
  | "SearchLocal"
  | "SearchMobile"
  | "SearchSmall"
  | "Cart"
  | "ButtonCart"
  | "CardPay"
  | "TableEdit"
  | "Email"
  | "FooterEmail"
  | "Delivery"
  | "Error"
  | "FooterFacebook"
  | "Billing"
  | "WishButton"
  | "Close"
  | "Filter"
  | "Freight"
  | "FreeFreight"
  | "Home"
  | "ButtonUnaivable"
  | "List"
  | "WishList"
  | "Bia"
  | "WishListNext"
  | "Bja"
  | "Lock"
  | "Login"
  | "LocalMarker"
  | "Measure"
  | "Menu"
  | "MenuMobile"
  | "MyLocation"
  | "Newsletter"
  | "Parcel"
  | "Pix"
  | "PageNext"
  | "WithDrawal"
  | "Arrow"
  | "ArrowDown"
  | "ArrowBold"
  | "ArrowRight"
  | "ArrowRightMap"
  | "ArrowLeftMap"
  | "ArrowFacetDown"
  | "ArrowSmall"
  | "Phone"
  | "ContactUsPhone"
  | "FooterPhone"
  | "Options"
  | "Timer"
  | "TimerCampaign"
  | "ShelfTitle"
  | "Shelf3mTitle"
  | "ShelfAnsellTitle"
  | "ShelfDannyTitle"
  | "ShelfDeltaplusTitle"
  | "ShelfFujiwaraTitle"
  | "ShelfHoneywellTitle"
  | "ShelfNutriexTitle"
  | "ShelfSoftWorkTitle"
  | "ShelfSteelflexTitle"
  | "ShelfUnivetTitle"
  | "Trash"
  | "Replace"
  | "Video"
  | "Video2"
  | "Encrypt"
  | "Linxcommerce"
  | "Logo"
  | "Percentage"
  | "Store";

interface Props extends JSX.SVGAttributes<SVGSVGElement> {
  /**
   * Symbol id from element to render. Take a look at `/static/icons.svg`.
   *
   * Example: <Icon id="Bell" />
   */
  id: AvailableIcons;
  size?: number;
}

function Icon(
  { id, strokeWidth = 16, size, width, height, ...otherProps }: Props,
) {
  return (
    <svg
      {...otherProps}
      width={width ?? size}
      height={height ?? size}
      strokeWidth={strokeWidth}
    >
      <use href={asset(`/sprites.svg#${id}`)} />
    </svg>
  );
}

export default Icon;
