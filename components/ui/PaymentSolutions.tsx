export interface Props {
  cardPayment: number;
  ticketPayment: number;
}

export default function PaymentSolutions(
  { cardPayment, ticketPayment }: Props,
) {
  return (
    <div class="flex flex-col gap-3 w-full">
      <div class="flex flex-col gap-3 w-full">
        <table>
          <thead>
            <tr>
              <th class="bg-[#f0f0f0] flex items-center py-3">
                <img
                  src="https://texf1k9mfq.map.azionedge.net/Custom/Content/Themes/Shared/Images/Payment/fp_visa.gif"
                  alt="Pagamento com Cartão de Crédito Visa"
                  class="mr-4"
                  title="Pagamento com Cartão de Crédito Visa"
                />
                <span class="font-bold font-roboto text-[#151515] text-sm -tracking-[0.040625rem]">
                  Pagamento com Cartão de Crédito Visa
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="font-normal font-roboto px-16 text-[#999999] text-sm -tracking-[0.040625rem]">
                {cardPayment.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
            </tr>
            <tr>
              <td class="font-normal font-roboto px-16 text-[#999999] text-sm -tracking-[0.040625rem]">
                {(cardPayment / 2).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
            </tr>
            <tr>
              <td class="font-normal font-roboto px-16 text-[#999999] text-sm -tracking-[0.040625rem]">
                {(cardPayment / 3).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th class="bg-[#f0f0f0] flex items-center py-3">
                <img
                  src="https://texf1k9mfq.map.azionedge.net/Custom/Content/Themes/Shared/Images/Payment/fp_master.gif"
                  alt="Pagamento com Cartão de Crédito Master"
                  class="mr-4"
                  title="Pagamento com Cartão de Crédito Master"
                />
                <span class="font-bold font-roboto text-[#151515] text-sm -tracking-[0.040625rem]">
                  Pagamento com Cartão de Crédito Master
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="font-normal font-roboto px-16 text-[#999999] text-sm -tracking-[0.040625rem]">
                {cardPayment.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
            </tr>
            <tr>
              <td class="font-normal font-roboto px-16 text-[#999999] text-sm -tracking-[0.040625rem]">
                {(cardPayment / 2).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
            </tr>
            <tr>
              <td class="font-normal font-roboto px-16 text-[#999999] text-sm -tracking-[0.040625rem]">
                {(cardPayment / 3).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th class="bg-[#f0f0f0] flex items-center py-3">
                <img
                  src="https://texf1k9mfq.map.azionedge.net/Custom/Content/Themes/Shared/Images/Payment/fp_diners.gif"
                  alt="Pagamento com Cartão de Crédito Diners"
                  class="mr-4"
                  title="Pagamento com Cartão de Crédito Diners"
                />
                <span class="font-bold font-roboto text-[#151515] text-sm -tracking-[0.040625rem]">
                  Pagamento com Cartão de Crédito Diners
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="font-normal font-roboto px-16 text-[#999999] text-sm -tracking-[0.040625rem]">
                {cardPayment.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
            </tr>
            <tr>
              <td class="font-normal font-roboto px-16 text-[#999999] text-sm -tracking-[0.040625rem]">
                {(cardPayment / 2).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
            </tr>
            <tr>
              <td class="font-normal font-roboto px-16 text-[#999999] text-sm -tracking-[0.040625rem]">
                {(cardPayment / 3).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th class="bg-[#f0f0f0] flex items-center py-3">
                <img
                  src="https://texf1k9mfq.map.azionedge.net/Custom/Content/Themes/Shared/Images/Payment/fp_hipercard.gif"
                  alt="Pagamento com Cartão de Crédito Hipercard"
                  class="mr-4"
                  title="Pagamento com Cartão de Crédito Hipercard"
                />
                <span class="font-bold font-roboto text-[#151515] text-sm -tracking-[0.040625rem]">
                  Pagamento com Cartão de Crédito Hipercard
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="font-normal font-roboto px-16 text-[#999999] text-sm -tracking-[0.040625rem]">
                {cardPayment.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
            </tr>
            <tr>
              <td class="font-normal font-roboto px-16 text-[#999999] text-sm -tracking-[0.040625rem]">
                {(cardPayment / 2).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
            </tr>
            <tr>
              <td class="font-normal font-roboto px-16 text-[#999999] text-sm -tracking-[0.040625rem]">
                {(cardPayment / 3).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th class="bg-[#f0f0f0] flex items-center py-3">
                <img
                  src="https://texf1k9mfq.map.azionedge.net/Custom/Content/Themes/Shared/Images/Payment/fp_amex.gif"
                  alt="Pagamento com Cartão de Crédito Amex"
                  class="mr-4"
                  title="Pagamento com Cartão de Crédito Amex"
                />
                <span class="font-bold font-roboto text-[#151515] text-sm -tracking-[0.040625rem]">
                  Pagamento com Cartão de Crédito Amex
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="font-normal font-roboto px-16 text-[#999999] text-sm -tracking-[0.040625rem]">
                {cardPayment.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
            </tr>
            <tr>
              <td class="font-normal font-roboto px-16 text-[#999999] text-sm -tracking-[0.040625rem]">
                {(cardPayment / 2).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
            </tr>
            <tr>
              <td class="font-normal font-roboto px-16 text-[#999999] text-sm -tracking-[0.040625rem]">
                {(cardPayment / 3).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th class="bg-[#f0f0f0] flex items-center py-3">
                <img
                  src="https://texf1k9mfq.map.azionedge.net/Custom/Content/Themes/Shared/Images/Payment/fp_elo.gif"
                  alt="Pagamento com Cartão de Crédito Elo"
                  class="mr-4"
                  title="Pagamento com Cartão de Crédito Elo"
                />
                <span class="font-bold font-roboto text-[#151515] text-sm -tracking-[0.040625rem]">
                  Pagamento com Cartão de Crédito Elo
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="font-normal font-roboto px-16 text-[#999999] text-sm -tracking-[0.040625rem]">
                {cardPayment.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
            </tr>
            <tr>
              <td class="font-normal font-roboto px-16 text-[#999999] text-sm -tracking-[0.040625rem]">
                {(cardPayment / 2).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
            </tr>
            <tr>
              <td class="font-normal font-roboto px-16 text-[#999999] text-sm -tracking-[0.040625rem]">
                {(cardPayment / 3).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="flex flex-col gap-3 w-full">
        <table>
          <thead>
            <tr>
              <th class="bg-[#f0f0f0] flex items-center py-3">
                <img
                  src="https://texf1k9mfq.map.azionedge.net/Custom/Content/Themes/Shared/Images/Payment/fp_bradesco.gif"
                  alt="Pagamento com Boleto bancário do Bradesco"
                  class="mr-4"
                  title="Pagamento com Boleto bancário do Bradcsco"
                />
                <span class="font-bold font-roboto text-[#151515] text-sm -tracking-[0.040625rem]">
                  Pagamento com Boleto bancário do Bradesco
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="font-normal font-roboto px-16 text-[#999999] text-sm -tracking-[0.040625rem]">
                R$ 29,04 à vista
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="flex flex-col gap-3 w-full">
        <table>
          <thead>
            <tr>
              <th class="bg-[#f0f0f0] flex items-center py-3">
                <img
                  src="https://texf1k9mfq.map.azionedge.net/Custom/Content/Themes/Shared/Images/Payment/fp_bb.gif"
                  alt="Pagamento depósito bancário BB"
                  class="mr-4"
                  title="Pagamento depósito bancário BB"
                />
                <span class="font-bold font-roboto text-[#151515] text-sm -tracking-[0.040625rem]">
                  Pagamento depósito bancário BB
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="font-normal font-roboto px-16 text-[#999999] text-sm -tracking-[0.040625rem]">
                R$ 29,04 à vista
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th class="bg-[#f0f0f0] flex items-center py-3">
                <img
                  src="https://texf1k9mfq.map.azionedge.net/Custom/Content/Themes/Shared/Images/Payment/fp_bradesco.gif"
                  alt="Pagamento depósito bancário Bradesco"
                  class="mr-4"
                  title="Pagamento depósito bancário Bradesco"
                />
                <span class="font-bold font-roboto text-[#151515] text-sm -tracking-[0.040625rem]">
                  Pagamento depósito bancário Bradesco
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="font-normal font-roboto px-16 text-[#999999] text-sm -tracking-[0.040625rem]">
                R$ 29,04 à vista
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th class="bg-[#f0f0f0] flex items-center py-3">
                <img
                  src="https://texf1k9mfq.map.azionedge.net/Custom/Content/Themes/Shared/Images/Payment/fp_itau.gif"
                  alt="Pagamento depósito bancário Itau"
                  class="mr-4"
                  title="Pagamento depósito bancário Itau"
                />
                <span class="font-bold font-roboto text-[#151515] text-sm -tracking-[0.040625rem]">
                  Pagamento depósito bancário Itau
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="font-normal font-roboto px-16 text-[#999999] text-sm -tracking-[0.040625rem]">
                R$ 29,04 à vista
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th class="bg-[#f0f0f0] flex items-center py-3">
                <img
                  src="https://texf1k9mfq.map.azionedge.net/Custom/Content/Themes/Shared/Images/Payment/fp_santander.gif"
                  alt="Pagamento depósito bancário Santander"
                  class="mr-4"
                  title="Pagamento depósito bancário Santander"
                />
                <span class="font-bold font-roboto text-[#151515] text-sm -tracking-[0.040625rem]">
                  Pagamento depósito bancário Santander
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="font-normal font-roboto px-16 text-[#999999] text-sm -tracking-[0.040625rem]">
                R$ 29,04 à vista
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
