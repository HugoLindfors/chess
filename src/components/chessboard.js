const chessboard = `
<div id="chessboard">
  ${() => {
    for (let i = 1; i <= 64; i++) {
      return `<div id="tile-${Math.ceil(i / 8)}" class="tile"></div>`
      
      if (letter < 7) {
        letter++
      } else {
        letter = 0
      }
    }
  }}
</div >
  `