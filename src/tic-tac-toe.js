class TicTacToe {
  constructor() {
    this.currentSymbol = 'x';
    this.nextSymbol = 'o';
    this.desc = Array(3).fill(null).map(() => Array(3).fill(null));
    this.finished = false;
    this.winner = null;
  }
  
  getCurrentPlayerSymbol() {
    return this.currentSymbol;
  }

  nextTurn(row, col) {
    if (!this.desc[row][col]) {
      this.desc[row][col] = this.currentSymbol;
      [this.currentSymbol, this.nextSymbol] = [this.nextSymbol, this.currentSymbol];
    }
  }

  isFinished() {
    return !!this.getWinner() || this.noMoreTurns();
  }

  getWinner() {
  if ((this.desc[0][0] === this.desc[1][1] && this.desc[1][1] === this.desc[2][2]) || 
    (this.desc[0][2] === this.desc[1][1] && this.desc[1][1] === this.desc[2][0])) this.winner = this.desc[1][1];
  else {
    for (let i = 0; i < 3; i++) {
      if (this.desc[i][0] !== null && this.desc[i][0] === this.desc[i][1] && this.desc[i][1] === this.desc[i][2]) {
        this.winner = this.desc[i][0];
        break;
      } else if (this.desc[0][i] !== null && this.desc[0][i] === this.desc[1][i] && this.desc[2][i] === this.desc[0][i]) {
        this.winner = this.desc[0][i];
        break;
      }
    }
  }

    return this.winner;
  }

  noMoreTurns() {
    return this.desc.every(row => row.every(col => col));
  }

  isDraw() {
    return !(!this.isFinished() || !!this.getWinner());
  }

  getFieldValue(row, col) {
    return this.desc[row][col];
  }
}

module.exports = TicTacToe;
