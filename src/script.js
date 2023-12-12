var startTime = Date.now();

//#region
function loadFrom(path) {
	var req = new XMLHttpRequest();
	req.onreadystatechange = function () {
		if (this.readyState === 4 && this.status === 200) {
			console.log(this.response);
			return this.response
		}
	};
	req.open('GET', path, true);
	req.send();
}

var main = document.getElementById("main")
var info = document.getElementById("info")

function show() {
	main.setAttribute("pos", "left");
	info.setAttribute("pos", "right");
}

function close() {
	main.setAttribute("pos", "center");
	info.setAttribute("pos", "invis");
}

var exitButton = document.querySelector('button[aria-label="Close"]');
exitButton.addEventListener('click', close);

if (location.hash != '') {
	show();
}

// show();
// if (location.hash == "#mywork") {
// 	location.href = "#aboutme";
// }