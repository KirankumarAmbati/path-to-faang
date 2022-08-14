function Wordle(ele, words, noOfLettersInWord, noOfGuesses) {
    this.ele = document.querySelector(ele);
    this.words = words;
    this.noOfGuesses = noOfGuesses;
    this.noOfLettersInWord = noOfLettersInWord;

    this.init();
}

Wordle.prototype.init = function() {
    this.pos = [0, 0];
    this.grid = new Array(this.noOfGuesses).fill('-').map(() => new Array(this.noOfLettersInWord).fill('-'));
    this.selectedWord = this.words[Math.floor(Math.random() * this.words.length)];

    console.log({ selectedWord: this.selectedWord });

    const wordleContainer = document.createElement('div');
    wordleContainer.classList.add('wordle-container');

    for(let i=0; i<this.noOfGuesses; i++) {
        const row = document.createElement('div');
        row.classList.add('row');

        for(let j=0; j<this.noOfLettersInWord; j++) {
            const cell = document.createElement('span');
            cell.classList.add('cell');
            cell.dataset.pos = `${i}-${j}`;
            row.appendChild(cell);
        }

        wordleContainer.appendChild(row);
    }
    
    this.ele.appendChild(wordleContainer);
    window.addEventListener('keyup', this.inputHandler.bind(this));
}

Wordle.prototype.inputHandler = function(e) {
    if(e.keyCode >= 65 && e.keyCode <= 90) {
        const [x, y] = this.pos;
        if(y>= this.noOfLettersInWord) return;
        const selectedChar = e.key.toUpperCase();
        document.querySelector(`span[data-pos="${x}-${y}"]`).textContent = selectedChar;
        this.grid[x][y] = selectedChar;
        this.pos = [x, y + 1];
    } else if(e.key === 'Enter') {
        const [_, y] = this.pos;
        if(y < this.noOfLettersInWord) {
            alert('Complete the word!');
            return;
        }

        this.validateRow();
    }
}

Wordle.prototype.validateRow = function() {
    const [x, y] = this.pos;
    for(let i=0; i<this.noOfLettersInWord; i++) {
        const selectedChar = this.grid[x][i];
        let color = "lightgrey";
        if(this.selectedWord.includes(selectedChar)) {
            if(this.selectedWord.indexOf(selectedChar) === i) {
                color = 'green';
            } else {
                color = 'orange';
            }
        }

        document.querySelector(`span[data-pos="${x}-${i}"]`).style.backgroundColor = color;

    }
    this.pos = [x + 1, 0];
    if(x === this.noOfGuesses - 1) {
        alert('Game over');
        this.gameReset();
    }
}

Wordle.prototype.gameReset = function() {
    this.pos = [0, 0];
    this.grid = new Array(this.noOfGuesses).fill('-').map(() => new Array(this.noOfLettersInWord).fill('-'));
    this.selectedWord = this.words[Math.floor(Math.random() * this.words.length)];

    for(let i=0; i<this.noOfGuesses; i++) {
        for(let j=0; j<this.noOfLettersInWord; j++) {
            const ele = document.querySelector(`span[data-pos="${i}-${j}"]`);
            ele.textContent = '';
            ele.style.backgroundColor = '';
        }
    }

}
