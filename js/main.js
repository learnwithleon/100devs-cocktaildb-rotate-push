//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM


document.querySelector('button').addEventListener('click' , cocktail)

function cocktail(){
  let imp = document.querySelector('input').value.trim().split(' ').join('_')
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + imp
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        function rotate(i){
          if(i>=0){
            console.log(data.drinks[i]);
            document.querySelector('h2').innerText =data.drinks[i].strDrink
            document.querySelector('img').src =data.drinks[i].strDrinkThumb
            document.querySelector('h3').innerText =data.drinks[i].strInstructions
            return setTimeout(function(){rotate(i-1)}, 5000)
          }
        }
        rotate(data.drinks.length-1)
      })
      .catch(err => {
          console.log(`error ${err}`)
          document.querySelector('h2').innerText = 'ERROR! Please check the drink name'
          document.querySelector('h3').innerText = err
      });
}
