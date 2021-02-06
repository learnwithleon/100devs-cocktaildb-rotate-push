//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getCocktail);



function getCocktail() {
    inputValue = document.querySelector('input').value.trim().replace(/\s+/g, ' ');
    const url ='https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+inputValue;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data.drinks);
        for (let i = 0; i < data.drinks.length; i++) {
            const image = document.createElement('img');
            document.querySelector("#slide-" + (i+1)).innerHTML = `
            <img src=${data.drinks[i].strDrinkThumb}> alt="">`;
        }
    })
}
