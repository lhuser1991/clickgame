let aireDeJeu = document.querySelector("body");
let icone = document.querySelector("button");

let randX = 0;
let randY = 0;

// dimensions de l'écran
console.log(aireDeJeu.offsetHeight);
console.log(aireDeJeu.offsetWidth);

// dimensions du bouton
console.log(icone.offsetHeight);
console.log(icone.offsetWidth);

icone.addEventListener("mouseenter", (e) => {

    // donne une valeur aléatoire permettant au bouton
    // d'apparaitre dans l'écran sans déborder
    randX = Math.floor(Math.random()*(aireDeJeu.offsetWidth - 126));
    randY = Math.floor(Math.random()*(aireDeJeu.offsetHeight - 33));
    
    icone.style.top= randY + "px";
    icone.style.left= randX + "px";

    // console.log("ok");
    // console.log(e.target.style.top);
    // console.log(e.target.style.left);
    // console.log(e.target);

})

icone.addEventListener("click", () => {
    icone.style.background = "red";
})

// const button = document.querySelector("button");

// console.log(button);

// function moveButton () {

//     // acces a la largeur de l'écran
//     const width = document.body.clientWidth;
//     // acces a la hauteur de l'écran
//     const height = document.body.clientHeight;

//     const buttonRect = button.getClientRects()[0];

//     button.style.top = Math.abs(height * Math.random() - buttonRect.height) + "px";
//     button.style.left = Math.abs(width * Math.random() - buttonRect.width) + "px";

//     console.log(buttonRect);

// }

// document.addEventListener("mousemove", (e) => {
//     // console.log(e.clientX);
//     // console.log(e.clientY);

//     const mouseX = e.clientX;
//     const mouseY = e.clientY;

//     const rect = button.getClientRects()[0];
//     // console.log(rect.x);

//     const buttonX = rect.x;
//     const buttonY = rect.y;
//     const padding = 20;

//     if ((mouseX > buttonX - padding) && (mouseY > buttonY - padding) && 
//     (mouseX < buttonX + rect.width + padding) && (mouseY < buttonY + rect.height + padding)) {
//         moveButton();
//     }

// })