document.querySelector('button').addEventListener('click', geckoSearch)

function geckoSearch(){
  const search = document.querySelector('input').value
  const url = 'https://api.coingecko.com/api/v3/search?query='+ search

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}