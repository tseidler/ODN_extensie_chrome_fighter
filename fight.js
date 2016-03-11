chrome.runtime.onMessage.addListener(processMessage);
addDiv();

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
  var ken = document.getElementById('ODN_FIGHTER');
  var xPos = Math.max(event.pageX - 500, 10);
  var yPos = Math.max(event.pageY - 50, 0);

  ken.style.top =  yPos + 'px';
  ken.style.left = xPos + 'px';
  ken.style.display = 'block';
  ken.setAttribute('class', 'attack');

  setTimeout(function hideKen () {
    ken.style.display = 'none';
    ken.setAttribute('class', '');
  }, 2000);
  setTimeout(function () {
    spawnFireball(xPos + 40, yPos, ken, fightTarget);
  }, 250);
}

function spawnFireball(x, y, attachTo, target) {
  var ball = document.createElement('div');
  ball.setAttribute('class', 'fireball');
  ball.style.backgroundImage = 'url(' + chrome.extension.getURL('images/sprites.png') + ')';
  ball.style.left = x + 'px';
  ball.style.top = y + 'px';
  document.body.appendChild(ball);
}

function addDiv() {
  var fightDiv = document.createElement('div');
  fightDiv.setAttribute('id', 'ODN_FIGHTER');
  fightDiv.style.backgroundImage = 'url(' + chrome.extension.getURL('images/sprites.png') + ')';
  document.body.appendChild(fightDiv);
}
