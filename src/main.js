function movePiece(piece) {
  const pieceId = piece.id
  const pieceType = piece.classList[0]
  const pieceSlotElement = piece.parentElement
  const pieceSlotId = pieceSlotElement.id
  const pieceSlot = Number(pieceSlotId.split('-')[1])

  console.log(`pieceId: ${pieceId}, pieceType: ${pieceType}`)

  if (pieceType === 'knight') {
    document.querySelector(`#tile-${pieceSlot - 15}-slot`).innerHTML += `<div id="${pieceId}-${pieceSlot - 15}-move" class="move"></div>`
    document.querySelector(`#tile-${pieceSlot - 17}-slot`).innerHTML += `<div id="${pieceId}-${pieceSlot - 17}-move" class="move"></div>`

    document.querySelector(`#${pieceId}-${pieceSlot - 15}-move`).addEventListener('click', () => {
      movePiece2(`${pieceId}-${pieceSlot}-${pieceSlot - 15}-move`, [`${pieceId}-${pieceSlot}-${pieceSlot - 17}-move`], pieceType, pieceId)
    })

    document.querySelector(`#${pieceId}-${pieceSlot - 17}-move`).addEventListener('click', () => {
      movePiece2(`${pieceId}-${pieceSlot}-${pieceSlot - 17}-move`, [`${pieceId}-${pieceSlot}-${pieceSlot - 15}-move`], pieceType, pieceId)
    })
  }

  if (pieceType === 'pawn') {
    document.querySelector(`#tile-${pieceSlot - 8}-slot`).innerHTML += `<div id="${pieceId}-${pieceSlot - 8}-move" class="move"></div>`
    document.querySelector(`#tile-${pieceSlot - 16}-slot`).innerHTML += `<div id="${pieceId}-${pieceSlot - 16}-move" class="move"></div>`

    document.querySelector(`#${pieceId}-${pieceSlot - 8}-move`).addEventListener('click', () => {
      movePiece2(`${pieceId}-${pieceSlot}-${pieceSlot - 8}-move`, [`${pieceId}-${pieceSlot}-${pieceSlot - 16}-move`], pieceType, pieceId)
    })

    document.querySelector(`#${pieceId}-${pieceSlot - 16}-move`).addEventListener('click', () => {
      movePiece2(`${pieceId}-${pieceSlot}-${pieceSlot - 16}-move`, [`${pieceId}-${pieceSlot}-${pieceSlot - 8}-move`], pieceType, pieceId)
    })
  }
}

function movePiece2(move, discardedMoves, pieceType, pieceId) {
  const piece = `${move.split('-')[0]}-${move.split('-')[1]}`
  const oldMove = Number(move.split('-')[2])
  const move2 = Number(move.split('-')[3])

  document.querySelector(`#tile-${oldMove}-slot`).innerHTML = ''

  discardedMoves.forEach(discardedMove => {
    const dmMove2 = Number(discardedMove.split('-')[3])

    document.querySelector(`#tile-${dmMove2}-slot`).innerHTML = ''
  })

  document.querySelector(`#tile-${move2}-slot`).innerHTML = `<div id="${piece}" class="${pieceType} ${pieceType}-${pieceId.split('-')[1]} piece piece-${pieceId.split('-')[1]}">${pieceType === 'pawn' ? '' : pieceType === 'rook' ? 'R' : pieceType === 'knight' ? 'N' : pieceType === 'bishop' ? 'B' : pieceType === 'queean' ? 'Q' : pieceType === 'king' && 'K'}</div>`
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#app').innerHTML += `<div id="chessboard"></div>`
  drawChessboard()
  placePieces()

  const pieces = document.querySelectorAll('.piece')

  pieces.forEach(piece => {
    piece.addEventListener('click', () => {
      movePiece(piece)
    })
  })
})

function drawChessboard() {
  let letters = 'abcdefgh'
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

function placePieces() {
  document.querySelector(`#tile-1-slot`).innerHTML += `<div id="QR-black" class="rook rook-black piece piece-black">R</div>`
  document.querySelector(`#tile-2-slot`).innerHTML += `<div id="QN-black" class="knight knight-black piece piece-black">N</div>`
  document.querySelector(`#tile-3-slot`).innerHTML += `<div id="QB-black" class="bishop bishop-black piece piece-black">B</div>`
  document.querySelector(`#tile-4-slot`).innerHTML += `<div id="Q-black" class="queen queen-black piece piece-black">Q</div>`
  document.querySelector(`#tile-5-slot`).innerHTML += `<div id="K-black" class="king king-black piece piece-black">K</div>`
  document.querySelector(`#tile-6-slot`).innerHTML += `<div id="QB-black" class="bishop bishop-black piece piece-black">B</div>`
  document.querySelector(`#tile-7-slot`).innerHTML += `<div id="QN-black" class="knight knight-black piece piece-black">N</div>`
  document.querySelector(`#tile-8-slot`).innerHTML += `<div id="QR-black" class="rook rook-black piece piece-black">R</div>`

  for (let i = 9; i <= 12; i++) {
    document.querySelector(`#tile-${i}-slot`).innerHTML += `<div id="QP${Math.abs(i - 13)}-black" class="pawn piece piece-black"></div>`
  }

  for (let i = 13; i <= 16; i++) {
    document.querySelector(`#tile-${i}-slot`).innerHTML += `<div id="QP${i - 12}-black" class="pawn piece piece-black"></div>`
  }

  for (let i = 49; i <= 52; i++) {
    document.querySelector(`#tile-${i}-slot`).innerHTML += `<div id="QP${Math.abs(i - 53)}-white" class="pawn piece piece-white"></div>`
  }

  for (let i = 53; i <= 56; i++) {
    document.querySelector(`#tile-${i}-slot`).innerHTML += `<div id="QP${i - 52}-white" class="pawn piece piece-white"></div>`
  }

  document.querySelector(`#tile-57-slot`).innerHTML += `<div id="QR-white" class="rook rook-white piece piece-white">R</div>`
  document.querySelector(`#tile-58-slot`).innerHTML += `<div id="QN-white" class="knight knight-white piece piece-white">N</div>`
  document.querySelector(`#tile-59-slot`).innerHTML += `<div id="QB-white" class="bishop bishop-white piece piece-white">B</div>`
  document.querySelector(`#tile-60-slot`).innerHTML += `<div id="Q-white" class="queen queen-white piece piece-white">Q</div>`
  document.querySelector(`#tile-61-slot`).innerHTML += `<div id="K-white" class="king king-white piece piece-white">K</div>`
  document.querySelector(`#tile-62-slot`).innerHTML += `<div id="QB-white" class="bishop bishop-white piece piece-white">B</div>`
  document.querySelector(`#tile-63-slot`).innerHTML += `<div id="QN-white" class="knight knight-white piece piece-white">N</div>`
  document.querySelector(`#tile-64-slot`).innerHTML += `<div id="QR-white" class="rook rook-white piece piece-white">R</div>`
}

export { drawChessboard }