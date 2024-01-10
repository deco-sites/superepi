export interface Props {
  cardPayment: number;
  ticketPayment: number;
}

export default function PaymentSolutions(
  { cardPayment, ticketPayment }: Props,
) {
  return (
    <div class="wd-content sm:flex sm:flex-col sm:gap-3 sm:w-full">
      <div class="sm:flex sm:flex-col sm:gap-3 sm:w-full">
        <table>
          <thead>
            <tr>
              <th class="sm:bg-[#f0f0f0] flex items-center sm:py-3">
                <img
                  src="https://texf1k9mfq.map.azionedge.net/Custom/Content/Themes/Shared/Images/Payment/fp_visa.gif"
                  alt="Pagamento com Cartão de Crédito Visa"
                  className="sm:mr-4"
                  title="Pagamento com Cartão de Crédito Visa"
                />
                <span class="sm:font-bold sm:font-roboto sm:text-[#151515] sm:text-sm sm:-tracking-[0.040625rem]">
                  Pagamento com Cartão de Crédito Visa
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="sm:font-normal sm:font-roboto sm:px-16 sm:text-[#999999] sm:text-sm sm:-tracking-[0.040625rem]">
                {cardPayment.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
            </tr>
            <tr>
              <td className="sm:font-normal sm:font-roboto sm:px-16 sm:text-[#999999] sm:text-sm sm:-tracking-[0.040625rem]">
                {(cardPayment / 2).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
            </tr>
            <tr>
              <td className="sm:font-normal sm:font-roboto sm:px-16 sm:text-[#999999] sm:text-sm sm:-tracking-[0.040625rem]">
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
              <th class="sm:bg-[#f0f0f0] flex items-center sm:py-3">
                <img
                  src="https://texf1k9mfq.map.azionedge.net/Custom/Content/Themes/Shared/Images/Payment/fp_master.gif"
                  alt="Pagamento com Cartão de Crédito Master"
                  className="sm:mr-4"
                  title="Pagamento com Cartão de Crédito Master"
                />
                <span class="sm:font-bold sm:font-roboto sm:text-[#151515] sm:text-sm sm:-tracking-[0.040625rem]">
                  Pagamento com Cartão de Crédito Master
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="sm:font-normal sm:font-roboto sm:px-16 sm:text-[#999999] sm:text-sm sm:-tracking-[0.040625rem]">
                {cardPayment.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
            </tr>
            <tr>
              <td className="sm:font-normal sm:font-roboto sm:px-16 sm:text-[#999999] sm:text-sm sm:-tracking-[0.040625rem]">
                {(cardPayment / 2).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
            </tr>
            <tr>
              <td className="sm:font-normal sm:font-roboto sm:px-16 sm:text-[#999999] sm:text-sm sm:-tracking-[0.040625rem]">
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
              <th class="sm:bg-[#f0f0f0] flex items-center sm:py-3">
                <img
                  src="https://texf1k9mfq.map.azionedge.net/Custom/Content/Themes/Shared/Images/Payment/fp_diners.gif"
                  alt="Pagamento com Cartão de Crédito Diners"
                  className="sm:mr-4"
                  title="Pagamento com Cartão de Crédito Diners"
                />
                <span class="sm:font-bold sm:font-roboto sm:text-[#151515] sm:text-sm sm:-tracking-[0.040625rem]">
                  Pagamento com Cartão de Crédito Diners
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="sm:font-normal sm:font-roboto sm:px-16 sm:text-[#999999] sm:text-sm sm:-tracking-[0.040625rem]">
                {cardPayment.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
            </tr>
            <tr>
              <td className="sm:font-normal sm:font-roboto sm:px-16 sm:text-[#999999] sm:text-sm sm:-tracking-[0.040625rem]">
                {(cardPayment / 2).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
            </tr>
            <tr>
              <td className="sm:font-normal sm:font-roboto sm:px-16 sm:text-[#999999] sm:text-sm sm:-tracking-[0.040625rem]">
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
              <th class="sm:bg-[#f0f0f0] flex items-center sm:py-3">
                <img
                  src="https://texf1k9mfq.map.azionedge.net/Custom/Content/Themes/Shared/Images/Payment/fp_hipercard.gif"
                  alt="Pagamento com Cartão de Crédito Hipercard"
                  className="sm:mr-4"
                  title="Pagamento com Cartão de Crédito Hipercard"
                />
                <span class="sm:font-bold sm:font-roboto sm:text-[#151515] sm:text-sm sm:-tracking-[0.040625rem]">
                  Pagamento com Cartão de Crédito Hipercard
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="sm:font-normal sm:font-roboto sm:px-16 sm:text-[#999999] sm:text-sm sm:-tracking-[0.040625rem]">
                {cardPayment.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
            </tr>
            <tr>
              <td className="sm:font-normal sm:font-roboto sm:px-16 sm:text-[#999999] sm:text-sm sm:-tracking-[0.040625rem]">
                {(cardPayment / 2).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
            </tr>
            <tr>
              <td className="sm:font-normal sm:font-roboto sm:px-16 sm:text-[#999999] sm:text-sm sm:-tracking-[0.040625rem]">
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
              <th class="sm:bg-[#f0f0f0] flex items-center sm:py-3">
                <img
                  src="https://texf1k9mfq.map.azionedge.net/Custom/Content/Themes/Shared/Images/Payment/fp_amex.gif"
                  alt="Pagamento com Cartão de Crédito Amex"
                  className="sm:mr-4"
                  title="Pagamento com Cartão de Crédito Amex"
                />
                <span class="sm:font-bold sm:font-roboto sm:text-[#151515] sm:text-sm sm:-tracking-[0.040625rem]">
                  Pagamento com Cartão de Crédito Amex
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="sm:font-normal sm:font-roboto sm:px-16 sm:text-[#999999] sm:text-sm sm:-tracking-[0.040625rem]">
                {cardPayment.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
            </tr>
            <tr>
              <td className="sm:font-normal sm:font-roboto sm:px-16 sm:text-[#999999] sm:text-sm sm:-tracking-[0.040625rem]">
                {(cardPayment / 2).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
            </tr>
            <tr>
              <td className="sm:font-normal sm:font-roboto sm:px-16 sm:text-[#999999] sm:text-sm sm:-tracking-[0.040625rem]">
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
              <th class="sm:bg-[#f0f0f0] flex items-center sm:py-3">
                <img
                  src="https://texf1k9mfq.map.azionedge.net/Custom/Content/Themes/Shared/Images/Payment/fp_elo.gif"
                  alt="Pagamento com Cartão de Crédito Elo"
                  className="sm:mr-4"
                  title="Pagamento com Cartão de Crédito Elo"
                />
                <span class="sm:font-bold sm:font-roboto sm:text-[#151515] sm:text-sm sm:-tracking-[0.040625rem]">
                  Pagamento com Cartão de Crédito Elo
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="sm:font-normal sm:font-roboto sm:px-16 sm:text-[#999999] sm:text-sm sm:-tracking-[0.040625rem]">
                {cardPayment.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
            </tr>
            <tr>
              <td className="sm:font-normal sm:font-roboto sm:px-16 sm:text-[#999999] sm:text-sm sm:-tracking-[0.040625rem]">
                {(cardPayment / 2).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
            </tr>
            <tr>
              <td className="sm:font-normal sm:font-roboto sm:px-16 sm:text-[#999999] sm:text-sm sm:-tracking-[0.040625rem]">
                {(cardPayment / 3).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="sm:flex sm:flex-col sm:gap-3 sm:w-full">
        <table>
          <thead>
            <tr>
              <th class="sm:bg-[#f0f0f0] flex items-center sm:py-3">
                <img
                  src="https://texf1k9mfq.map.azionedge.net/Custom/Content/Themes/Shared/Images/Payment/fp_bradesco.gif"
                  alt="Pagamento com Boleto bancário do Bradesco"
                  className="sm:mr-4"
                  title="Pagamento com Boleto bancário do Bradcsco"
                />
                <span class="sm:font-bold sm:font-roboto sm:text-[#151515] sm:text-sm sm:-tracking-[0.040625rem]">
                  Pagamento com Boleto bancário do Bradesco
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="sm:font-normal sm:font-roboto sm:px-16 sm:text-[#999999] sm:text-sm sm:-tracking-[0.040625rem]">
                R$ 29,04 à vista
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="sm:flex sm:flex-col sm:gap-3 sm:w-full">
        <table>
          <thead>
            <tr>
              <th class="sm:bg-[#f0f0f0] flex items-center sm:py-3">
                <img
                  src="https://texf1k9mfq.map.azionedge.net/Custom/Content/Themes/Shared/Images/Payment/fp_bb.gif"
                  alt="Pagamento depósito bancário BB"
                  className="sm:mr-4"
                  title="Pagamento depósito bancário BB"
                />
                <span class="sm:font-bold sm:font-roboto sm:text-[#151515] sm:text-sm sm:-tracking-[0.040625rem]">
                  Pagamento depósito bancário BB
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="sm:font-normal sm:font-roboto sm:px-16 sm:text-[#999999] sm:text-sm sm:-tracking-[0.040625rem]">
                R$ 29,04 à vista
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th class="sm:bg-[#f0f0f0] flex items-center sm:py-3">
                <img
                  src="https://texf1k9mfq.map.azionedge.net/Custom/Content/Themes/Shared/Images/Payment/fp_bradesco.gif"
                  alt="Pagamento depósito bancário Bradesco"
                  className="sm:mr-4"
                  title="Pagamento depósito bancário Bradesco"
                />
                <span class="sm:font-bold sm:font-roboto sm:text-[#151515] sm:text-sm sm:-tracking-[0.040625rem]">
                  Pagamento depósito bancário Bradesco
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="sm:font-normal sm:font-roboto sm:px-16 sm:text-[#999999] sm:text-sm sm:-tracking-[0.040625rem]">
                R$ 29,04 à vista
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th class="sm:bg-[#f0f0f0] flex items-center sm:py-3">
                <img
                  src="https://texf1k9mfq.map.azionedge.net/Custom/Content/Themes/Shared/Images/Payment/fp_itau.gif"
                  alt="Pagamento depósito bancário Itau"
                  className="sm:mr-4"
                  title="Pagamento depósito bancário Itau"
                />
                <span class="sm:font-bold sm:font-roboto sm:text-[#151515] sm:text-sm sm:-tracking-[0.040625rem]">
                  Pagamento depósito bancário Itau
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="sm:font-normal sm:font-roboto sm:px-16 sm:text-[#999999] sm:text-sm sm:-tracking-[0.040625rem]">
                R$ 29,04 à vista
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th class="sm:bg-[#f0f0f0] flex items-center sm:py-3">
                <img
                  src="https://texf1k9mfq.map.azionedge.net/Custom/Content/Themes/Shared/Images/Payment/fp_santander.gif"
                  alt="Pagamento depósito bancário Santander"
                  className="sm:mr-4"
                  title="Pagamento depósito bancário Santander"
                />
                <span class="sm:font-bold sm:font-roboto sm:text-[#151515] sm:text-sm sm:-tracking-[0.040625rem]">
                  Pagamento depósito bancário Santander
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="sm:font-normal sm:font-roboto sm:px-16 sm:text-[#999999] sm:text-sm sm:-tracking-[0.040625rem]">
                R$ 29,04 à vista
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
