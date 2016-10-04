function rollDice(){
	success = 0;
	advantage = 0;
	triumph = 0;
	failure = 0;
	threat = 0;
	despair = 0;
	light = 0;
	dark = 0;

	rollBoostDie();
	rollSetbackDie();
	rollAbilityDie();
	rollDifficultyDie();
	rollProficiencyDie();
	rollChallengeDie();
	rollForceDie()

	if (success >= failure)
	{
		var temp1 = success - failure;
		document.getElementById("Success").innerHTML = "Successes: " + temp1;
	}
	else{
		var temp1 = failure - success;
		document.getElementById("Success").innerHTML = "Failures: " + temp1;
	}
	if(advantage >= threat){
		var temp2 = advantage - threat;
		document.getElementById("Advantage").innerHTML = "Advantages: " + temp2;
	}
	else{
		var temp2 = threat - advantage;
		document.getElementById("Advantage").innerHTML = "Threats: " + temp2;
	}
	if(triumph >= despair){
		var temp3 = triumph - despair;
		document.getElementById("Triumph").innerHTML = "Triumphs: " + temp3;
	}
	else{
		var temp3 = despair - triumph
		document.getElementById("Triumph").innerHTML = "Despairs: " + temp3;
	}
		document.getElementById("Light").innerHTML = "Force(Light): " + light;
	document.getElementById("Dark").innerHTML = "Force(Dark): " + dark;
}

function rollBoostDie()
{
	var dice = 0;
	x = document.getElementById("boostDieNum").value;
	//var dicerolls = new Array(x);
	for (i = 0; i < x; ++i){
		dice = Math.floor((Math.random() * 6) + 1);
		//dicerolls[i] = dice;
		if (dice == 3){
			success += 1;
		}
		else if (dice == 4){
			success += 1;
			advantage +=1;
		}
		else if (dice == 5){
			advantage +=2;
		}
		else if (dice == 6){
			advantage +=1;
		}
	}
	//dicelist = dicerolls.toString();
	//document.getElementById("BoostNum").innerHTML = "Boost Dice rolled: " + dicelist;
}
	
function rollSetbackDie()
{
			var dice = 0;
			x = document.getElementById("setbackDieNum").value;
			for (i = 0; i < x; ++i){
				dice = Math.floor((Math.random() * 6) + 1);
				if (dice == 3){
					failure += 1;
				}
				else if (dice == 4){
					failure += 1;
				}
				else if (dice == 5){
					threat +=2;
				}
				else if (dice == 6){
					threat +=1;
				}
			}
		}

		function rollAbilityDie()
        {
			var dice = 0;
			x = document.getElementById("abilityDieNum").value;			
			for (i = 0; i < x; ++i){
				dice = Math.floor((Math.random() * 8) + 1);
				if (dice == 2){
					success += 1;
				}
				else if (dice == 3){
					success += 1;
				}
				else if (dice == 4){
					success += 2;
				}
				else if (dice == 5){
					advantage += 1;
				}
				else if (dice == 6){
					advantage += 1;
				}
				else if (dice == 7){
					success += 1;
					advantage += 1;
				}
				else if (dice == 8){
					advantage += 2;
				}
			}
		}
	
		function rollDifficultyDie()
        {
			var dice = 0;
			x = document.getElementById("difficiultyDieNum").value;
			for (i = 0; i < x; ++i){
				dice = Math.floor((Math.random() * 6) + 1);
				if (dice == 2){
					failure += 1;
				}
				else if (dice == 3){
					failure += 2;
				}
				else if (dice == 4){
					threat += 1;
				}
				else if (dice == 5){
					threat += 1;
				}
				else if (dice == 6){
					threat += 1;
				}
				else if (dice == 7){
					threat += 2;
				}
				else if (dice == 8){
					failure += 1;
					threat += 1;
				}
			}
		}
	
	
		function rollProficiencyDie()
        {
			var dice = 0;
			x = document.getElementById("proficiencyDieNum").value;
			for (i = 0; i < x; ++i){
				dice = Math.floor((Math.random() * 12) + 1);
				if (dice == 2){
					success += 1;
				}
				else if (dice == 3){
					success += 1;
				}
				else if (dice == 4){
					success += 2;
				}
				else if (dice == 5){
					success += 2;
				}
				else if (dice == 6){
					advantage += 1;
				}
				else if (dice == 7){
					success += 1;
					advantage += 1;
				}
				else if (dice == 8){
					success += 1;
					advantage += 1;
				}
				else if (dice == 9){
					success += 1;
					advantage += 1;
				}
				else if (dice == 10){
					advantage += 2;
				}
				else if (dice == 11){
					advantage += 2;					
				}
				else if (dice == 12){
					triumph += 1;
				}
			}
		}
	
	
	
		function rollChallengeDie()
        {
			var dice = 0;
			x = document.getElementById("challengeDieNum").value;
			for (i = 0; i < x; ++i){
				dice = Math.floor((Math.random() * 12) + 1);
				if (dice == 2){
					failure += 1;
				}
				else if (dice == 3){
					failure += 1;
				}
				else if (dice == 4){
					failure += 2;
				}
				else if (dice == 5){
					failure += 2;
				}
				else if (dice == 6){
					threat += 1;
				}
				else if (dice == 7){
					threat += 1;
				}
				else if (dice == 8){
					threat += 1;
					failure += 1;
				}
				else if (dice == 9){
					threat += 1;
					failure += 1;
				}
				else if (dice == 10){
					threat += 2;
				}
				else if (dice == 11){
					threat += 2;
				}
				else if (dice == 12){
					despair += 1;
				}
			}
		}
	
	
		function rollForceDie()
        {
			var dice = 0;
			x = document.getElementById("forceDieNum").value;
			for (i = 0; i < x; ++i){
				dice = Math.floor((Math.random() * 12) + 1);
				if (dice == 1){
					dark += 1;
				}
				else if (dice == 2){
					dark += 1;
				}				
				else if (dice == 3){
					dark += 1;
				}
				else if (dice == 4){
					dark += 1;
				}
				else if (dice == 5){
					dark += 1;
				}
				else if (dice == 6){
					dark += 1;
				}
				else if (dice == 7){
					dark += 2;
				}
				else if (dice == 8){
					light += 1;
				}
				else if (dice == 9){
					light += 1;
				}
				else if (dice == 10){
					light += 2;
				}
				else if (dice == 11){
					light += 2;
				}
				else if (dice == 12){
					light += 2;
				}
			}



		}
