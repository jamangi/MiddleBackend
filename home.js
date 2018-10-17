window.onload = function() {
	new Datastore();
	new ActionModal();
	new Toolbar();
	window.characterCount = 0;
	let map = emptyWood();
	let userCharacter = makeCharacter(map, 2, 2, "lockune");
	let user = new User(userCharacter)

	//touch - starts on button click
		//call back is replace & start interval

	//one modal - action modal
}