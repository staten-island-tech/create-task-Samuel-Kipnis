// Idea: Dice Roller

const DOM = {
    button: 
};

function roll(numSides) {
	const randNum = Math.floor(Math.random() * numSides) + 1;
	return randNum;
}

function main(numSides, numRolls) {
	const rolls = {};

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
		throw new Error('Must enter positive integer values');
	}

	console.log(rolls);
}

main(6, 10);
