import Piece from "./piece"

class Bishop extends Piece {
  isValid(newPosition) {
    switch (newPosition.row) {
      case this.position.row + 8 && this.color === 'black':
        return true
      case this.position.row + 16 && this.color === 'black' && this.position.row === 2:
        return true
      case this.position.row - 8 && this.color === 'white':
        return true
      case this.position.row - 16 && this.color === 'white' && this.position.row === 7:
        return true
      default:
        return false
    }
  }
}

export default Bishop