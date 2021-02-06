document.querySelector('button').addEventListener('click', getDrink)

function getDrink() {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

  const userInput = (document.querySelector('input').value).split(' ').join('%20')

  fetch (url+userInput)
    .then (res => res.json())
    .then (data => {
      for (i=0 ; i< data.drinks.length; i++) {
        (function (i) {
          const magic = function () {
            document.querySelector('h2').innerText = data.drinks[i].strDrink
            document.querySelector('img').src = data.drinks[i].strDrinkThumb
            document.querySelector('h3').innerText = data.drinks[i].strInstructions
          }
          setTimeout(magic,3000*i)
        })(i)
      }
    })
    .catch (err => alert('no result found'))
    }


