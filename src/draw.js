function draw(params) {
  const pieces = params.pieces

  drawChessboard()

  pieces.forEach(p => {
    drawPiece(p.id, p.position)
  })
}