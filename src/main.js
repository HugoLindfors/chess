document.addEventListener('DOMContentLoaded', () => {
  let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
  let letter = 0

  for (let i = 1; i <= 64; i++) {
    let digit = Math.ceil(i / 8)

    document.querySelector('#app').innerHTML += `
      <div class="tile ${digit % 2 === 0 ? (i % 2 === 0 ? 'tile-white' : 'tile-black') : (i % 2 === 0 ? 'tile-black' : 'tile-white')}">
        <div class="text-prime"><strong>${letters[letter]}${digit}</strong></div>
        <div>(${i})</div>
      </div>
    `
    if (letter < 7) {
      letter++
    } else {
      letter = 0
    }
  }
})