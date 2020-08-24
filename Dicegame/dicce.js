let header = document.querySelector("h1");
let player1 = document.querySelector(".img1");
let player2 = document.querySelector(".img2");
let playAgain = document.querySelector("h4");

let randomNum1 = randomNum();
let randomNum2 = randomNum();

player1.setAttribute("src", `images/dice${randomNum1}.png`);
player2.setAttribute("src", `images/dice${randomNum2}.png`);

if (randomNum1 > randomNum2) {
	header.innerHTML = "Player 1 wins";
} else if (randomNum2 > randomNum1) {
	header.innerHTML = "Player 2 wins";
} else {
	header.innerHTML = "Draw";
}

document.addEventListener("keypress", function (event) {
	if (event.which === 32) {
		newGame();
	}
});

playAgain.addEventListener("click", function () {
	newGame();
});

function newGame() {
	let header = document.querySelector("h1");
	let player1 = document.querySelector(".img1");
	let player2 = document.querySelector(".img2");

	let randomNum1 = randomNum();
	let randomNum2 = randomNum();

	player1.setAttribute("src", `images/dice${randomNum1}.png`);
	player2.setAttribute("src", `images/dice${randomNum2}.png`);

	if (randomNum1 > randomNum2) {
		header.innerHTML = "Player 1 wins";
	} else if (randomNum2 > randomNum1) {
		header.innerHTML = "Player 2 wins";
	} else {
		header.innerHTML = "Draw";
	}
}

function randomNum() {
	let randomNum = Math.ceil(Math.random() * 6);
	return randomNum;
}
