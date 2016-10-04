function calcDice(){
        document.getElementById('CharacterScreenButton').style.visibility = 'hidden';
	document.getElementById('SkillsScreenButton').style.visibility = 'visible';
	document.getElementById('Character').style.visibility = 'hidden';
	document.getElementById('Main').style.visibility = 'visible';

	Character.soak = document.getElementById("Soak").value;
	Character.woundThreshold = document.getElementById("WoundThreshold").value;
	Character.woundCurrent = document.getElementById("WoundCurrent").value;
	Character.strainThreshold = document.getElementById("StrainThreshold").value;
	Character.strainCurrent = document.getElementById("StrainCurrent").value;
	Character.rangedDefense = document.getElementById("RangedDefense").value;
	Character.meleeDefense = document.getElementById("MeleeDefense").value;

	Character.brawn = document.getElementById("Brawn").value;
    	Character.agility = document.getElementById("Agility").value;
    	Character.intellect = document.getElementById("Intellect").value;
	Character.cunning = document.getElementById("Cunning").value;
	Character.willpower = document.getElementById("Willpower").value;
    	Character.presence = document.getElementById("Presence").value;
	
	//Brawn
	Character.athleticsSkill = document.getElementById("Athletics").value;
	Character.resilienceSkill = document.getElementById("Resilience").value;
	Character.brawlSkill = document.getElementById("Brawl").value;
	Character.meleeSkill = document.getElementById("Melee").value;

	//Agility
	Character.cordinationSkill = document.getElementById("Cordination").value;
	Character.pilotingPSkill = document.getElementById("PilotingP").value;
	Character.pilotingSSkill = document.getElementById("PilotingS").value;
	Character.stealthSkill = document.getElementById("Stealth").value;
	Character.gunnerySkill = document.getElementById("Gunnery").value;
	Character.rangedLSkill = document.getElementById("RangedL").value;
	Character.rangedHSkill = document.getElementById("RangedH").value;

	//Intellect
	Character.astrogationSkill = document.getElementById("Astrogation").value;
    	Character.computersSkill = document.getElementById("Computers").value;
	Character.mechanicsSkill = document.getElementById("Mechanics").value;
    	Character.medicineSkill = document.getElementById("Medicine").value;
    	Character.coreWorldsSkill = document.getElementById("CoreWorlds").value;
    	Character.educationSkill = document.getElementById("Education").value;
	Character.loreSkill = document.getElementById("Lore").value;
    	Character.outerRimSkill = document.getElementById("OuterRim").value;
    	Character.underWorldSkill = document.getElementById("Underworld").value;
    	Character.xenologySkill = document.getElementById("Xenology").value;
    	
	//Cunning
	Character.deceptionSkill = document.getElementById("Deception").value;
	Character.perceptionSkill = document.getElementById("Perception").value;
	Character.skulduggerySkill = document.getElementById("Skulduggery").value;
	Character.streetwiseSkill = document.getElementById("Streetwise").value;
	Character.survivalSkill = document.getElementById("Survival").value;
	
	//Willpower
	Character.coercionSkill = document.getElementById("Coercion").value;
	Character.disciplineSkill = document.getElementById("Discipline").value;
	Character.vigilanceSkill = document.getElementById("Vigilance").value;
	
	//Presence
	Character.charmSkill = document.getElementById("Charm").value;
	Character.coolSkill = document.getElementById("Cool").value;
	Character.leadershipSkill = document.getElementById("Leadership").value;
	Character.negotiationSkill = document.getElementById("Negotiation").value;
	console.log("start lightsaber selection");
	Character.lightsaberSkill = document.getElementById("Lightsaber").value;
	if(document.getElementById("LightsaberBrawn").selected == true){
		Character.lightsaberStat = Character.brawn;
	}
	else if(document.getElementById("LightsaberAgility").selected == true){
		Character.lightsaberStat = Character.agility;
	}
	else if(document.getElementById("LightsaberIntellect").selected == true){
		Character.lightsaberStat = Character.intellect;
	}
	else if(document.getElementById("LightsaberCunning").selected == true){
		Character.lightsaberStat = Character.cunning;
	}
	else if(document.getElementById("LightsaberWillpower").selected == true){
		Character.lightsaberStat = Character.willpower;
	}
	else if(document.getElementById("LightsaberPresence").selected == true){
		Character.lightsaberStat = Character.presence;
	}
	console.log("end selection");

		
	var i = 0;
	var l = 0;
	LocalPlayerList.playerName = document.getElementById("PlayerName").value;
	LocalPlayerList.characterName = document.getElementById("CharacterName").value;
	LocalPlayerList.soak = document.getElementById("Soak").value;
	LocalPlayerList.woundCurrent = document.getElementById("WoundCurrent").value;
	LocalPlayerList.woundThreshold = document.getElementById("WoundThreshold").value;
	LocalPlayerList.strainThreshold =  document.getElementById("StrainThreshold").value;
	LocalPlayerList.strainCurrent = document.getElementById("StrainCurrent").value;
	LocalPlayerList.rangedDefense = document.getElementById("RangedDefense").value;
	LocalPlayerList.meleeDefense = document.getElementById("MeleeDefense").value;
	
	
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
			playerNum = i;
			skip = false;
		}
	}
	if(skip){
		PlayerListArrayLocal.push(LocalPlayerList);		
	}
	gapi.hangout.data.submitDelta({PlayerListArray: JSON.stringify(PlayerListArrayLocal)});

}
