const request = require('request')
const cheerio = require('cheerio')

request('https://www.vivareal.com.br/imovel/casa-4-quartos-barra-da-tijuca-zona-oeste-rio-de-janeiro-com-garagem-300m2-venda-RS2300000-id-91995896/?__vt=spb:a', 
(err, res, body) => {
  if (err) console.log('Erro: ' + err)

  const $ = cheerio.load(body)

  let price = $('.js-detail-sale-price').text()
  let condomPrice = $('.js-detail-condo-price').text()
  let iptu = $('.js-detail-iptu-price').text()
  let type = $('.js-detail-type-value').text()

  console.log(price)
  console.log(condomPrice)
  console.log(iptu)
  console.log(type)
})