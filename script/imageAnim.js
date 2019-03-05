(() => {
	// select the elements that you want to work with
	let theButton = document.querySelector("#buttonHolder img");
	//swindow.addEventListener("load", changeHeaderText);

	function changeHeaderText() {
		document.querySelector("h1").textContent = "hello from javascript"
	}

// Event handling goes at the bottom
theButton.addEventListener("click", changeHeaderText);
// set up the puzzles and baords



})();