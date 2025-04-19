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

export { movePiece, movePiece2 }