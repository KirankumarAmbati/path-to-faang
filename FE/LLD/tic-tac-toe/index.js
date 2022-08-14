function TicTacToe(el, noOfRows) {
    this.el = document.querySelector(el);
    this.players = ['X', 'O'];
    this.noOfRows = noOfRows;

    this.init();
}

TicTacToe.prototype.init = function() {
    this.grid = new Array(3).fill('-').map(el => new Array(3).fill('-'));
    this.currentPlayer = '';
    this.noOfTurns = 0;
    this.renderGrid();
}


TicTacToe.prototype.onCellClick = function(e) {
    if(e.target.tagName === "SPAN" && e.target.textContent === '-') {
        const [x, y] = e.target.dataset.cell.split('-');

        this.noOfTurns++;
        this.currentPlayer = this.players[this.noOfTurns % 2]
        e.target.textContent = this.currentPlayer;
        this.grid[x][y] = this.currentPlayer;

        if(this.checkForWinner(x, y)) {
            alert(this.currentPlayer + ' is the winner!');
            this.init();
        }
    }
}

TicTacToe.prototype.renderGrid = function() {
    this.el.innerHTML = '';

    const ticTacToeContainer = document.createElement('div');
    ticTacToeContainer.classList.add('tictactoe-container');

    for(let i=0; i<this.noOfRows; i++) {
        const row = document.createElement('div');
        row.classList.add('row');

        for(let j=0; j<this.noOfRows; j++) {
            const cell = document.createElement('span');
            cell.classList.add('cell');
            cell.textContent = this.grid[i][j];
            cell.dataset.cell = `${i}-${j}`;
            cell.addEventListener('click', this.onCellClick.bind(this));
            row.appendChild(cell);
        }

        ticTacToeContainer.appendChild(row);
    }

    this.el.appendChild(ticTacToeContainer);
}

TicTacToe.prototype.checkForWinner = function(x, y) {
    return this.checkRow(x, y) || this.checkColumn(x, y) || this.checkTopDiagonal(x, y) || this.checkBottomDiagonal(x, y);
}

TicTacToe.prototype.checkRow = function(x, y) {
    for(let i=0; i<this.noOfRows; i++) {
        if(this.grid[x][i] !== this.currentPlayer) return false;
    }

    return true;
}

TicTacToe.prototype.checkColumn = function(x, y) {
    for(let i=0; i<this.noOfRows; i++) {
        if(this.grid[i][y] !== this.currentPlayer) return false;
    }

    return true;
}

TicTacToe.prototype.checkTopDiagonal = function(x, y) {
    for(let i=0; i<this.noOfRows; i++) {
        if(this.grid[i][i] !== this.currentPlayer) return false;
    }

    return true;
}

TicTacToe.prototype.checkBottomDiagonal = function(x, y) {
    for(let i=0; i<this.noOfRows; i++) {
        if(this.grid[i][this.noOfRows - 1 - i] !== this.currentPlayer) return false;
    }

    return true;
}