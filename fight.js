chrome.runtime.onMessage.addListener(processMessage);
function processMessage(request, sender, sendResponse) {
  if(request.fighting === true) {
    document.body.addEventListener('click', catchClck);
  } else {
    document.body.removeEventListener('click', catchClck);
  }
}

function catchClck(event) {
  event.preventDefault();
  event.stopPropagation();

  var fightTarget = event.target.closest('div');
  var xPos = Math.max(event.pageX - 500, 10);
  var yPos = Math.max(event.pageY - 50, 0);

  var ken = document.createElement('div');
  ken.setAttribute('class', 'sprite attack');
  ken.style.backgroundImage = 'url(' + chrome.extension.getURL('images/sprites.png') + ')';
  ken.style.top =  yPos + 'px';
  ken.style.left = xPos + 'px';
  document.body.appendChild(ken);

  setTimeout(function () {
    spawnFireball(xPos + 40, yPos, ken, fightTarget);
  }, 250);
}

function spawnFireball(x, y, source, target) {
  var ball = document.createElement('div');
  var ballX = x;
  var targetBox = target.getBoundingClientRect();

  var targetLeft = targetBox.left;

  ball.setAttribute('class', 'sprite fireball');
  ball.style.backgroundImage = 'url(' + chrome.extension.getURL('images/sprites.png') + ')';
  ball.style.left = ballX + 'px';
  ball.style.top = y + 'px';
  document.body.appendChild(ball);

  var interval = setInterval(function moveBall() {
    ballX+=5;
    ball.style.left = ballX + 'px';

    if(ballX > targetLeft || ballX > screen.width) {
      target.remove();
      ball.remove();
      source.remove();
      clearInterval(interval);
    }
  }, 25);
}
