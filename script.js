const queryParam = obj =>
  Object.keys(obj).reduce(
    (acc, value, index) =>
      acc +
      value +
      '=' +
      obj[value] +
      (index === Object.keys(obj).length - 1 ? '' : '&'),
    '?'
  )

const cryptocompareUrl = 'https://min-api.cryptocompare.com/data/price'

$('#submitButton').click(function () {
  const parameterizedUrl =
    cryptocompareUrl +
    queryParam({
      fsym: $('#cryptoInput').val(),
      tsyms: $('#currencyInput').val()
    })
  console.log('requesting data from ', parameterizedUrl)
  $.ajax({
    url: parameterizedUrl,
    success: function (result, textStatus, xhr) {
      console.log(result)
      $('#resultView').text(`$${result[$('#currencyInput').val()]}`)
    }
  })
})
