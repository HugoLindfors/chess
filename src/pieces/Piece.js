class Piece {
  color // e.g. 'black'
  position = { column, row } // e.g. { column 'b', row: 2 }
  index // e.g. 10
  type // e.g. 'knight'
}

const piece = Piece()

piece.position.column
