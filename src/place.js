const LETTERS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

// Function to place pieces on the chessboard
function placePieces() {
  // Black pieces
  document.querySelector(`#tile-a8`).innerHTML = `<div id="rook-black-1" class="rook rook-black piece piece-black">R</div>`
  document.querySelector(`#tile-b8`).innerHTML = `<div id="knight-black-1" class="knight knight-black piece piece-black">N</div>`
  document.querySelector(`#tile-c8`).innerHTML = `<div id="bishop-black-1" class="bishop bishop-black piece piece-black">B</div>`
  document.querySelector(`#tile-d8`).innerHTML = `<div id="queen-black" class="queen queen-black piece piece-black">Q</div>`
  document.querySelector(`#tile-e8`).innerHTML = `<div id="king-black" class="king king-black piece piece-black">K</div>`
  document.querySelector(`#tile-f8`).innerHTML = `<div id="bishop-black-2" class="bishop bishop-black piece piece-black">B</div>`
  document.querySelector(`#tile-g8`).innerHTML = `<div id="knight-black-2" class="knight knight-black piece piece-black">N</div>`
  document.querySelector(`#tile-h8`).innerHTML = `<div id="rook-black-2" class="rook rook-black piece piece-black">R</div>`

  // Black pawns
  for (let i = 0; i < 8; i++) {
    document.querySelector(`#tile-${LETTERS[i]}7`).innerHTML = `<div id="pawn-${i + 12}-black" class="pawn pawn-black piece piece-black"></div>`
  }

  // White pawns
  for (let i = 0; i < 8; i++) {
    document.querySelector(`#tile-${LETTERS[i]}2`).innerHTML = `<div id="pawn-white-${i + 1}" class="pawn pawn-white piece piece-white"></div>`
  }

  // White pieces
  document.querySelector(`#tile-a1`).innerHTML = `<div id="rook-white-1" class="rook rook-white piece piece-white">R</div>`
  document.querySelector(`#tile-b1`).innerHTML = `<div id="knight-white-1" class="knight knight-white piece piece-white">N</div>`
  document.querySelector(`#tile-c1`).innerHTML = `<div id="bishop-white-1" class="bishop bishop-white piece piece-white">B</div>`
  document.querySelector(`#tile-d1`).innerHTML = `<div id="queen-white" class="queen queen-white piece piece-white">Q</div>`
  document.querySelector(`#tile-e1`).innerHTML = `<div id="king-white" class="king king-white piece piece-white">K</div>`
  document.querySelector(`#tile-f1`).innerHTML = `<div id="bishop-white-2" class="bishop bishop-white piece piece-white">B</div>`
  document.querySelector(`#tile-g1`).innerHTML = `<div id="knight-white-2" class="knight knight-white piece piece-white">N</div>`
  document.querySelector(`#tile-h1`).innerHTML = `<div id="rook-white-2" class="rook rook-white piece piece-white">R</div>`
}

export { placePieces }