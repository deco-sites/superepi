export interface Props {
  cardPayment: number;
  ticketPayment: number;
}

export default function PaymentSolutions(
  { cardPayment, ticketPayment }: Props,
) {
  return (
    <div class="bg-white p-2 overflow-y-auto h-full w-full md:w-[400px]">
      <div class="wd-header">
        <span class="wd-icon"></span>
        <h1 class="text-lg md:text-xl font-semibold">Saiba como pagar</h1>
      </div>
      <div class="wd-content">
        <div class="scroll modal-wd-product-payment-options">
          <h2 class="md:text-lg font-semibold">
            Pagamento com cartao de crédito
          </h2>
          <div class="grid">
            <table>
              <thead>
                <tr>
                  <th class="flex items-center">
                    <img
                      src="https://texf1k9mfq.map.azionedge.net/Custom/Content/Themes/Shared/Images/Payment/fp_visa.gif"
                      alt="Pagamento com Cartão de Crédito Visa"
                      title="Pagamento com Cartão de Crédito Visa"
                    />
                    <span class="payment-description">
                      Pagamento com Cartão de Crédito Visa
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {cardPayment.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </td>
                </tr>
                <tr>
                  <td>
                    {(cardPayment / 2).toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </td>
                </tr>
                <tr>
                  <td>
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
                  <th class="flex items-center">
                    <img
                      src="https://texf1k9mfq.map.azionedge.net/Custom/Content/Themes/Shared/Images/Payment/fp_master.gif"
                      alt="Pagamento com Cartão de Crédito Master"
                      title="Pagamento com Cartão de Crédito Master"
                    />
                    <span class="payment-description">
                      Pagamento com Cartão de Crédito Master
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {cardPayment.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </td>
                </tr>
                <tr>
                  <td>
                    {(cardPayment / 2).toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </td>
                </tr>
                <tr>
                  <td>
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
                  <th class="flex items-center">
                    <img
                      src="https://texf1k9mfq.map.azionedge.net/Custom/Content/Themes/Shared/Images/Payment/fp_diners.gif"
                      alt="Pagamento com Cartão de Crédito Diners"
                      title="Pagamento com Cartão de Crédito Diners"
                    />
                    <span class="payment-description">
                      Pagamento com Cartão de Crédito Diners
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {cardPayment.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </td>
                </tr>
                <tr>
                  <td>
                    {(cardPayment / 2).toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </td>
                </tr>
                <tr>
                  <td>
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
                  <th class="flex items-center">
                    <img
                      src="https://texf1k9mfq.map.azionedge.net/Custom/Content/Themes/Shared/Images/Payment/fp_hipercard.gif"
                      alt="Pagamento com Cartão de Crédito Hipercard"
                      title="Pagamento com Cartão de Crédito Hipercard"
                    />
                    <span class="payment-description">
                      Pagamento com Cartão de Crédito Hipercard
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {cardPayment.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </td>
                </tr>
                <tr>
                  <td>
                    {(cardPayment / 2).toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </td>
                </tr>
                <tr>
                  <td>
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
                  <th class="flex items-center">
                    <img
                      src="https://texf1k9mfq.map.azionedge.net/Custom/Content/Themes/Shared/Images/Payment/fp_amex.gif"
                      alt="Pagamento com Cartão de Crédito Amex"
                      title="Pagamento com Cartão de Crédito Amex"
                    />
                    <span class="payment-description">
                      Pagamento com Cartão de Crédito Amex
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {cardPayment.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </td>
                </tr>
                <tr>
                  <td>
                    {(cardPayment / 2).toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </td>
                </tr>
                <tr>
                  <td>
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
                  <th class="flex items-center">
                    <img
                      src="https://texf1k9mfq.map.azionedge.net/Custom/Content/Themes/Shared/Images/Payment/fp_elo.gif"
                      alt="Pagamento com Cartão de Crédito Elo"
                      title="Pagamento com Cartão de Crédito Elo"
                    />
                    <span class="payment-description">
                      Pagamento com Cartão de Crédito Elo
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {cardPayment.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </td>
                </tr>
                <tr>
                  <td>
                    {(cardPayment / 2).toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </td>
                </tr>
                <tr>
                  <td>
                    {(cardPayment / 3).toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="wd-subtitle">Pagamento com boleto bancário</div>
          <div class="grid">
            <table>
              <thead>
                <tr>
                  <th class="flex items-center">
                    <img
                      src="https://texf1k9mfq.map.azionedge.net/Custom/Content/Themes/Shared/Images/Payment/fp_bradesco.gif"
                      alt="Pagamento com Boleto bancário do Bradesco"
                      title="Pagamento com Boleto bancário do Bradcsco"
                    />
                    <span class="payment-description">
                      Pagamento com Boleto bancário do Bradesco
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>R$ 29,04 à vista</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="wd-subtitle">Depósito em conta corrente</div>
          <div class="grid">
            <table>
              <thead>
                <tr>
                  <th class="flex items-center">
                    <img
                      src="https://texf1k9mfq.map.azionedge.net/Custom/Content/Themes/Shared/Images/Payment/fp_bb.gif"
                      alt="Pagamento depósito bancário BB"
                      title="Pagamento depósito bancário BB"
                    />
                    <span class="payment-description">
                      Pagamento depósito bancário BB
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>R$ 29,04 à vista</td>
                </tr>
              </tbody>
            </table>
            <table>
              <thead>
                <tr>
                  <th class="flex items-center">
                    <img
                      src="https://texf1k9mfq.map.azionedge.net/Custom/Content/Themes/Shared/Images/Payment/fp_bradesco.gif"
                      alt="Pagamento depósito bancário Bradesco"
                      title="Pagamento depósito bancário Bradesco"
                    />
                    <span class="payment-description">
                      Pagamento depósito bancário Bradesco
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>R$ 29,04 à vista</td>
                </tr>
              </tbody>
            </table>
            <table>
              <thead>
                <tr>
                  <th class="flex items-center">
                    <img
                      src="https://texf1k9mfq.map.azionedge.net/Custom/Content/Themes/Shared/Images/Payment/fp_itau.gif"
                      alt="Pagamento depósito bancário Itau"
                      title="Pagamento depósito bancário Itau"
                    />
                    <span class="payment-description">
                      Pagamento depósito bancário Itau
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>R$ 29,04 à vista</td>
                </tr>
              </tbody>
            </table>
            <table>
              <thead>
                <tr>
                  <th class="flex items-center">
                    <img
                      src="https://texf1k9mfq.map.azionedge.net/Custom/Content/Themes/Shared/Images/Payment/fp_santander.gif"
                      alt="Pagamento depósito bancário Santander"
                      title="Pagamento depósito bancário Santander"
                    />
                    <span class="payment-description">
                      Pagamento depósito bancário Santander
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>R$ 29,04 à vista</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="wd-footer">
        <span class="wd-icon"></span>
      </div>
    </div>
  );
}
