/////// generic ///////
function checkError(data) {
	if (data === undefined || data["msg"] !== undefined) 
		return true; 
	else return false;
}


function clearLog(ele) {
	ele.innerHTML = '';
}

function loadingLog(ele) {
	ele.innerHTML = 'loading...';
}

function messageLog(ele, msg) {
	ele.innerHTML = msg;
}

function printError(display, data) {
	messageLog(display, data["msg"]);
}

function printUser(display, data) {
	let props = ["name", "id", "location",
				 "character", "form", "material",
				 "total_collected", "total_dropped"]

	let status = "healthy"
	if (data["user"]["form"] === "ghost")
		status = "ghost"

	for (let prop of props){
		let key = prop.replace("total_", "");
		let value = data["user"][prop];
		if (prop === "form") {
			key = "status";
			value = status;
		}
		returnLog(display, key +": "+value);
	}
}


function returnLog(ele, msg) {
	if (ele.innerHTML === '')
		ele.innerHTML = msg;
	else
		ele.innerHTML = ele.innerHTML + "<br>" + msg;
}


////////// Set (set username, character, and ip) ///////////
function setFormUpdate(char) {
	document.getElementById("actionRadioInput").value = char;
}

function setCallback(data) {
	actionModal.clear();
	if (checkError(data)){
		toolbar.showConnect();
		actionModal.messageLog(data['msg'])
		actionModal.showSet();
	}
	else{
		toolbar.showStatus(data);
		actionModal.showHeal(data);
	}
}

function setSend() {
	let charInput = document.getElementById("actionRadioInput").value;
	let nameEle = document.getElementById("actionNameInput")
	let nameInput = nameEle.value;

	if (charInput.lenth === 0 || nameInput.length === 0)
		actionModal.messageLog("<small style='color:darkred;'>character and name must be selected</small>")
	else {
		data = {name: nameInput, character: charInput,
				location: "training"}
		datastore.set(setCallback, data)
	}
	// nameEle.value = '';
}

////////// Touch (fetch username, character, and ip) ///////////
function touchCallback(data) {
	actionModal.loadingOff();
	if (checkError(data)){
		toolbar.showConnect();
		actionModal.messageLog(data['msg'])
		actionModal.showSet();
	}
	else{
		toolbar.showStatus(data);
		actionModal.showHeal(data);
	}
}
function touchSend() {
	actionModal.loadingOn();
	datastore.touch(touchCallback)
}

/////// Connect ///////////