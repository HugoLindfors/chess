import { Rook, Knight, Bishop, Queen, King, Pawn } from './pieces/pieces'

const app: HTMLDivElement = document.querySelector('#app')!

let pieces = []
const letters = 'abcdefgh'
let color = ''
let columnIndex = 0
let column = ''
let row = 0

function draw() {

}

function start() {
  app

  color = 'black'
  row = 0
  columnIndex = 0

  const pawn = new Pawn('queen-pawn-4', 'white', 'a2', 'a2')
}

function main() {
  start()
}

document.addEventListener('DOMContentLoaded', () => main())