// Idea: Dice Roller

const DOM = {
	form: document.getElementById('form'),
	numSidesInput: document.getElementById('numSides'),
	numRollsInput: document.getElementById('numRolls'),
	guessNumInput: document.getElementById('guessNum'),
	guessValueInput: document.getElementById('guessValue'),
	results: document.getElementById('results'),
	prev: document.getElementById('pre'),
};

function roll(numSides) {
	const randNum = Math.floor(Math.random() * numSides) + 1;
	return randNum;
}

function rollMult(numSides, numRolls, guessNum, guessValue) {
	const rolls = {};
	prev.insertAdjacentHTML('afterbegin', results.innerHTML + '<br>');
	results.innerHTML = '';

	if (guessNum < 1 || guessNum > numSides) {
		alert(`Your guess must be a whole number between 1 and ${numSides}`);
		return;
	}

	if (
		numSides > 0 &&
		Number.isInteger(numSides) &&
		numRolls > 0 &&
		Number.isInteger(numRolls)
	) {
		for (let i = 0; i < numRolls; i++) {
			const randNum = roll(numSides);
			rolls[randNum] = (rolls[randNum] || 0) + 1;
		}
	} else {
		alert('You must enter only whole numbers.');
	}

	Object.keys(rolls).forEach((key) => {
		console.log('hi');
		const listEl = document.createElement('li');
		if (Number(key) === guessNum) {
			const bold = document.createElement('b');
			bold.textContent = `${key}: ${rolls[key]} time${
				rolls[key] > 1 ? 's' : ''
			}`;
			listEl.append(bold);

			if (rolls[key] === guessValue) {
				listEl.innerHTML += '<br> Correct Guess ✅';
			}
		} else {
			listEl.textContent = `${key}: ${rolls[key]} time${
				rolls[key] > 1 ? 's' : ''
			}`;
		}

		results.append(listEl);
	});
}

DOM.form.addEventListener('submit', (e) => {
	e.preventDefault();
	console.log(
		Number(DOM.numSidesInput.value),
		Number(DOM.numRollsInput.value),
		Number(DOM.guessNumInput.value),
		Number(DOM.guessValueInput.value)
	);
	rollMult(
		Number(DOM.numSidesInput.value),
		Number(DOM.numRollsInput.value),
		Number(DOM.guessNumInput.value),
		Number(DOM.guessValueInput.value)
	);
});
