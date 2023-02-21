//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'

document.querySelector('button').addEventListener('click', getDrink)

function getDrink(){
    let drink = document.querySelector('input').value.trim()

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        let randomDrink = Math.floor(data.drinks.length * Math.random())
        console.log(randomDrink)
      console.log(data)
      console.log(data.drinks)
      document.querySelector('h2').innerText = data.drinks[randomDrink].strDrink
      document.querySelector('img').src = data.drinks[randomDrink].strDrinkThumb
      document.querySelector('h3').innerText = data.drinks[randomDrink].strInstructions
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}
