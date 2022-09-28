export const converToCurrency=(price,currency)=>{
    const dollarUSLocale = Intl.NumberFormat('en-US',currency&&{ style: 'currency', currency: currency });
    return dollarUSLocale.format(price)
}