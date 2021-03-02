//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('#cocktails').addEventListener('click', getDrink)



let input = document.querySelector('input');


function getDrink(){
  // let drinkChoice = document.querySelector('input').value
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input.value.replace(" ", "_")}`;

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        
        let arr = []

        arr.push(data.drinks)

        console.log(arr)

        let drinksList = [];
       

        data.drinks.forEach(el=> drinksList.push(el))
        drinksList.sort((ele1, ele2) => Math.random() - Math.random())



        document.querySelector('h2').innerText = drinksList[0].strDrink
        document.querySelector('img').src = drinksList[0].strDrinkThumb
        document.querySelector('h3').innerText = drinksList[0].strInstructions


      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
