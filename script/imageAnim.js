(() => {
	//variables always come first
	// set up the puzzle pieces and boards
	const pieces = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

	let piecesBoard = document.querySelector(".puzzle-pieces"),
		puzzleBoard = document.querySelector(".puzzle-board"),
		puzzleSelectors = document.querySelectorAll("#buttonHolder img");

		let dropZones = document.querySelectorAll('.drop-zone');

		//functions go in the middle
	function createPuzzlePieces(pictureIndex) {
		//generate puzzle pieces for left hand side
		//debugger;
		pieces.forEach((piece, index) => {
			let newPuzzlePiece =`<img draggable id ="piece${index}" class="puzzle-image" src="images/${piece + pictureIndex}.jpg" alt="thumbnail">`;

			piecesBoard.innerHTML += newPuzzlePiece;
		});

		puzzleBoard.style.backgroundImage = `url(images/backGround${pictureIndex}.jpg)`;

		initDrag();


	}

	function initDrag() {
		piecesBoard.querySelectorAll('img').forEach(img => {
			img.addEventListener("dragstart", function(e) {
				//e.preventDefault(); 
				console.log('dragging it')

				e.dataTransfer.setData("text/plain", this.id);
	});
	});
	}

	dropZones.forEach(zone => {
		zone.addEventListener("dragover", function(e) {
			e.preventDefault();
			console.log("you dragged me over");
		});

		zone.addEventListener("drop", function(e) {
			e.preventDefault();
			console.log("you dropped");
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
		//empty thumbnail container
		piecesBoard.innerHTML = "";
		createPuzzlePieces(this.dataset.puzzleref); 
		var images = document.getElementsByClassName("puzzle-image");
    		while(images.length > 4){
        	images[4].parentNode.removeChild(images[4]);
	    }
	}

	// event handling down here
	puzzleSelectors.forEach(puzzle => puzzle.addEventListener("click", resetPuzzlePieces));



	createPuzzlePieces(0);
})();
