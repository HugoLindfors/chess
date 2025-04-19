import { placePieces } from './place'
import { movePiece } from './move'
import { drawChessboard } from './draw'

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#app').innerHTML += `
    <div id="chessboard"></div>
    <footer>Hugo Lindfors - Vanilla JS Chess - 0.11.0</footer>
  `
  drawChessboard()
  placePieces()

  const pieces = document.querySelectorAll('.piece')

  pieces.forEach(piece => {
    piece.addEventListener('click', () => {
      movePiece(piece)
    })
  })
})