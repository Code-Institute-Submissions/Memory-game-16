var pairs = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]
var flippedCards = []
var foundPairs = 0
var animating = false
let scorePoints = 100

function initGame() {

    flippedCards = []
    foundPairs = 0
    pairs = shuffle(pairs)
    pairs.forEach((item, index) => {
        let card = document.getElementById(index)
        card.style.transform = 'rotateY(0deg)'
        console.log(card.getElementsByTagName('img'))
        card.getElementsByClassName("card-back")[0].style.backgroundImage = 'url(assets/images/' + item + '.jpeg)' 
    })
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
function incremScore(){
    scorePoints = scorePoints + 10 
    let score = document.getElementById("score");
    score.innerText = scorePoints;

}
function decScore(){
    scorePoints = scorePoints - 3 
    let score = document.getElementById("score");
    score.innerText = scorePoints;

}
function update(){
    let score = document.getElementById("score");
    score.innerText = scorePoints;

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
            incremScore()
        } else {
            animating = true
             decScore()
            setTimeout(() => {  
                let card1 = document.getElementById(flippedCards[0])
                let card2 = document.getElementById(flippedCards[1])

                card1.style.transform = 'rotateY(0deg)'
                card2.style.transform = 'rotateY(0deg)'
                flippedCards = []
                animating = false
                clearInterval()
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
            alert("You win , your score is: "+ " " + scorePoints )
        }, 300);
    } 
}


function TIMER() {
        var fiveMinutes = 60 * 5,
        display = document.querySelector('.timer');

        startTimer(fiveMinutes, display);
    }
    var myInterval;
    function startTimer(duration, display) {
        var timer = duration, minutes, seconds;

        myInterval = setInterval(function () {
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                clearInterval(myInterval);
                alert("Too slow, you lose! GAME OVER!")
            }
        }, 1000);
    }

window.addEventListener('load', function () {
    initGame()
    TIMER()
})
