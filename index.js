
var randomNumber1 = Math.floor(Math.random() * 6 + 1);
document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");

var randomNumber2 = Math.floor(Math.random() * 6 + 1);
document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
    document.querySelectorAll("h1")[0].innerHTML = '<img class="win" src="https://sdk.bitmoji.com/render/panel/09501742-87e5-4631-a9af-e19c4558189b-2bd37fa4-423b-42b3-aa1e-e973c0adcab7-v1.png?transparent=1&palette=1" alt="win!"> Player One Wins!';
} else if (randomNumber1 < randomNumber2) {
    document.querySelectorAll("h1")[0].innerHTML = 'Player Two Wins! <img class="win" src="https://sdk.bitmoji.com/render/panel/09501742-87e5-4631-a9af-e19c4558189b-2bd37fa4-423b-42b3-aa1e-e973c0adcab7-v1.png?transparent=1&palette=1" alt="win!">';
} else {
    document.querySelectorAll("h1")[0].innerHTML = '<img class="win" src="https://sdk.bitmoji.com/render/panel/09501742-87e5-4631-a9af-e19c4558189b-2bd37fa4-423b-42b3-aa1e-e973c0adcab7-v1.png?transparent=1&palette=1" alt="win!"> Draw! <img class="win" src="https://sdk.bitmoji.com/render/panel/09501742-87e5-4631-a9af-e19c4558189b-2bd37fa4-423b-42b3-aa1e-e973c0adcab7-v1.png?transparent=1&palette=1" alt="win!">';
}
