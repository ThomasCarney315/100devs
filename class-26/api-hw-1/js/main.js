document.querySelector('button').addEventListener('click', geckoSearch)

function geckoSearch(){
  const search = document.querySelector('input').value
  const url = 'https://api.coingecko.com/api/v3/search?query='+ search
  //search for coins and update DOM with name and sybol of first result
  fetch(url)
      .then(res => res.json())
      .then(data => {
        document.querySelector('h2').innerHTML = `Name: ${data.coins[0].name}(${data.coins[0].symbol})`
        let result = data.coins[0].id
      // use id of first result of search to query price vs usd and update DOM with price
      fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${result}&vs_currencies=usd`)
        .then(res => res.json())
        .then(coin => {
          document.querySelector('h3').innerHTML = `Price is USD: ${coin[result].usd}`
        })
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}


