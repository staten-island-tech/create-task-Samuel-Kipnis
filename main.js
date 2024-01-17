// Idea: Dice Roller

const rolls = [];

const DOM = {
	form: document.getElementById('form'),
	numSidesInput: document.getElementById('numSides'),
	guessNumInput: document.getElementById('guessNum'),
	results: document.getElementById('results'),
	prev: document.getElementById('prev'),
};

function rollDie(numSides) {
	const randNum = Math.floor(Math.random() * numSides) + 1;
	return randNum;
}

function valuesAreValid(numSides, guessNum) {
	if (guessNum < 1 || guessNum > numSides) {
		alert(`Your guess must be a whole number between 1 and ${numSides}`);
		return false;
	}

	if (numSides > 0 && Number.isInteger(numSides)) {
		return true;
	} else {
		alert('You must enter only whole numbers.');
		return false;
	}
}

function displayData(rolls) {
	DOM.results.innerHTML = '';
	DOM.prev.innerHTML = '';
	for (let i in rolls) {
		if (i == 0) {
			DOM.results.innerHTML += `<p>You rolled a ${rolls[i].value}</p>`;
			if (rolls[i].correct === true) {
				DOM.results.innerHTML += `<p class='green'>Correct Guess</p>`;
			}
		} else {
			DOM.prev.innerHTML += `<li>You rolled a ${rolls[i].value}</li>`;
			if (rolls[i].correct === true) {
				DOM.prev.innerHTML += `<p class='green'>Correct Guess</p>`;
			}
		}
	}
}

DOM.form.addEventListener('submit', (e) => {
	e.preventDefault();

	const numSides = Number(DOM.numSidesInput.value);
	const guessNum = Number(DOM.guessNumInput.value);

	if (valuesAreValid(numSides, guessNum)) {
		const randNum = rollDie(numSides);
		rolls.unshift({
			correct: randNum === guessNum,
			value: randNum,
		});

		console.log(rolls);
		displayData(rolls, guessNum);
	}
});
