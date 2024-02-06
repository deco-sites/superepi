import { asset } from "$fresh/runtime.ts";
import type { JSX } from "preact";

export type AvailableIcons =
  | "Arrow"
  | "ArrowBold"
  | "ArrowDown"
  | "ArrowFacetDown"
  | "ArrowLeftMap"
  | "ArrowRight"
  | "ArrowRightMap"
  | "ArrowSmall"
  | "ArrowsPointingOut"
  | "Bars3"
  | "Bia"
  | "Billing"
  | "Bja"
  | "BlackFriday"
  | "BreadcrumbArrow"
  | "BtnLeft"
  | "BtnRight"
  | "ButtonCart"
  | "ButtonUnaivable"
  | "BuyButton"
  | "CardPay"
  | "Cart"
  | "Check"
  | "ChevronDown"
  | "ChevronLeft"
  | "ChevronLeftPDPGallery"
  | "ChevronRight"
  | "ChevronUp"
  | "Close"
  | "ContactUsPhone"
  | "CreditCard"
  | "Deco"
  | "Delivery"
  | "Diners"
  | "Discord"
  | "Discount"
  | "Elo"
  | "Email"
  | "Encrypt"
  | "Error"
  | "Facebook"
  | "FichaTecnica"
  | "Filter"
  | "FilterList"
  | "FooterEmail"
  | "FooterFacebook"
  | "FooterPhone"
  | "FreeFreight"
  | "Freight"
  | "Heart"
  | "Helmet"
  | "Home"
  | "Instagram"
  | "Linkedin"
  | "Linxcommerce"
  | "List"
  | "LocalMarker"
  | "Lock"
  | "Login"
  | "Logo"
  | "MagnifyingGlass"
  | "MapPin"
  | "Mastercard"
  | "Measure"
  | "Menu"
  | "Menu"
  | "MenuMobile"
  | "Message"
  | "Minus"
  | "MyLocation"
  | "Newsletter"
  | "Options"
  | "PageNext"
  | "PagePrev"
  | "Parcel"
  | "PDP-YT"
  | "Percentage"
  | "Phone"
  | "Phone"
  | "Pix"
  | "Pix"
  | "Plus"
  | "Question"
  | "QuestionMarkCircle"
  | "Replace"
  | "Return"
  | "Ruler"
  | "Sale"
  | "Search"
  | "Search2"
  | "SearchLocal"
  | "SearchMobile"
  | "SearchSmall"
  | "Service"
  | "Shelf3mTitle"
  | "ShelfAnsellTitle"
  | "ShelfDannyTitle"
  | "ShelfDeltaplusTitle"
  | "ShelfFujiwaraTitle"
  | "ShelfHoneywellTitle"
  | "ShelfNutriexTitle"
  | "ShelfSoftWorkTitle"
  | "ShelfSteelflexTitle"
  | "ShelfTitle"
  | "ShelfUnivetTitle"
  | "ShoppingCart"
  | "SmallMenu"
  | "Star"
  | "Store"
  | "TableEdit"
  | "TicketPay"
  | "Tiktok"
  | "Timer"
  | "TimerCampaign"
  | "Trash"
  | "Trash"
  | "Truck"
  | "Twitter"
  | "User"
  | "Video"
  | "Video2"
  | "Visa"
  | "WhatsApp"
  | "WishButton"
  | "WishList"
  | "WishListNext"
  | "WithDrawal"
  | "XMark"
  | "Zoom";

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
