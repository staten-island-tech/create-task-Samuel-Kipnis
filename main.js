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
		alert('The number of sides must be a whole number.');
		return false;
	}
}

function displayData(rolls) {
	DOM.results.innerHTML = '';

	let correctRolls = 0;
	rolls.forEach((roll) => {
		if (roll.correct) correctRolls++;
	});

	let numRolls = rolls.length;

	DOM.prev.innerHTML = `% Correct: ${(
		(correctRolls / numRolls) *
		100
	).toFixed(2)}%`;

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

		displayData(rolls);
	}
});
