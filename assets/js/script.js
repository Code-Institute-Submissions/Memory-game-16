var pairs = [1, 1, 2, 2]
var flippedCards = []
var foundPairs = 0
var animating = false

function initGame() {
    flippedCards = []
    foundPairs = 0
    pairs = shuffle(pairs)
    pairs.forEach((item, index) => {
        let card = document.getElementById(index)

        card.style.transform = 'rotateY(0deg)'
        console.log(card.getElementsByTagName('img'))
        card.getElementsByTagName('img')[0].src = 'assets/images/' + index + '.jpeg'
    })
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function flipCard(card){
    if (animating) return

    if (flippedCards.length < 2) {
        flippedCards.push(card.id)
        console.log(flippedCards)
        card.style.transform = 'rotateY(180deg)'
    }
    
    if (flippedCards.length == 2) {
        console.log(pairs[flippedCards[0]])
        console.log(pairs[flippedCards[1]])
        if (pairs[flippedCards[0]] == pairs[flippedCards[1]]) {
            flippedCards = []
            foundPairs += 1
        } else {
            animating = true
            setTimeout(() => {  
                let card1 = document.getElementById(flippedCards[0])
                let card2 = document.getElementById(flippedCards[1])

                card1.style.transform = 'rotateY(0deg)'
                card2.style.transform = 'rotateY(0deg)'
                flippedCards = []
                animating = false
            }, 2000);
        }

        
    }

    if (foundPairs == pairs.length / 2) {
        animating = true
        setTimeout(() => {  
            initGame()
            animating = false
        }, 2000);
        setTimeout(() => {  
            alert("You win")
        }, 300);
    } 
}

window.addEventListener('load', function () {
    initGame()
})
