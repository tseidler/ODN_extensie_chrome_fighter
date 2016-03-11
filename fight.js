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
  fightTarget.remove();
}

function addDiv() {
  var fightDiv = document.createElement('div');
  fightDiv.setAttribute('id', 'ODN_FIGHTER');
  fightDiv.style.backgroundImage = 'url(' + chrome.extension.getURL('images/sprites.png') + ')';
  document.body.appendChild(fightDiv);
}
