//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getDrink)
function getDrink(){

    let userDrink = document.querySelector('input').value.toLowerCase()
    
    const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+userDrink

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
        // let random = Math.round(Math.random() * data.drinks.length) - 1        
        console.log(data)
        
        function carousel(){
                let i = 0
                setInterval(function(){
                document.querySelector('img').src = data.drinks[i].strDrinkThumb
                document.querySelector('h2').innerText = data.drinks[i].strDrink
                document.querySelector('h3').innerText = data.drinks[i].strInstructions
                if(i < data.drinks.length -1){
                i += 1
                } else{
                    i = 0
                }
                },4500)
            }
        carousel()
        
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
       
    }


 