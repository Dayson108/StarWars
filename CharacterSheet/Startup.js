function init() {
  // When API is ready...                                                         
  gapi.hangout.onApiReady.add(
	function(eventObj) {
		if (eventObj.isApiReady) {
			console.log("The API is ready");
			var myParticipant = gapi.hangout.getLocalParticipant();
			LocalPlayerList.playerID = myParticipant.person.id;
			document.getElementById('MainScreenButton').style.visibility = 'visible';
         		document.getElementById('CharacterScreenButton').style.visibility = 'visible';
         		document.getElementById('DiceScreenButton').style.visibility = 'visible';
         		document.getElementById('PreferencesButton').style.visibility = 'visible';
         		var tempGMID = gapi.hangout.data.getValue('GMID')
         		if( tempGMID == null || tempGMID == LocalPlayerList.playerID){
         			document.getElementById('GMScreenButton').style.visibility = 'visible';
         		}
         		else{
         			document.getElementById('GMScreenButton').style.visibility = 'hidden';
         		}
         		showCharacter();
		}
	});
}

// Wait for gadget to load.                                                       
gadgets.util.registerOnLoadHandler(init);
gadgets.util.registerOnLoadHandler(peopleChange);
gadgets.util.registerOnLoadHandler(addPeople);
