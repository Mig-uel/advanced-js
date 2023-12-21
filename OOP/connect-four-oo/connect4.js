'use strict'

class Game {
  constructor(width, height) {
    this.width = width
    this.height = height
    this.board = []
    this.currPlayer = 1
  }

  makeBoard() {
    for (let y = 0; y < this.height; y++) {
      const emptyRow = Array.from({ length: this.width }).fill(null)
      this.board.push(emptyRow)
    }
  }

  makeHtmlBoard() {
    const htmlBoard = document.getElementById('board')

    const top = document.createElement('tr')
    top.setAttribute('id', 'column-top')

    for (let x = 0; x < this.width; x++) {
      const headCell = document.createElement('td')
      headCell.setAttribute('id', `top-${x}`)
      headCell.addEventListener('click', this.handleClick)
      top.append(headCell)
    }
    htmlBoard.append(top)

    // dynamically creates the main part of html board
    // uses HEIGHT to create table rows
    // uses WIDTH to create table cells for each row
    for (let y = 0; y < this.height; y++) {
      const row = document.createElement('tr')

      for (let x = 0; x < this.width; x++) {
        const cell = document.createElement('td')
        cell.setAttribute('id', `c-${y}-${x}`)
        row.append(cell)
      }

      htmlBoard.append(row)
    }
  }

  placeInTable(y, x) {
    const piece = document.createElement('div')
    piece.classList.add('piece')
    piece.classList.add(`p${this.currPlayer}`)

    const spot = document.getElementById(`c-${y}-${x}`)
    spot.append(piece)
  }

  endGame(msg) {
    alert(msg)
  }

  checkForWin() {
    function _win(cells) {
      // Check four cells to see if they're all color of current player
      //  - cells: list of four (y, x) cells
      //  - returns true if all are legal coordinates & all match currPlayer

      return cells.every(
        ([y, x]) =>
          y >= 0 &&
          y < this.height &&
          x >= 0 &&
          x < this.width &&
          this.board[y][x] === this.currPlayer
      )
    }

    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        // get "check list" of 4 cells (starting here) for each of the different
        // ways to win
        const horiz = [
          [y, x],
          [y, x + 1],
          [y, x + 2],
          [y, x + 3],
        ]
        const vert = [
          [y, x],
          [y + 1, x],
          [y + 2, x],
          [y + 3, x],
        ]
        const diagDR = [
          [y, x],
          [y + 1, x + 1],
          [y + 2, x + 2],
          [y + 3, x + 3],
        ]
        const diagDL = [
          [y, x],
          [y + 1, x - 1],
          [y + 2, x - 2],
          [y + 3, x - 3],
        ]

        // find winner (only checking each win-possibility as needed)
        if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
          return true
        }
      }
    }
    return false
  }

  findSpotForCol(x) {
    for (let y = this.height - 1; y >= 0; y--) {
      if (this.board[y][x] === null) {
        return y
      }
    }
    return null
  }

  handleClick(evt) {
    // get x from ID of clicked cell
    const x = Number(evt.target.id.slice('top-'.length))

    // get next spot in column (if none, ignore click)
    const y = this.findSpotForCol(x)
    if (y === null) {
      return
    }

    // place piece in board and add to HTML table
    this.board[y][x] = this.currPlayer
    this.placeInTable(y, x)

    // check for win
    if (this.checkForWin()) {
      return this.endGame(`Player ${this.currPlayer} won!`)
    }

    // check for tie: if top row is filled, board is filled
    if (this.board[0].every((cell) => cell !== null)) {
      return this.endGame('Tie!')
    }

    // switch players
    this.currPlayer = this.currPlayer === 1 ? 2 : 1
  }

  start() {
    this.makeBoard()
    this.makeHtmlBoard()
  }
}
new Game(6, 7).start()
