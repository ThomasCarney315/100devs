//function calls with api URLs as arguments for different characters and random
const random = () => getQuote('https://api.gameofthronesquotes.xyz/v1/random')
const tyrion = () => getQuote('https://api.gameofthronesquotes.xyz/v1/author/tyrion')
const varys = () => getQuote('https://api.gameofthronesquotes.xyz/v1/author/varys')
//event listeners for each button
document.querySelector('#random').addEventListener('click', random)
document.querySelector('#tyrion').addEventListener('click', tyrion)
document.querySelector('#varys').addEventListener('click', varys)


function getQuote(choice){
  fetch(choice)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
//updationg DOM with name of character
        document.querySelector('h2').innerHTML = data.character.name
//checking for house membership and updating DOM accordingly
        if(data.character.house.name){
            document.querySelector('h3').innerHTML = data.character.house.name
        } else { document.querySelector('h3').innerHTML = 'none'}  
//updating DOM with quote  
        document.querySelector('p').innerHTML = data.sentence
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}