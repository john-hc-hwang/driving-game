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
// var right = 0;
// var top = 0;
// var bottom = 0;

var spaceIndex = 0;

function go() {
  left += 16;
  var leftPx = left + 'px';
  $f1.style.left = leftPx;
}

var intervalId = setInterval(go, 16); // make intervalId global scope
clearInterval(intervalId); // clearInterval asap to prevent it from moving when page is refreshed

window.addEventListener('keydown', function (event) {
  if (event.key === ' ') {
    spaceIndex++;
    if (spaceIndex % 2 === 1) intervalId = setInterval(go, 16);
    if (spaceIndex % 2 === 0) clearInterval(intervalId);
  }

  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight' || event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    $f1.className = 'f1';
    for (var dirs of direction) {
      if (dirs.key === event.key) $f1.classList.add(dirs.dir);
    }
  }
});
