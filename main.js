document.querySelector("button").addEventListener("click", getit);

function getit() {
  // const inputVal = document.querySelector("input").value;
  const stringVal = document.querySelector("input").value.split(" ").join("_");
  console.log(stringVal);
  // const url =
  //    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + inputVal;
  const url =
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + stringVal;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      function rotate(i) {
        if (i >= 0) {
      console.log(data);
      len = data.length;
      console.log(data.drinks[i]);

      // let random = Math.floor(Math.random() * 5);
      // let drinkname = data.drinks[random].strDrink;
      // let drinkThumb = data.drinks[random].strDrinkThumb;
      // let drinkInst =    data.drinks[random].strInstructions;
      let drinkname = data.drinks[i].strDrink;
      let drinkThumb = data.drinks[i].strDrinkThumb;
      let drinkInst = data.drinks[i].strInstructions;
      document.querySelector("h2").innerText = drinkname;
      document.querySelector("img").src = drinkThumb;
      document.querySelector("h3").innerText = drinkInst;
      return setTimeout(function (){rotate(i - 1)}, 3000);
       }
     }
     rotate(data.drinks.length - 1);
    })
    .catch((err) => {
      console.log(`error  ${err}`);
    });
}
// var numberOfTimes = 20;
// delay = 1000;

// for (let i = 0; i < numberOfTimes; i++) {
//   setTimeout(doSomething, delay * i);
// }
