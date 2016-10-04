function hideAllScreens(){
  document.getElementById('Main').style.visibility = 'hidden';
  document.getElementById('Dice').style.visibility = 'hidden';
  document.getElementById('Character').style.visibility = 'hidden';
  document.getElementById('Skills').style.visibility = 'hidden';
  document.getElementById('GMScreen').style.visibility = 'hidden';
  document.getElementById('Preferences').style.visibility = 'hidden';
  }
function showGM(){
  hideAllScreens();
  document.getElementById('GMScreen').style.visibility = 'visible';
}
function showPreferences(){
  hideAllScreens();
  document.getElementById('Preferences').style.visibility = 'visible';
}
function showMain(){
  hideAllScreens();
  document.getElementById('Main').style.visibility = 'visible';
}
function showCharacter(){
  hideAllScreens();
  document.getElementById('Character').style.visibility = 'visible';

}
function showDice(){
  hideAllScreens();
  document.getElementById('Dice').style.visibility = 'visible';
}

function showSkills(){
  hideAllScreens();
  document.getElementById('Skills').style.visibility = 'visible';
}
