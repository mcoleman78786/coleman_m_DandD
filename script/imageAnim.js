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
			// give class for puzzle images

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
			// queryselectorall inspect img
			img.addEventListener("dragstart", function(e) {
       {
             console = console || {};
             console.log = function(){};
}
				function removePlayingClass(event) {
		// debugger;
	}
				// debugger;

				e.dataTransfer.setData("text/plain", this.id);
				// inspect to see if all working
	    });
	});
}

	dropZones.forEach(zone => {
		zone.addEventListener("dragover", function(e) {
			e.preventDefault();
			console = console || {};
             console.log = function(){};
		});

		zone.addEventListener("drop", function(e) {
			e.preventDefault();
			console = console || {};
             console.log = function(){};
			let puzzleDrop = e.target;
				while (puzzleDrop !== 0 && ! puzzleDrop.classList.contains("drop-zone")) {
				puzzleDrop = puzzleDrop.parentNode;
			}

			if (puzzleDrop && puzzleDrop.childNodes.length > 0) {
				return false;
				e.preventDefault();
			}
			let piece = e.dataTransfer.getData("text/plain");
			e.target.appendChild(document.querySelector(`#${piece}`));
		});
	});

	// reset puzzle piece by using function below
	function resetPuzzlePieces() {
		// 
		// swap out all the images when clicking on bottom button
		//debugger;
		piecesBoard.innerHTML = "";

		createPuzzlePieces(this.dataset.puzzleref); 
		var img = document.getElementsByClassName("puzzle-image");

    		
    		while (img.length = 0){
    			// help puzzle show up on the left in the box

        	img[0].parentNode.removeChild(img[0]);
    }
}

	
	puzzleSelectors.forEach(puzzle => puzzle.addEventListener("click", resetPuzzlePieces));
	// handling goes down here



	createPuzzlePieces(0);

})();
