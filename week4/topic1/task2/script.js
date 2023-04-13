// C - Clubs, D - Diamonds, H - Hearts, S - Spades
// J - Jack, Q - Queen, K - King, A - Ace

const cards = [
	'2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C', 'JC', 'QC', 'KC', 'AC',
	'2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D', 'JD', 'QD', 'KD', 'AD',
	'2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', 'JH', 'QH', 'KH', 'AH',
	'2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '10S', 'JS', 'QS', 'KS', 'AS'
];

function dealCards() {
	let randomCardsSet = new Set();

    while(randomCardsSet.size !== 12) {
        randomCardsSet.add(cards[Math.floor(Math.random() * cards.length)]);
    }

    let randomCards = Array.from(randomCardsSet);

	let player1Cards = randomCards.slice(0, 6);
	let player2Cards = randomCards.slice(6, 12);

	let player1CardsDiv = document.getElementById('player1-cards');
	let player2CardsDiv = document.getElementById('player2-cards');

	player1CardsDiv.innerHTML = '';
	player2CardsDiv.innerHTML = '';

	player1Cards.forEach(card => {
		player1CardsDiv.innerHTML += `<div class="card">${card}</div>`;
	});

	player2Cards.forEach(card => {
		player2CardsDiv.innerHTML += `<div class="card">${card}</div>`;
	});
}

let button = document.getElementById("deal-btn");
button.onclick = () => dealCards();

