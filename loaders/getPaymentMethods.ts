type Props = {
    sku: string
    productId: string
}

export default async function getPaymentMethodsLoader({ sku, productId }: Props) {
    const r = await fetch(
        'https://www.superepi.com.br/widget/product_payment_options?SkuID=1062893&ProductID=1062893&Template=wd.product.payment.options.result.template&ForceWidgetToRender=true&nocache=10095669438',
        {
            method: 'GET',
            headers: {
                'User-Agent':
                    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
            },
        },
    ).then(res => res.text())

    return r
}
