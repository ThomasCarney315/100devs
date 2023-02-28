document.querySelector('button').addEventListener('click', geckoSearch)

function geckoSearch(){
  const search = document.querySelector('input').value
  const url = 'https://api.coingecko.com/api/v3/search?query='+ search
  //search for coins
  fetch(url)
      .then(res => res.json())
      .then()
      .then(data => {
        //check if search returns nothing
        if(!data.coins[0]){
          document.querySelector('h3').innerHTML = 'no results'
          document.querySelector('h2').innerHTML = 'no results'
        }
        //loop through and display all results 
        document.querySelector('ul').innerHTML = ''
        data.coins.forEach(coin =>{
          const li = document.createElement('li')
          li.textContent = coin.name + ` (${coin.symbol})`
          document.querySelector('ul').appendChild(li)
        })

        //update DOM with name and sybol of first result
        document.querySelector('h2').innerHTML = `Best match: ${data.coins[0].name} (${data.coins[0].symbol})`
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


