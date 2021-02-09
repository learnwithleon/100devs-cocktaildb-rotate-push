
index = 0
num_drinks = 0

function getImage(){
  url = "https://thecocktaildb.com/api/json/v1/1/search.php?s="
  drink = "margarita"
  
  input = document.querySelector('input')
  drink = input.value
  //console.log( drink )
  
  full_url = url + drink
  
  fetch( full_url )
    .then( res => res.json() )
    .then( data => {
        //console.log(data)
        
        num_drinks = data.drinks.length
        //console.log( "num drinks: ", num_drinks)
        
        //random_index = Math.floor(Math.random()*num_drinks)
        //random_drink = data.drinks[ random_index ]
        
        drink = data.drinks[index]
        //~ console.log( random_drink )
        
        name = drink.strDrink
        console.log(name)
        title = document.querySelector('title')
        title.innerText = name
        
        img_url = drink.strDrinkThumb
        //~ console.log( img_url )
        img = document.querySelector('img')
        img.src = img_url
        
        ins = drink.strInstructions
        //console.log(ins)
        p = document.querySelector('p')
        p.innerText = ins;
        
     })
     .catch( err => {
        console.log(`error ${err} `)
      })
}

function nextImage(){
  index++
  getImage()
  
  if( index >= num_drinks  )
    index = 0
  
}


boton = document.querySelector('button')
boton.addEventListener('click', getImage)


next = document.getElementById('next')
next.addEventListener('click', nextImage)

