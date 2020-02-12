const cryptocompareUrl = 'https://min-api.cryptocompare.com/data/price?'

$('#submitButton').click(function () {
  const cryptoCode = $('#cryptoInput').val()
  const currencyCode = $('#currencyInput').val()

  const parameterizedUrl = `${cryptocompareUrl}fsym=${cryptoCode}&tsyms=${currencyCode}`

  $.ajax({
    url: parameterizedUrl,
    success: function (result, textStatus, xhr) {
      $('#resultView').text(`$${result[currencyCode]}`)
    }
  })
})
