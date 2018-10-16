window.onload = function() {
	window.characterCount = 0;
	let map = emptyWood();
	let userCharacter = makeCharacter(map, 6, 10, "lockune");
	let user = new User(userCharacter)
}