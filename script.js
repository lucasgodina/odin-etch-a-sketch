document.addEventListener('DOMContentLoaded', function () {
	const container = document.getElementById('grid-container');

	for (let i = 0; i < 16 * 16; i++) {
		const square = document.createElement('div');
		square.classList.add('square');
		container.appendChild(square);
	}

	const squares = document.querySelectorAll('.square');
	squares.forEach((square) => {
		square.addEventListener('mouseover', () => {
			square.style.backgroundColor = 'lightblue';
		});
	});
});
