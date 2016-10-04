function assignGM(){
	document.getElementById('gmButton').style.visibility = 'hidden';
	document.getElementById('GMText').innerHTML = "You are the gm!";
	
	gapi.hangout.data.submitDelta({GMID: LocalPlayerList.playerID});
}

