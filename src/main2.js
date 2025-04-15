import { Rook, Knight, Bishop, Queen, King, Pawn } from './pieces/pieces'

const app = document.querySelector('#app')

let pieces = []
const letters = 'abcdefgh'
let color
let column
let row

function draw() {

}

function start() {
  app.appendChild(chessboard)

  color = 'black'
  row = 0
  columnIndex = 0

  column = letters[columnIndex]
  pieces.push(new Rook(color, `${column}${row}`))
  columnIndex++

  column = letters[columnIndex]
  pieces.push(new Knight(color, `${column}${row}`))
  columnIndex++

  column = letters[columnIndex]
  pieces.push(new Bishop(color, `${column}${row}`))
  columnIndex++

  column = letters[columnIndex]
  pieces.push(new Queen(color, `${column}${row}`))
  columnIndex++

  column = letters[columnIndex]
  pieces.push(new King(color, `${column}${row}`))
  columnIndex++

  column = letters[columnIndex]
  pieces.push(new Bishop(color, `${column}${row}`))
  columnIndex++

  column = letters[columnIndex]
  pieces.push(new Knight(color, `${column}${row}`))
  columnIndex++

  column = letters[columnIndex]
  pieces.push(new Rook(color, `${column}${row}`))

  row = 6

  for (let i = 0; i < 8; i++) {
    column = columns[i]
    pieces.push(new Pawn(color, `${column}${row}`))
  }

  color = 'white'
  row = 1

  for (let i = 0; i < 8; i++) {
    column = columns[i]
    pieces.push(new Pawn(color, `${column}${row}`))
  }

  row = 7
  column = 0

  pieces.push(new Rook(color, `${column}${row}`))
  column++

  pieces.push(new Knight(color, `${column}${row}`))
  column++

  pieces.push(new Bishop(color, `${column}${row}`))
  column++

  pieces.push(new Queen(color, `${column}${row}`))
  column++

  pieces.push(new King(color, `${column}${row}`))
  column++

  pieces.push(new Bishop(color, `${column}${row}`))
  column++

  pieces.push(new Knight(color, `${column}${row}`))
  column++
  
  pieces.push(new Rook(color, `${column}${row}`))
}

function update() {

}

function main() {
  start()
  draw()
}

document.addEventListener('DOMContentLoaded', () => main())