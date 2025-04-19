import Piece from "./piece"

enum Coordinate { COLUMN, ROW }

class Pawn extends Piece {
  hometile: string

  constructor(id: string, color: string, position: string, hometile: string) {
    super(id, color, position)
    this.hometile = hometile
  }

  isValidMoveTo(newPosition: string) {
    switch (newPosition[Coordinate.ROW]) {
      case `${Number(this.position[Coordinate.ROW]) - 1}` // modify the row value by - 1
        && this.color === 'black': // (white pawns can only move in the positive direction)
        return true

      case `${Number(this.position[Coordinate.ROW]) - 2}` // modify the row value by - 1
        && this.color === 'black' // (white pawns can only move in the positive direction)
        && this.position === this.hometile: // if the first move, pawns can move two rows instead of one, this will only be the case if the pawn is on it's hometile
        return true

      case `${Number(this.position[Coordinate.ROW]) + 1}` // modify the row value by + 1
        && this.color === 'white': // (black pawns can only move in the negative direction)
        return true

      case `${Number(this.position[Coordinate.ROW]) + 2}` // modify the row value by + 2
        && this.color === 'white' // (black pawns can only move in the negative direction)
        && this.position === this.hometile: // if the first move, pawns can move two rows instead of one, this will only be the case if the pawn is on it's hometile
        return true

      default:
        return false
    }
  }
}

export default Pawn