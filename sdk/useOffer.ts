import type { AggregateOffer, UnitPriceSpecification } from 'apps/commerce/types.ts'

const bestInstallment = (acc: UnitPriceSpecification | null, curr: UnitPriceSpecification) => {
    if (curr.priceComponentType !== 'https://schema.org/Installment') {
        return acc
    } else if (curr.name !== 'CreditCard') {
        return acc
    }

    if (!acc) {
        return curr
    }

    if (acc.price > curr.price) {
        return curr
    }

    if (acc.price < curr.price) {
        return acc
    }

    if (acc.billingDuration && curr.billingDuration && acc.billingDuration < curr.billingDuration) {
        return curr
    }

    return acc
}

const installmentToString = (installment: UnitPriceSpecification, sellingPrice: number) => {
    const { billingDuration, billingIncrement, price } = installment

    if (!billingDuration || !billingIncrement) {
        return ''
    }

    const withTaxes = sellingPrice < price

    return `${billingDuration}x de R$ ${billingIncrement} ${withTaxes ? 'c/juros' : 's/juros'}`
}

export const useOffer = (aggregateOffer?: AggregateOffer) => {
    const offer = aggregateOffer?.offers[0]
    const listPrice = offer?.priceSpecification.find(
        spec => spec.priceType === 'https://schema.org/ListPrice',
    )
    const installment = offer?.priceSpecification.reduce(bestInstallment, null)
    const seller = offer?.seller
    const price = offer?.price
    const discountTicket = offer?.priceSpecification.find(spec => {
        return spec.name === 'PaymentSlip'
    })
    const availability = offer?.availability

    return {
        price,
        listPrice: listPrice?.price,
        availability,
        discountTicket: discountTicket?.price,
        seller,
        installments: installment && price ? installmentToString(installment, price) : null,
        billingDuration: installment?.billingDuration,
        billingIncrement: installment?.billingIncrement,
    }
}
