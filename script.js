document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.getElementById('card-container');
    const images = [
        'cards/card1.png',
		'cards/card2.png',
		'cards/card3.png',
		'cards/card4.png',
		'cards/card5.png',
		'cards/card6.png',
		'cards/card7.png',
		'cards/card8.png',
		'cards/card9.png',
		'cards/card10.png',
		'cards/card11.png',
		'cards/card12.png',
		'cards/card13.png',
		'cards/card14.png',
		'cards/card15.png',
		'cards/card16.png',
		'cards/card17.png',
		'cards/card18.png',
		'cards/card19.png',
		'cards/card20.png',
		'cards/card21.png',
		'cards/card22.png',
		'cards/card23.png',
		'cards/card24.png',
		'cards/card25.png',
		'cards/card26.png',
		'cards/card27.png',
		'cards/card28.png',
		'cards/card29.png',
		'cards/card30.png',
		'cards/card31.png',
		'cards/card32.png',
		'cards/card33.png',
		'cards/card34.png',
		'cards/card35.png',
		'cards/card36.png',
		'cards/card37.png',
		'cards/card38.png',
		'cards/card39.png',
		'cards/card40.png',
		'cards/card41.png',
		'cards/card42.png',
		'cards/card43.png',
		'cards/card44.png',
		'cards/card45.png',
		'cards/card46.png',
		'cards/card47.png',
		'cards/card48.png',
		'cards/card49.png',
		'cards/card50.png',
    ];

    const shuffleSound = new Audio('shuffle.mp3'); // Add your sound file path here

    document.getElementById('generate-cards').addEventListener('click', () => {
        const cardCount = parseInt(document.getElementById('card-count').value, 10) || 1;
        playShuffleSound();
        generateCards(cardCount);
    });

    function playShuffleSound() {
        shuffleSound.play();
    }

    function generateCards(count) {
        // Clear the card container
        cardContainer.innerHTML = '';

        for (let i = 0; i < count; i++) {
            createCard(cardContainer);
        }

        // Initialize Sortable.js on the card container
        new Sortable(cardContainer, {
            animation: 150,
            ghostClass: 'sortable-ghost'
        });
    }

    function createCard(container) {
        // Create a new div for the card
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');

        // Select a random image from the array
        const randomImage = images[Math.floor(Math.random() * images.length)];

        // Set the background image of the card div
        cardDiv.style.backgroundImage = `url(${randomImage})`;

        // Create overlay div
        const overlayDiv = document.createElement('div');
        overlayDiv.classList.add('overlay');

        // Create overlay text divs
        const overlayText = document.createElement('div');
        overlayText.classList.add('overlay-text');
        overlayText.innerText = generateOverlayText();

        const overlayNote = document.createElement('div');
        overlayNote.classList.add('overlay-info');
        overlayNote.innerText = generateNoteName();

        const overlayScale = document.createElement('div');
        overlayScale.classList.add('overlay-info');
        overlayScale.innerText = generateScaleType();

        const overlayRoman = document.createElement('div');
        overlayRoman.classList.add('overlay-info');
        overlayRoman.innerText = generateRomanNumeral();

        const overlayRhythm = document.createElement('div');
        overlayRhythm.classList.add('overlay-info');
        overlayRhythm.innerText = generateRhythmicPattern();

        // Append overlay texts to overlay div
		overlayDiv.appendChild(overlayText);
        overlayDiv.appendChild(overlayNote);
        overlayDiv.appendChild(overlayScale);
        overlayDiv.appendChild(overlayRoman);
        overlayDiv.appendChild(overlayRhythm);

        // Append overlay div to card div
        cardDiv.appendChild(overlayDiv);

        // Append the card to the container
        container.appendChild(cardDiv);
    }

    function generateOverlayText() {
        const messages = [
            'Change your perspective',
			'Simplify and start again',
			'Look for the hidden patterns',
			'Break the rules creatively',
			'Embrace the unexpected',
			'Combine random elements',
			'Find beauty in mistakes',
			'Work in small increments',
			'Remove the obvious',
			'Switch to a different medium',
			'Imagine the opposite outcome',
			'Use constraints to your advantage',
			'Prioritize intuition over logic',
			'Start with the end in mind',
			'Introduce a new variable',
			'Limit your choices deliberately',
			'Focus on process, not results',
			'Collaborate with a stranger',
			'Ask "What if?" questions',
			'Disconnect and take a break',
			'Reflect on past successes',
			'Draw inspiration from nature',
			'Use an unusual tool',
			'Let go of your first idea',
			'Find a new point of view',
			'Experiment with scale',
			'Embrace contradictions',
			'Distill the essence',
			'Translate your idea into sound',
			'Use silence as a guide',
			'Start with a random object',
			'Iterate with variations',
			'Follow a nonsensical rule',
			'Emphasize negative space',
			'Change your working environment',
			'Seek discomfort in ideas',
			'Think in metaphors',
			'Deconstruct and reassemble',
			'Use a different language',
			'Shift your timeframe',
			'Imagine an alternate history',
			'Look for accidental alignments',
			'Abstract the familiar',
			'Use an arbitrary constraint',
			'Focus on one sense',
			'Explore minimalism',
			'Emphasize contrasts',
			'Reverse engineer a concept',
			'Play with opposites',
			'Trust the process',
        ];

        return messages[Math.floor(Math.random() * messages.length)];
    }

    function generateNoteName() {
        const notes = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
        return notes[Math.floor(Math.random() * notes.length)];
    }

    function generateScaleType() {
        const scales = ['Major', 'Minor'];
        return scales[Math.floor(Math.random() * scales.length)];
    }

    function generateRomanNumeral() {
        const numerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'];
        return numerals[Math.floor(Math.random() * numerals.length)];
    }

    function generateRhythmicPattern() {
        const patterns = [
            '◯◯◯◯',
			'◯◯◯⬤',
			'◯◯⬤◯',
			'◯◯⬤⬤',
			'◯⬤◯◯',
			'◯⬤◯⬤',
			'◯⬤⬤◯',
			'◯⬤⬤⬤',
			'⬤◯◯◯',
			'⬤◯◯⬤',
			'⬤◯⬤◯',
			'⬤◯⬤⬤',
			'⬤⬤◯◯',
			'⬤⬤◯⬤',
			'⬤⬤⬤◯',
			'⬤⬤⬤⬤',
        ];
        return patterns[Math.floor(Math.random() * patterns.length)];
    }
});
