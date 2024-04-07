let lineClass = document.querySelector(".line");
let firstCard = document.querySelector("#firstCard");
let secondCard = document.querySelector("#secondCard");
let cards = document.querySelector(".cards");

let buttons = document.querySelector(".buttons");

let leftButton = document.getElementById("scrollLeft");
let RightButton = document.getElementById("scrollRight");

let headCardClass = document.querySelector(".headCardClass");

let leftScroll = document.getElementById("leftScroll");
let rightScroll = document.getElementById("rightScroll");

let SecondMainCard = document.getElementById("SecondMainCard");

let button2 = document.getElementById("button2");

window.addEventListener('load', (e) => {
    setTimeout(() => {
        lineClass.style.display = "flex";
        lineClass.style.color = "white";
        setTimeout(() => {

            lineClass.style.color = "black";
            lineClass.style.backgroundColor = "white";
        }, 1000)
    }, 2000)

});

firstCard.addEventListener("click", () => {

    location.href = "";
})
secondCard.addEventListener("click", () => {

    location.href = "";
})


headCardClass.addEventListener("mouseover", () => {
   
    buttons.style.display = "flex";
    buttons.style.transition = "opacity 2s ease-out";

    headCardClass.addEventListener("mouseout", () => {
        buttons.style.display = "none";
    })
});

leftButton.addEventListener("click", () => {
    cards.scrollLeft = cards.scrollLeft - 550;

})
RightButton.addEventListener("click", () => {
    cards.scrollLeft = cards.scrollLeft + 550;

})


SecondMainCard.addEventListener("mouseover", () => {
   
    button2.style.display = "flex";
    button2.style.transition = "opacity 2s ease-out";

    SecondMainCard.addEventListener("mouseout", () => {
        button2.style.display = "none";
    })
});

leftScroll.addEventListener("click", () => {
    SecondMainCard.scrollLeft = SecondMainCard.scrollLeft - 550;
    
})
rightScroll.addEventListener("click", () => {
    SecondMainCard.scrollLeft = SecondMainCard.scrollLeft + 550;
    
})




