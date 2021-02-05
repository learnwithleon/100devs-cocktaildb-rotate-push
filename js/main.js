//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector('#search').addEventListener('click', getCrunk)
document.querySelector('#clear').addEventListener('click', clearResults)
document.querySelector('#found').addEventListener('click', foundDrink)

let update;
function getCrunk() {
    let drink = document.querySelector('input').value.split('  ').join('%20')
    let url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + drink
    // console.log(url)
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            console.log(data.drinks.length)
            let i = 0
            function displayDrinks() {
                if (i < data.drinks.length) {
                    document.querySelector('h2').innerText = "Name: " + data.drinks[i].strDrink
                    document.querySelector('img').src = data.drinks[i].strDrinkThumb
                    document.querySelector('h3').innerText = "Instructions: " + data.drinks[i].strInstructions
                    i++
                    console.log(i)
                } else if (i >= data.drinks.length) {

                    i = 0
                }
            }
            update = setInterval(displayDrinks, 5000)
        })
        .catch(err => {
            console.log(`error ${err}`)
        });

}

function clearResults() {
    document.querySelector('h2').innerText = "Name"
    document.querySelector('img').src = ""
    document.querySelector('h3').innerText = "Instructions"
    document.querySelector('input').value = ""
    clearTimeout(update)
}

function foundDrink() {
    clearTimeout(update)
}