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

window.addEventListener('keydown', function (event) {
  $f1.className = 'f1';
  for (var dirs of direction) {
    if (dirs.key === event.key) $f1.classList.add(dirs.dir);
  }
});
