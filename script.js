GRID_CONTAINER_ID = 'grid-container';
SQUARE_CLASS = 'square';
NEW_GRID_BUTTON_ID = 'new-grid-button';
RESET_BUTTON_ID = 'reset-button';
SQUARE_COLOR = '#313244';
SQUARE_HOVER_COLOR = '#f38ba8';

document.addEventListener('DOMContentLoaded', function () {
	createGrid(16);

	document
		.getElementById(NEW_GRID_BUTTON_ID)
		.addEventListener('click', clickNewGridButton);
	document
		.getElementById(RESET_BUTTON_ID)
		.addEventListener('click', clickResetButton);
});

function createGrid(size) {
	const container = document.getElementById(GRID_CONTAINER_ID);
	container.innerHTML = '';

	for (let i = 0; i < size * size; i++) {
		const square = document.createElement('div');
		square.classList.add(SQUARE_CLASS);
		container.appendChild(square);
	}

	const squareSize = 480 / size;
	const squares = document.querySelectorAll(`.${SQUARE_CLASS}`);
	squares.forEach((square) => {
		square.style.flex = `1 0 ${squareSize}px`;
		square.style.height = `${squareSize}px`;
	});

	addEventListeners();
}

function addEventListeners() {
	const squares = document.querySelectorAll(`.${SQUARE_CLASS}`);
	squares.forEach((square) => {
		square.addEventListener('mouseover', () => {
			square.style.backgroundColor = SQUARE_HOVER_COLOR;
		});
	});
}

function clickNewGridButton() {
	const size = prompt('Enter the size of the grid (1-100):');
	if (size < 1 || size > 100) {
		alert('Please enter a number between 1 and 100');
		return;
	}
	createGrid(size);
}

function clickResetButton() {
	const squares = document.querySelectorAll(`.${SQUARE_CLASS}`);
	squares.forEach((square) => {
		square.style.backgroundColor = SQUARE_COLOR;
	});
}
