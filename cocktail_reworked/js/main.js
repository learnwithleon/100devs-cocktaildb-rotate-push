document.querySelector("button").addEventListener("click", getDrink);

function getDrink() {
  let input = document.querySelector("input").value.toLowerCase();
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`;
  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      function slideImg(i) {
        if (i >= 0) {
          console.log(data.drinks[i]);
          document.querySelector("h2").innerText = data.drinks[i].strDrink;
          document.querySelector("img").src = data.drinks[i].strDrinkThumb;
          document.querySelector("h3").innerText =
            data.drinks[i].strInstructions;
          return setTimeout(function () {
            slideImg(i - 1);
          }, 6000);
        }
      }
      slideImg(data.drinks.length - 1);
    })
    .catch((err) => {
      console.log(`error ${err}`);
      document.querySelector("h3").innerText =
        "ERROR! Please check the drink name";
    });
}
