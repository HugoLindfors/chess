`
      <div id="tile-${i}" class="tile ${digit % 2 === 0 ? (i % 2 === 0 ? 'tile-white' : 'tile-black') : (i % 2 === 0 ? 'tile-black' : 'tile-white')}">
        <div id="tile-${i}-slot" class="slot text-prime"></div>
        <div>${letters[letter]}${digit}</div>
        <div>(${i})</div>
      </div>
    `