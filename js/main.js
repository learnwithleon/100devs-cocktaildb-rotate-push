//The User inputs a Cocktail. The function requests cocktail name, photo and instructions from the API and places them in the DOM.
document.querySelector('#searchDrinks').addEventListener('click', selectDrinks)

function selectDrinks() {
    // The cocktail is taken from the input provided by the user
    const cocktail = encodeURIComponent(document.querySelector('input').value);

    // Input is attached to the URL concatenating the cocktail search
    const searchUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + cocktail;

    fetch(searchUrl)
        .then((res) => res.json()) //Parse Response as JSON
        .then((data) => {
            const Carousel = data.drinks;

            counter = 0;

            const cocktailCarousel = () => {
                //Gets Cocktail name
                document.querySelector('h2').innerText = Carousel[counter].strDrink;
                //Gets Cocktail Instructions
                document.querySelector('h3').innerText = Carousel[counter].strInstructions;
                //Gets Cocktail Picture
                document.querySelector('img').src = Carousel[counter].strDrinkThumb;

                counter = (counter + 1) % Carousel.length;

            }

            setInterval(cocktailCarousel, 10000);
        })

        .catch((err) => {
            console.log(`error ${err}`)
        })
}