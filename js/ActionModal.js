class ActionModal {
	constructor() {
		window.actionModal = this;
		this.actionButtons = document.getElementById("actionButtons");
		this.actionContent = document.getElementById("actionContent");
		this.actionForm = document.getElementById("actionForm");

		this.actionTitle = document.getElementById("actionTitle");
		this.actionTitleImg = document.getElementById("actionTitleImg");

		this.actionLoading = document.getElementById("actionLoading");

		this.actionChangeButton = document.getElementById("actionChangeButton");
		this.actionCollectButton = document.getElementById("actionCollectButton");
		this.actionDropButton = document.getElementById("actionDropButton");
		this.actionHealButton = document.getElementById("actionHealButton");
		this.actionNewButton = document.getElementById("actionNewButton");
		this.actionRunButton = document.getElementById("actionRunButton");		
		this.actionSetButton = document.getElementById("actionSetButton");
		this.actionTestButton = document.getElementById("actionTestButton");

		this.actionSetForm = document.getElementById("actionSetForm");

		this.actionSetForm.addEventListener('submit', function (evnt){
			evnt.preventDefault();
			setSend();
		});

		this.actionChangeButton.addEventListener("click", function(){
			actionModal.showUpdate(datastore["userData"]);
		});

		this.components = [this.actionTitle, this.actionContent,
						   this.actionButtons, this.actionForm];

		this.clear();
	}


	//////////////  api /////////////////////////

	clear() {
		for (let component of this.components) {
			while (component.lastChild) {
				component.removeChild(component.lastChild);
			}
		}
		this.loadingOff();
	}

	loadingOn(){loadingLog(this.actionLoading);}
	loadingOff(){clearLog(this.actionLoading);}

	printUser(data){
		if (checkError(data))
			printError(this.actionLoading, data);
		else 
			printUser(this.actionContent, data);
	}

	messageLog(msg) {
		messageLog(this.actionLoading, msg);
	}


	showSet() {
		this.clear();
		this.actionContent.appendChild(this.actionSetForm);
	}

	showUpdate(data) {
		this.clear();
		this.showUser(data);
		this.actionForm.appendChild(this.actionSetForm);
	}

	showUser(data) {
		this.clear();
		let u = data["user"];
		let name = u["name"];
		let form = u["form"];
		let imgdir = "images/characters/"
		let img = imgdir+form+"/"+form+"WalkDown.gif";
		returnLog(this.actionTitle, "<h2 style='float:right'; class='text-capitalize'>"
				  +name+"</h2>");
		this.actionTitleImg.setAttribute('src',img);
		this.actionTitle.appendChild(this.actionTitleImg);
		this.printUser(data);
		user.character = form;
		user.update(user.row, user.col)
	}

	showHeal(data) {
		this.showUser(data);
		this.actionButtons.appendChild(this.actionChangeButton);
		this.actionButtons.appendChild(this.actionHealButton);
		this.actionButtons.appendChild(this.actionNewButton);
	}
	

}