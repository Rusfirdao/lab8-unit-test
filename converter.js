// Convert thai bath to us dolar
function converter(currency) {
  return "$" + currency * exchageRate('th', 'usd')
}

function exchageRate(from, to) {
  return 0.03
}

module.exports = converter;