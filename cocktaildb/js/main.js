document.querySelector('button').addEventListener('click' , myDrinks)

function myDrinks(){
  let drinkChoice = document.querySelector('input').value.split(' ').join(' ')
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+drinkChoice
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        function rotate(i){
          if(i>=0){
            document.querySelector('h2').innerText =data.drinks[i].strDrink
            document.querySelector('h3').innerText =data.drinks[i].strInstructions
            document.querySelector('img').src =data.drinks[i].strDrinkThumb
            
            return setTimeout(function(){rotate(i-1)}, 4000)
          }
        }
        rotate(data.drinks.length-1)
      })
      .catch(err => {
          console.log(`error ${err}`)
          document.querySelector('h2').innerText = 'Drink not found!!'
      });
}
