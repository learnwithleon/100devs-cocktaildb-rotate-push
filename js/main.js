//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector('button').addEventListener('click', runSearch);
document.querySelector('#prev').addEventListener('click', prevPic);
document.querySelector('#next').addEventListener('click', nextPic);
let theDrinks;
let count=0;

function prevPic(){
    if(!count){
        count=theDrinks.length-1;
    }
    else count--;
    document.querySelector('h2').innerText=theDrinks[count].strDrink;
    document.querySelector('img').src=theDrinks[count].strDrinkThumb;
    document.querySelector('h3').innerText=theDrinks[count].strInstructions;
}

function nextPic(){
    if(count===theDrinks.length-1){
        count=0;
    }
    else count++;
    document.querySelector('h2').innerText=theDrinks[count].strDrink;
    document.querySelector('img').src=theDrinks[count].strDrinkThumb;
    document.querySelector('h3').innerText=theDrinks[count].strInstructions;
}

function runSearch(){
let flag=false;
let drink=document.querySelector('input').value;
let drinkArr=drink.split(" ");
let newQuery="";
console.log(drinkArr);
for(let i=0;i<drinkArr.length;i++){
    console.log(drinkArr[i].split(""));
    if((drinkArr[i].split("").length)){
    newQuery+=drinkArr[i];
    newQuery+=" ";
    }
    else{
        flag=true;
    }
}
console.log(newQuery);
drink=newQuery;
fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
    	console.log(data);
        theDrinks=data.drinks;
    	document.querySelector('h2').innerText=data.drinks[0].strDrink;
    	document.querySelector('img').src=data.drinks[0].strDrinkThumb;
    	document.querySelector('h3').innerText=data.drinks[0].strInstructions;
    })
    .catch(err => {
        console.log(`error ${err}`)
    });}