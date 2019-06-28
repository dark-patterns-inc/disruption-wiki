// const canvas = document.get

(function blink() {
  $('.disrupt').fadeOut(500).fadeIn(500, blink);
})();

setInterval(() => {
  const container = document.getElementById('madness');
  const newCanvas = document.createElement('section');
  const newButton = document.createElement('button');
  newCanvas.classList.add('canvas');
  newButton.textContent = 'CLICK ME';
  newCanvas.appendChild(newButton);
  newButton.classList.add('disrupt');

  container.appendChild(newCanvas); 
}, 1000);


$('.canvas').on('mouseenter', function(e) {
  var maxX = $(window).width() - $(this).width();
  var maxY = $(window).height() - $(this).height();
  $(this).css({
    'left': getRandomInt(0, maxX),
    'top': getRandomInt(0, maxY)
  });
});

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
