const LETTERS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

function placePiece(coordinate = '', pieceId = '', symbol = '') {
  const tile = document.querySelector(`#tile-${coordinate}`)
  if (tile) {
    tile.innerHTML = `<div id="${pieceId}" class="${pieceId.split('-')[0]} ${pieceId.split('-')[0]}-${pieceId.split('-')[1]} piece piece-${pieceId.split('-')[1]}">${symbol && symbol}</div>`
  }
}

// Function to place pieces on the chessboard
function placePieces() {
  // Black pieces
  placePiece('a8', 'rook-black-1', 'R')
  placePiece('b8', 'knight-black-1', 'N')
  placePiece('c8', 'bishop-black-1', 'B')
  placePiece('d8', 'queen-black', 'Q')
  placePiece('e8', 'king-black', 'K')
  placePiece('f8', 'knight-black-2', 'B')
  placePiece('g8', 'bishop-black-2', 'N')
  placePiece('h8', 'rook-black-2', 'R')

  // Black pawns
  for (let i = 0; i < 8; i++) {
    placePiece(`${LETTERS[i]}7`, `pawn-black-${i + 1}`)
  }

  // White pawns
  for (let i = 0; i < 8; i++) {
    placePiece(`${LETTERS[i]}2`, `pawn-black-${i + 1}`)
  }

  // White pieces
  placePiece('a1', 'rook-white-1', 'R')
  placePiece('b1', 'knight-white-1', 'N')
  placePiece('c1', 'bishop-white-1', 'B')
  placePiece('d1', 'queen-white', 'Q')
  placePiece('e1', 'king-white', 'K')
  placePiece('f1', 'knight-white-2', 'B')
  placePiece('g1', 'bishop-white-2', 'N')
  placePiece('h1', 'rook-white-2', 'R')
}

export { placePieces }