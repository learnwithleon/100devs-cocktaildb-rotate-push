function switcherd1(){
  fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Caipirinha')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.drinks[0].strDrink
        document.querySelector('img').src = data.drinks[0].strDrinkThumb
        document.querySelector('h3').innerText = data.drinks[0].strInstructions
      })
  setTimeout(switcherd2,4000)
}
function switcherd2(){
  fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Mojito')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.drinks[0].strDrink
        document.querySelector('img').src = data.drinks[0].strDrinkThumb
        document.querySelector('h3').innerText = data.drinks[0].strInstructions
      })
  setTimeout(switcherd3,4000)
}
function switcherd3(){
  fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Bourbon')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.drinks[0].strDrink
        document.querySelector('img').src = data.drinks[0].strDrinkThumb
        document.querySelector('h3').innerText = data.drinks[0].strInstructions
      })
  setTimeout(switcherd4,4000)
}
function switcherd4(){
  fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Pisco')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.drinks[0].strDrink
        document.querySelector('img').src = data.drinks[0].strDrinkThumb
        document.querySelector('h3').innerText = data.drinks[0].strInstructions
      })
  setTimeout(switcherd5,4000)
}
function switcherd5(){
  fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Gin')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.drinks[0].strDrink
        document.querySelector('img').src = data.drinks[0].strDrinkThumb
        document.querySelector('h3').innerText = data.drinks[0].strInstructions
      })
  setTimeout(switcherd1,4000)
}

switcherd1()
