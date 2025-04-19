abstract class Piece {
  public id: string
  public color: string
  public position: string

  constructor(id: string, color: string, position: string) {
    this.id = id
    this.color = color
    this.position = position
  }

  /**
   * Checks wheter or not a requested position is valid or not.
   * @param newPosition - Requested new position. Should always be expressed in algebraic chess notation.
   */
  isValid(newPosition: string): boolean {
    if (!this.isValidSyntax(newPosition)) {
      return false
    } else {
      return this.isValidMoveTo(newPosition)
    }
  }

  /**
   * Checks wheter or not a requested position is valid or not from the perspective of the rules of chess.
   * @param newPosition - Requested new position. Should always be expressed in algebraic chess notation.
   */
  abstract isValidMoveTo(newPosition: string): boolean

  /**
   * Checks wheter or not a requested position is valid or not simply from a syntactical perspective.
   * @param newPosition - Requested new position. Should always be expressed in algebraic chess notation.
   */
  isValidSyntax(newPosition: string): boolean | void {
    if (typeof newPosition !== 'string') {
      return false
    } else if (newPosition.length !== 2) {
      return false
    }
  }

  /**
   * Moves chess pieces to a desired new position if valid.
   * @param newPosition - Requested new position. Should always be expressed in algebraic chess notation.
   */
  moveTo(newPosition: string): void {
    if (this.isValid(newPosition)) {
      this.position = newPosition
    } else {
      alert('Invalid move - please try again')
    }
  }
}

export default Piece