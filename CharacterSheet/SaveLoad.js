function saveCharacter(){
	console.log("Character Saved v2");
	var tempCharacter, i, length;
	
	var PlayerListArrayLocal = gapi.hangout.data.getValue('PlayerListArray');
	PlayerListArrayLocal = JSON.parse(PlayerListArrayLocal);
	length = PlayerListArrayLocal.length;
	for(i = 0; i < length; i++){
		if(PlayerListArrayLocal[i].playerID == LocalPlayerList.playerID){
			console.log("Player Found!");
			tempCharacter = JSON.stringify(PlayerListArrayLocal[i]);
			document.getElementById('saveCharacterOutput').value = tempCharacter;
		}
	}
}

function loadCharacter(){
	console.log("Character Loaded");
	var tempCharacter = document.getElementById("loadCharacterInput").value;
	tempCharacter = JSON.parse(tempCharacter);
	
	var PlayerListArrayLocal = gapi.hangout.data.getValue('PlayerListArray');
	if(PlayerListArrayLocal == undefined)
	{
		PlayerListArrayLocal = [];
	}
	else{
		PlayerListArrayLocal = JSON.parse(PlayerListArrayLocal);
	}
	var i, length;
	var skip = true;
	for(i = 0; i < length; i++){
		if(PlayerListArrayLocal[i].playerID == LocalPlayerList.playerID){
			PlayerListArrayLocal[i] = tempCharacter;
			skip = false;
		}
	}
	if(skip){
		PlayerListArrayLocal.push(tempCharacter);		
	}
	gapi.hangout.data.submitDelta({PlayerListArray: JSON.stringify(PlayerListArrayLocal)});
	document.getElementById('CharacterScreenButton').style.visibility = 'hidden';
	document.getElementById('SkillsScreenButton').style.visibility = 'visible';
	document.getElementById('Character').style.visibility = 'hidden';
	document.getElementById('Main').style.visibility = 'visible';
}
