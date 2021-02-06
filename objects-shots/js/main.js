//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
//Handle spaces within the search
//Handle mispellings
//a carousel of drinks

document.querySelector('button').addEventListener('click', getDrink)

function getDrink(){
  let inputVal = document.querySelector('input').value.split(' ').join('_')
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+inputVal

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        function rotate(i) {
          if(i >= 0) {
            console.log(data.drinks[i]);
            let drinkName = data.drinks[i].strDrink
            let drinkThumb = data.drinks[i].strDrinkThumb
            let drinkInst = data.drinks[i].strInstructions
            document.querySelector('h2').innerText = drinkName
            document.querySelector('img').src = drinkThumb
            document.querySelector('h3').innerText = drinkInst
            return setTimeout(function() {rotate(i - 1)}, 10000)
            }
          }
            rotate(data.drinks.length-1)
      })
      .catch(err => {
          console.log(`error ${err}`)
          document.querySelector('h2').innerText = 'Are you sure that\'s a drink?'
      })
}











