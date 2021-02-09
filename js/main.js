let rotationToggle = 1  //rotationToggle prevents multiple rotation instances by clicking the 'Start Rotating' button more than once
let rotation = setInterval(getRandomDrink, 2000)
document.querySelector('button.stop-rotation').addEventListener('click', stopRotating)
document.querySelector('button.rotating').addEventListener('click', function(){
    if (rotationToggle == 0){
        rotationToggle = 1
        rotation = setInterval(getRandomDrink, 3000)
    }
})

function getRandomDrink(){
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
        fetch(url)
        .then (response => response.json())
        .then(data =>{
            document.querySelector('h2.rotating').innerText = data.drinks[0].strDrink
            document.querySelector('img.rotating').src = data.drinks[0].strDrinkThumb
            document.querySelector('h3.rotating').innerText = data.drinks[0].strInstructions
        })

}

function stopRotating(){
    if(rotationToggle == 1){
        clearInterval(rotation)
        rotationToggle = 0
    }
}




