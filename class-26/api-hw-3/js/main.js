document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const motivation = 'https://api.goprogram.ai/inspiration'
  const cats = 'https://cataas.com/cat/says/'

  fetch(motivation)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        document.querySelector('img').src = cats + `Ya know  ${data.author} once said...`
        document.querySelector('p').innerHTML = data.quote
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}