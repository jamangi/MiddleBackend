window.onload = function() {
	new Datastore();
	new ActionModal();
	new Toolbar();
	window.connected = false;
	let map = emptyWood();
	let userCharacter = makeCharacter(map, 2, 2, "lockune");
	let user = new User(userCharacter)
}