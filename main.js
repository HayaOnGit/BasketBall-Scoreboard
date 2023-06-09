const homeScore = document.getElementById("homescore")
const guestScore = document.getElementById("guestscore")
const homeOne = document.getElementById("plusOne-H")
const homeTwo = document.getElementById("plusTwo-H")
const homeThree = document.getElementById("plusThree-H")
const guestOne = document.getElementById("plusOne-G")
const guestTwo = document.getElementById("plusTwo-G")
const guestThree = document.getElementById("plusThree-G")
const Haya = document.getElementById("haya")
const Syed = document.getElementById("syed")
const homeDiv = document.getElementById("home")
const titleHome = document.getElementById("homeTitle")
const titleGuest = document.getElementById("guestTitle")

let countHome = 0
let countGuest = 0


homeOne.addEventListener("click", function() {
    countHome = countHome + 1
    homeScore.innerText = countHome
    checkScore()
})

homeTwo.addEventListener("click", function() {
    countHome = countHome + 2
    homeScore.textContent = countHome
    checkScore()
})

homeThree.addEventListener("click", function() {
    countHome = countHome + 3
    homeScore.textContent = countHome
    checkScore()
})

guestOne.addEventListener("click", function() {
    countGuest = countGuest + 1
    guestScore.textContent = countGuest
    checkScore()
})

guestTwo.addEventListener("click", function() {
    countGuest = countGuest + 2
    guestScore.textContent = countGuest
    checkScore()
})

guestThree.addEventListener("click", function() {
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





