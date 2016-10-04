var Character = {
    	brawn: 0,
    	agility: 0,
    	intellect: 0,
	cunning: 0,
    	willpower: 0,
    	presence: 0,
    	lightsaberStat: 0
};


var LocalGMID = 0;

var diceRoll = {
	diceRollType: 0,
	diceRollSuccess: 0,
	diceRollAdvantage: 0,
	diceRollTriumph: 0
}

var forceRoll = {
	light: 0,
	dark: 0
}

var LocalPlayerList = {
	playerID: "",
	characterName: "",
	playerName: "",
	soak: "",
	woundThreshold: "",
	woundCurrent: "",
	strainThreshold: "",
	strainCurrent: "",
	rangedDefense: "",
	meleeDefense: "",
	lastDiceRoll: diceRoll,
	lastForceRoll: forceRoll
};

