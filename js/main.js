//Get the deck
let deckID = ''
  fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
         deckID = data.deck_id
      })
      .catch(err => {
          console.log(`error ${err}`)
      });

      document.querySelector('button').addEventListener('click', getFetch)

      function getFetch(){
        let deckSave
        const url = `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=2`
      
        fetch(url)
            .then(res => res.json()) // parse response as JSON
            .then(data => {
              console.log(data)
              let val1 = cardValue( data.cards[0].value )
              let val2 = cardValue( data.cards[1].value )

              document.querySelector('#player1').src = data.cards[0].image
              document.querySelector('#player2').src = data.cards[1].image
             
              if(val1>val2) {
                document.querySelector('h3').innerText = 'Player 1 WON'
              } else if (val1< val2) {
                document.querySelector('h3').innerText = 'Player 2 WON'
              } else {
                document.querySelector('h3').innerText = 'WAR'
              }
            })
            .catch(err => {
                console.log(`error ${err}`)
            });
      }

function cardValue(val) {
  if(val === "ACE") {
    return 14
  } else if(val === "KING"){
    return 13
  } else if(val === "QUEEN"){
    return 12
  } else if(val === "JACK"){
    return 11
  } else {
    return Number(val)
  }
}