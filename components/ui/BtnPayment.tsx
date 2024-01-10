import PaymentSolutions from "deco-sites/superepi/components/ui/PaymentSolutions.tsx";
import { useId } from "deco-sites/superepi/sdk/useId.ts";

export interface Props {
  cardPayment: number;
  ticketPayment: number;
}

export default function BtnPayment({ cardPayment, ticketPayment }: Props) {
  const id = useId();

  return (
    <>
      <label
        className="sm:cursor-pointer sm:flex sm:font-medium sm:font-roboto sm:text-[#999999] sm:text-xs sm:underline"
        htmlFor={id}
      >
        Formas de pagamento
      </label>

      <input
        className="modal-toggle"
        type="checkbox"
        id={id}
      />

      <div
        className="modal sm:!bg-[#000000cc] sm:p-6"
        role="dialog"
      >
        <div className="modal-box sm:bg-[#f4f4f4] sm:flex sm:flex-col sm:gap-6 sm:max-w-[37.5rem] sm:p-5 sm:relative sm:rounded-none sm:w-full">
          <label
            className="sm:absolute sm:bg-[#FFAB00] sm:cursor-pointer sm:flex sm:h-9 sm:items-center sm:justify-center sm:right-0 sm:text-white sm:text-3xl sm:top-0 sm:w-9"
            htmlFor={id}
          >
            x
          </label>

          <h3 className="sm:font-bold sm:font-roboto sm:text-[#333] sm:text-2xl sm:-tracking-[0.0625rem]">
            Saiba como pagar
          </h3>

          <PaymentSolutions
            cardPayment={cardPayment}
            ticketPayment={ticketPayment}
          />
        </div>
      </div>
    </>
  );
}
