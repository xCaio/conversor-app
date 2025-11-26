export function convertCurrency(value, rates){
    return(parseFloat(value * rates).toFixed(2))
}