chrome.runtime.onMessage.addListener(processMessage);

function processMessage(request, sender, sendResponse) {
  if(request.fighting === true) {
    document.addEventListener('click', catchClck);
  } else {
    document.removeEventListener('click', catchClck);
  }
}

function catchClck(event) {
  event.preventDefault();
  event.stopPropagation();


  var fightTarget = event.target.closest('div');
  fightTarget.remove();
}
