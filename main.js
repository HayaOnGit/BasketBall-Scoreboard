const homeScore = document.getElementById("homescore")
const guestScore = document.getElementById("guestscore")
const onePointForHome = document.getElementById("plusOne-H")
const twoPointsForHome = document.getElementById("plusTwo-H")
const threePointsForHome = document.getElementById("plusThree-H")
const onePointForGuest = document.getElementById("plusOne-G")
const twoPointsForQuest = document.getElementById("plusTwo-G")
const threePointsForQuest = document.getElementById("plusThree-G")
const homeDiv = document.getElementById("home")
const titleHome = document.getElementById("homeTitle")
const titleGuest = document.getElementById("guestTitle")

let countHome = 0
let countGuest = 0


onePointForHome.addEventListener("click", function() {
    countHome = countHome + 1
    homeScore.innerText = countHome
    checkScore()
})

twoPointsForHome.addEventListener("click", function() {
    countHome = countHome + 2
    homeScore.textContent = countHome
    checkScore()
})

threePointsForHome.addEventListener("click", function() {
    countHome = countHome + 3
    homeScore.textContent = countHome
    checkScore()
})

onePointForGuest.addEventListener("click", function() {
    countGuest = countGuest + 1
    guestScore.textContent = countGuest
    checkScore()
})

twoPointsForQuest.addEventListener("click", function() {
    countGuest = countGuest + 2
    guestScore.textContent = countGuest
    checkScore()
})

threePointsForQuest.addEventListener("click", function() {
    countGuest = countGuest + 3
    guestScore.textContent = countGuest
    checkScore()
})

function checkScore() {
    if (countHome > countGuest) {
        titleHome.style.color = 'orange';
        titleGuest.style.color = 'white';
    } else if (countHome < countGuest) {
        titleGuest.style.color = 'orange';
        titleHome.style.color = 'white';
    } else {
        titleHome.style.color = 'white';
        titleGuest.style.color = 'white';
    }
}





