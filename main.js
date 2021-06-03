var $ = document.querySelector.bind(document);
var $f1 = $('.f1');

var direction = [
  {
    dir: 'west',
    key: 'ArrowLeft'
  },
  {
    dir: 'south',
    key: 'ArrowDown'
  },
  {
    dir: 'north',
    key: 'ArrowUp'
  },
  {
    dir: 'east',
    key: 'ArrowRight'
  }
];

var left = 0;
var topp = 0;
var leftPx;
var topPx;
var spaceIndex = 0;

function go() {
  if ($f1.className === 'f1 west') {
    left -= 16;
    leftPx = left + 'px';
    $f1.style.left = leftPx;
  }

  if ($f1.className === 'f1 east') {
    left += 16;
    leftPx = left + 'px';
    $f1.style.left = leftPx;
  }

  if ($f1.className === 'f1 north') {
    topp -= 16;
    topPx = topp + 'px';
    $f1.style.top = topPx;
  }

  if ($f1.className === 'f1 south') {
    topp += 16;
    topPx = topp + 'px';
    $f1.style.top = topPx;
  }
}

var intervalId = setInterval(go, 16); // make intervalId global scope
clearInterval(intervalId); // clearInterval asap to prevent it from moving when page is refreshed

window.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight' || event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    $f1.className = 'f1';
    for (var dirs of direction) {
      if (dirs.key === event.key) $f1.classList.add(dirs.dir);
    }
  }

  if (event.key === ' ') {
    spaceIndex++;
    if (spaceIndex % 2 === 1) {
      intervalId = setInterval(go, 16);
    }

    if (spaceIndex % 2 === 0) {
      clearInterval(intervalId);
    }
  }
});
