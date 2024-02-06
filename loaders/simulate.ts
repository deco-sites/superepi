type Props = {
  sku: string;
  productId: string;
};

export default async function getPaymentMethodsLoader(
  { sku, productId }: Props,
) {
  const r = await fetch(
    "https://www.superepi.com.br/widget/product_deliveryfee_hc?ProductID=1062893&SkuID=1062894&PostalCode=22723-006&Template=wd.product.deliveryfee.result&nocache=2814424284",
    {
      method: "GET",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36",
      },
    },
  ).then((res) => res.text());

  return r;
}
