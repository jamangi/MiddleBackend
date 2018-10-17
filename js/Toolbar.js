class Toolbar {
	constructor (){
		window.toolbar = this;
		this.scriptButton = document.getElementById("toolbarScript");
		this.actionButton = document.getElementById("toolbarAction");

		this.actionButton.addEventListener('click', function (evnt){
			touchSend();
		});
	}

	showConnect() {
		this.actionButton.innerHTML = "Connect"
		this.actionButton.setAttribute("class", "btn btn-info");
	}

	showStatus(data) {
		let user = data["user"]
		let form = user["form"]
		this.actionButton.innerHTML = user["name"];
		if (form === "ghost")
			this.actionButton.setAttribute("class", "btn btn-warning");
		else
			this.actionButton.setAttribute("class", "btn btn-success");
	}
}