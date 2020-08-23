var flippedCards = []
var pairs = [1, 1, 2, 2]

function initGame() {
    pairs = shuffle(pairs)
    document.getElementById(1).getElementsByTagName('h2')[2].innerHTML = pairs[1];
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function flipCard(card){
    if (flippedCards.length < 2) {
        flippedCards.push(card.id)
        console.log(flippedCards)
        card.style.transform = 'rotateY(180deg)'
    }
    
    if (flippedCards.length == 2) {
        //if ()
        setTimeout(() => {  
            let card1 = document.getElementById(flippedCards[0])
            let card2 = document.getElementById(flippedCards[1])

            card1.style.transform = 'rotateY(0deg)'
            card2.style.transform = 'rotateY(0deg)'
            flippedCards = []
         }, 3000);
    }
}

initGame()
