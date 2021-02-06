document.querySelector('#get').addEventListener('click',run)
document.querySelector('#nextDrinkPlz').addEventListener('click',myStopFunction)


let loop


function  run(){
  let input = document.querySelector('input').value
  if(input.includes(" ")){
    input = input.replace(' ', '%20')
  }

  console.log(input)
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`+input
  
  fetch(url)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)
    let drinkLength = data.drinks.length
    let counter = 0
    loop = setInterval( () => {
      let index = counter % drinkLength;
      let random = Math.floor(Math.random() * (data.drinks.length))
      document.querySelector('h3').innerHTML = data.drinks[random].strDrink
      document.querySelector('img').src = data.drinks[random].strDrinkThumb
      document.querySelector('p').innerHTML = data.drinks[random].strInstructions
      console.log(data.drinks[index].strDrink)
      console.log(data)
      ++counter;
    }, 3000)
  })
  .catch(err => {
      console.log(`error ${err}`)
});

}



function myStopFunction() {
clearInterval(loop);
console.log('loop stoppped')
}