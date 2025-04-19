const LETTERS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

function drawChessboard() {
  for (let row = 7; row >= 0; row--) {
    let rowDigit = row + 1

    for (let column = 0; column < 8; column++) {
      let columnLetter = LETTERS[column]
      document.querySelector('#chessboard').innerHTML += `<div id="tile-${columnLetter}${rowDigit}" class="tile tile-${column % 2 === row % 2 ? 'white' : 'black'}"></div>`
    }
  }
}

export { drawChessboard }