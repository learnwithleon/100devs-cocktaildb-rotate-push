const imageContainer = document.querySelector(".image-container");
const input = document.querySelector("form input")
const submit = document.querySelector("form button")

submit.addEventListener("click", (e) => {
    e.preventDefault()
    console.log(input.value)
    let APIAdress = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input.value}`

    fetch(APIAdress)
        .then(res => res.json())
        .then(data => {
            let allDrinks = data.drinks;
            if (!allDrinks){
                throw new Error("there is no such drink in our database")
            }
            imageContainer.innerHTML = ""
            allDrinks.forEach(drink => {
                console.log(drink)
                const {strDrink, strDrinkThumb, strInstructions} = drink;
                const singleDrink = document.createElement("div");
                singleDrink.classList.add("single-image");
                singleDrink.style.background = `url(${strDrinkThumb})`;
                singleDrink.style.backgroundSize = "contain";

                singleDrink.innerHTML = `
                <div class="overlay">
                    <h2>
                        ${strDrink}
                    </h2>
                    <ul>
                        <li>${drink.strIngredient1}</li>
                        <li>${drink.strIngredient2}</li>
                        <li>${drink.strIngredient3}</li>
                        <li>${drink.strIngredient4}</li>
                        <li>${drink.strIngredient5}</li>
                        <li>${drink.strIngredient6}</li>
                    </ul>

                    <p class="instructions">
                        ${strInstructions}
                    </p>
                `
                imageContainer.appendChild(singleDrink);

                const leftBtn = document.getElementById("left");
                const rightBtn = document.getElementById("right");
                const stopBtn = document.getElementById("stop");
                const images = document.querySelectorAll("#imgs .single-image");
                let idx = 0;
                let running = true;

                let interval = setInterval(run, 2000);

                function run(){
                    idx++;
                    changeImage();
                }

                function changeImage(){
                    if(idx > images.length-1){
                        idx = 0;
                    }else if(idx < 0){
                        idx = images.length-1;
                    }

                    imageContainer.style.transform = `translateX(${-idx*500}px)`
                }

                function resetInterval(){
                    clearInterval(interval);
                    interval = setInterval(run, 2000);
                }

                rightBtn.addEventListener("click", () => {
                    if(running){
                        idx++;
                        changeImage();
                        resetInterval();
                    }else {
                        idx++;
                        changeImage();
                    }
                })

                leftBtn.addEventListener("click", () => {
                    if(running){
                        idx--;
                        changeImage();
                        resetInterval();
                    }else {
                        idx--;
                        changeImage();
                    }
                    
                })

                stopBtn.addEventListener("click", () => {
                    if(running){
                        clearInterval(interval);
                        running = false;
                        stopBtn.innerText = "Restart";
                    }else{
                        running = true;
                        resetInterval()
                        stopBtn.innerText = "Stop";
                    }
                    
                })

            })
        })
        .catch(err => console.log(err))
})




