

const currencies = [
  'EUR',
  'CAD',
  'HKD',
  'ISK',
  'PHP',
  'DKK',
  'HUF',
  'CZK',
  'AUD',
  'RON',
  'SEK',
  'IDR',
  'INR',
  'BRL',
  'RUB',
  'HRK',
  'JPY',
  'THB',
  'CHF',
  'SGD',
  'PLN',
  'BGN',
  'TRY',
  'CNY',
  'NOK',
  'NZD',
  'ZAR',
  'USD',
  'MXN',
  'ILS',
  'GBP',
  'KRW',
  'MYR'
]

const Submit1 = document.querySelector('#submit')

  Submit1.addEventListener('click', () => {
    const selector1 = document.querySelector('#fromcurrency').value
    const selector2= document.querySelector('#tocurrency').value 
    const input1 = parseInt(document.querySelector('#number').value)
    fetch (`https://api.exchangeratesapi.io/latest?base=${selector1}`
    )
    .then (Response => Response.json()) 
    .then ( data => {
      const rate = input1 * data.rates[selector2]
      const output1 = document.querySelector('.output')
      output1.textContent = rate
    })
  })

  
  
  
  