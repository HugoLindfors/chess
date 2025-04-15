const COLUMN = 0
const ROW = 1

class Piece {
  id // e.g. 'black-queen-rook', 'black-queen-pawn-4'
  color
  position

  constructor(color, position) { // position: ['a', '1'] => position.column: 'a', position.row: 1
    this.color = color
    this.position.column = position[0]
    this.position.row = Number(position[1])
  }

  moveTo(newPosition) {
    if (this.isValid(newPosition)) {
      this.position.column = newPosition[COLUMN]
      this.position.row = newPosition[ROW]
    } else {
      alert('Invalid move - please try again')
    }
  }
}

export default Piece