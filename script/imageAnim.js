(() => {
	//variables always come first
	// set up the puzzle pieces and boards
	const pieces = ["topLeft", "topRight", "bottomLeft", "bottomRight"];
	// hook up javascript

	let piecesBoard = document.querySelector(".puzzle-pieces"),
		puzzleBoard = document.querySelector(".puzzle-board"),
		puzzleSelectors = document.querySelectorAll("#buttonHolder img");
		// link up images and puzzle pieces

		let dropZones = document.querySelectorAll('.drop-zone');

		//functions go in the middle
	function createPuzzlePieces(pictureIndex) {
		// Always check by using debugger;
		// link up images for puzzle 
		// 
		//debugger;
		pieces.forEach((piece, index) => {
			let newPuzzlePiece =`<img draggable id ="piece${index}" class="puzzle-image" src="images/${piece + pictureIndex}.jpg" alt="thumbnail">`;

			piecesBoard.innerHTML += newPuzzlePiece;
			// debugger;
		});

		puzzleBoard.style.backgroundImage = `url(images/backGround${pictureIndex}.jpg)`;
		// insert image background 
		// debugger;

		initDrag();


	}

	function initDrag() {
		piecesBoard.querySelectorAll('img').forEach(img => {
			img.addEventListener("dragstart", function(e) {
				console.log('dragging it')

				e.dataTransfer.setData("text/plain", this.id);
	    });
	});
}

	dropZones.forEach(zone => {
		zone.addEventListener("dragover", function(e) {
			e.preventDefault();
			console.log("dragged pieces over");
		});

		zone.addEventListener("drop", function(e) {
			e.preventDefault();
			console.log("dropped");
			let firstpuzDrop = e.target;
				while (firstpuzDrop !== 0 && !firstpuzDrop.classList.contains("drop-zone")) {
				firstpuzDrop = firstpuzDrop.parentNode;
			}

			if (firstpuzDrop && firstpuzDrop.childNodes.length > 0) {
				return false;
				e.preventDefault();
			}
			let piece = e.dataTransfer.getData("text/plain");
			e.target.appendChild(document.querySelector(`#${piece}`));
		});
	});

	function resetPuzzlePieces() {
		// swap out all the images when clicking on bottom button
		//debugger;
		piecesBoard.innerHTML = "";

		createPuzzlePieces(this.dataset.puzzleref); 
		var images = document.getElementsByClassName("puzzle-image");

    		while(images.length > 4){
    			
        	images[4].parentNode.removeChild(images[4]);
    }
}

	
	puzzleSelectors.forEach(puzzle => puzzle.addEventListener("click", resetPuzzlePieces));
	// handling goes down here



	createPuzzlePieces(0);

})();
