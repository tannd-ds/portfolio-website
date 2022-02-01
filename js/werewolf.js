
let clickMe = document.querySelector('button');
let randomNumberOutput = document.querySelector('h1.random')

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
let numberOfPlayers = prompt("How many players?");
let numbersArray = createArrayOfNumber(1, numberOfPlayers);

clickMe.addEventListener('click', () => {
	if (numbersArray.length === 0) {
		console.log('No more random number');
		return;
	}
	let randomIndex = getRandomNumber(0, numbersArray.length - 1);
	let randomNumber = numbersArray[randomIndex];
	numbersArray.splice(randomIndex, 1);
	console.log(randomNumber);
	let characters = new Array('Dân Làng', 'Dân Làng', 'Dân Làng', 'Sói', 'Sói');
	randomNumberOutput.innerHTML = `You're ${characters[randomNumber]}`;
});
