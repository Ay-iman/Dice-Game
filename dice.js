let h1 = document.querySelector("h1"); //selecting the element from html
let imgOne = document.getElementsByClassName("img1")[0];
let imgTwo = document.getElementsByClassName("img2")[0];

let randomNumber1 = Math.floor(Math.random() * 6) + 1; //generating the dice number
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

if (randomNumber1 === randomNumber2) {  // getting who win
  h1.textContent = ("DRAW!");
} else if (randomNumber1 > randomNumber2) {
  h1.textContent = ("PLAYER 1 WINS");
} else if (randomNumber1 < randomNumber2) {
  h1.textContent = ("PLAYER 2 WINS");
}

imgOne.setAttribute("src", `./images/dice${randomNumber1}.png`); // dice image 
imgTwo.setAttribute("src", `./images/dice${randomNumber2}.png`);
