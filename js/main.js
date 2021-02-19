
document.querySelector('#vodka').addEventListener('click', execute)
document.querySelector('#gin').addEventListener('click', execute)
document.querySelector('#rum').addEventListener('click', execute)
document.querySelector('#tequila').addEventListener('click', execute)


const tempUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
const fullDetails = "https://www.thecocktaildb.com/drink/"
let vodkaCounter = 0;

function execute(idSource) {
    // if (vodkaCounter > 0) {
    //     return;
    // }
    vodkaCounter++;
    // console.log(idSource.srcElement.id)  Returns type of alcohol
    let url;
    removeAllChildNodes(document.querySelector('#carousel'));
    if (idSource.srcElement.id === "vodka") {
        url = tempUrl + 'vodka';
    }
    else if (idSource.srcElement.id === "gin") {
        url = tempUrl + 'gin';
    }
    else if (idSource.srcElement.id === "rum") {
        url = tempUrl + 'rum';
    }
    else if (idSource.srcElement.id === "tequila") {
        url = tempUrl + 'tequila';
    }

    fetch(url) 
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        
        data.drinks.forEach((eachDrink,index) => {
            
            
            const link = document.createElement('a');
            link.setAttribute('target', '_blank')
            let setID = "drinkLink" + index;
            link.id = setID;
            let temp = eachDrink.strDrink.split(' ').join('-');
            link.href = `${fullDetails}${eachDrink.idDrink}-${temp}`
            document.querySelector('#carousel').appendChild(link);

            /* Creating image elements */
            const image = document.createElement('img');
            image.id = "imageIndex" + index;
            image.classList.add("drinkImage");
            image.src = eachDrink.strDrinkThumb;
            document.querySelector(`#${setID}`).appendChild(image);

            
        })
    
    }
    )
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}






