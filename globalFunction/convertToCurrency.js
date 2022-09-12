export const converToCurrency=(price)=>{
    const dollarUSLocale = Intl.NumberFormat('en-US');
    return dollarUSLocale.format(price)
}