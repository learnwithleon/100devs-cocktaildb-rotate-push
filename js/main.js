//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('#drinks').addEventListener('click', getDrink);

function getDrink() {
  const drink = encodeURIComponent(document.querySelector('input').value);
  const url =
    'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + drink;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      const aCarousel = data.drinks;

      counter = 0;
      const drinkCarousel = () => {
        document.querySelector('h2').innerText = aCarousel[counter].strDrink;
        document.querySelector('img').src = aCarousel[counter].strDrinkThumb;
        document.querySelector('h3').innerText =
          aCarousel[counter].strInstructions;
        counter = (counter + 1) % aCarousel.length;
      };
      setInterval(drinkCarousel, 5000);
    })

    .catch((err) => {
      console.log(`error ${err}`);
    });
}
