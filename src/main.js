document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#app').innerHTML += `<div id="chessboard"></div>`
  renderChessboard()
  renderWhiteQRPawn()
})

function renderChessboard() {
  let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
  let letter = 0

  for (let i = 1; i <= 64; i++) {
    let digit = Math.ceil(i / 8)

    document.querySelector('#chessboard').innerHTML += `
      <div id="tile-${i}" class="tile ${digit % 2 === 0 ? (i % 2 === 0 ? 'tile-white' : 'tile-black') : (i % 2 === 0 ? 'tile-black' : 'tile-white')}">
        <div id="tile-${i}-slot" class="slot text-prime"></div>
        <div>${letters[letter]}${digit}</div>
        <div>(${i})</div>
      </div>
    `
    if (letter < 7) {
      letter++
    } else {
      letter = 0
    }
  }
}

function renderWhiteQRPawn() {
  document.querySelector(`#tile-1-slot`).innerHTML += `<div class="piece piece-black">R</div>`
  document.querySelector(`#tile-2-slot`).innerHTML += `<div class="piece piece-black">N</div>`
  document.querySelector(`#tile-3-slot`).innerHTML += `<div class="piece piece-black">B</div>`
  document.querySelector(`#tile-4-slot`).innerHTML += `<div class="piece piece-black">Q</div>`
  document.querySelector(`#tile-5-slot`).innerHTML += `<div class="piece piece-black">K</div>`
  document.querySelector(`#tile-6-slot`).innerHTML += `<div class="piece piece-black">B</div>`
  document.querySelector(`#tile-7-slot`).innerHTML += `<div class="piece piece-black">N</div>`
  document.querySelector(`#tile-8-slot`).innerHTML += `<div class="piece piece-black">R</div>`

  for(let i = 9; i <= 16; i++) {
    document.querySelector(`#tile-${i}-slot`).innerHTML += `<div class="pawn piece-black"></div>`
  }

  for(let i = 49; i <= 56; i++) {
    document.querySelector(`#tile-${i}-slot`).innerHTML += `<div class="pawn piece-white"></div>`
  }

  document.querySelector(`#tile-57-slot`).innerHTML += `<div class="piece piece-white">R</div>`
  document.querySelector(`#tile-58-slot`).innerHTML += `<div class="piece piece-white">N</div>`
  document.querySelector(`#tile-59-slot`).innerHTML += `<div class="piece piece-white">B</div>`
  document.querySelector(`#tile-60-slot`).innerHTML += `<div class="piece piece-white">Q</div>`
  document.querySelector(`#tile-61-slot`).innerHTML += `<div class="piece piece-white">K</div>`
  document.querySelector(`#tile-62-slot`).innerHTML += `<div class="piece piece-white">B</div>`
  document.querySelector(`#tile-63-slot`).innerHTML += `<div class="piece piece-white">N</div>`
  document.querySelector(`#tile-64-slot`).innerHTML += `<div class="piece piece-white">R</div>`
}