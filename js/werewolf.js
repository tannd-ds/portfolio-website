// Displayed Variables
let clickMe = document.querySelector('button');
let randomNumberOutput = document.querySelector('h1.random')

// Data-contained Variables
let gameStarted = false;
let numbersArray;

let characters = new Array('Dân Làng', 'Dân Làng', 'Dân Làng', 'Sói', 'Sói');
let players = [];

function getRandomNumber(min, max) {
	let totalEle = max - min + 1;
	let result = Math.floor(Math.random() * totalEle) + min;
	return result;
}

function createArrayOfNumber(start, end) {
	let myArray = [];
	for (let i = start; i <= end; i++) {
		myArray.push(i);
	}
	return myArray;
}


clickMe.addEventListener('click', () => {
	if (!gameStarted) {
		let numberOfPlayers = prompt("Có bao nhiêu người chơi vậy ạ?");
		numbersArray = createArrayOfNumber(0, numberOfPlayers-1);
		gameStarted = true;

		// Minor Display changes
		randomNumberOutput.innerHTML = `Chuyền Máy Cho Người Chơi Đầu Tiên`;
	} else {
		if (numbersArray.length === 0) {
			console.log('No more random number');
			console.log(players);
			return;
		}

		randomNumberOutput.innerHTML = `Chuyền Máy Cho Người Chơi Tiếp Theo`;

		let currentPlayer = prompt("Xin cái Tên đê");

		let randomIndex = getRandomNumber(0, numbersArray.length - 1);
		let randomNumber = numbersArray[randomIndex];

		numbersArray.splice(randomIndex, 1);

		console.log(randomNumber);

		randomNumberOutput.innerHTML = `${currentPlayer} là ${characters[randomNumber]}`;

		players.push({
			Name: currentPlayer,
			Role: characters[randomNumber],
		})
	}

});
