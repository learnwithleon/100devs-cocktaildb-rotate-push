//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
let input = document.querySelector('input')

document.querySelector('button').addEventListener('click', serveDrink)
document.querySelector('.right').addEventListener('click', goRight)
document.querySelector('.left').addEventListener('click', goLeft)

let data
let n;

function serveDrink(){
	fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input.value.replace(" ", "_")}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        if (data.drinks < 1) {
            document.querySelector('.arrows').classList.add('hidden')
            document.querySelector('h2').innerText = ""
            document.querySelector('img').src = ""
            document.querySelector('h3').innerText = ""
            document.querySelector('h2').innerText = `Couldn't find the recipe for "${input.value}".\nTry a different one!`
            return;
        }
        setData(data.drinks)
        n = 0
    	let drink = data.drinks
        document.querySelector('.arrows').classList.remove('hidden')
    	showInfo(drink)
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

function setData(obj){
    data = obj
}

function goRight(){
    if (n === data.length -1) { n = 0 }
    else { n++ }
    showInfo(data)
}

function goLeft(){
    if (n === 0) { n = data.length - 1 }
    else { n-- }
    showInfo(data)
}

function showInfo(data){
    document.querySelector('img').src = data[n].strDrinkThumb
    document.querySelector('h2').innerText = data[n].strDrink
    document.querySelector('h3').innerText = data[n].strInstructions
    document.querySelector('h4').innerText = `${n + 1}/${data.length}`
}