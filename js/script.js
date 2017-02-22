$(document).ready(function() {
	displayGrid();
	clearGrid();
	paintCell();
	setGridSize();
});


	//Initialize and display a grid of appropriate size
	function displayGrid(gridSize = null) {
		//Store the grid
		var grid = $(".grid");

		var defaultRowSize;
		var defaultColumnSize;

		//Set the default number of rows and columns the grid should have
		if(gridSize === null) {
			defaultRowSize = 16;
			defaultColumnSize = 16;
		}
		else {
			defaultRowSize = gridSize;
			defaultColumnSize = gridSize;
		}

		//Create rows and columns of appropriate number
		for(i = 0; i < defaultRowSize; i++) {
			grid.append("<tr class='row'>");
			
			for(j = 0; j < defaultColumnSize; j++) {
				grid.append("<td class='cell'></td>");
			}

			grid.append("</tr>");
		}
	}
	
	function paintCell() {
		//Change the color of each cell a user hovers over
		$(document).on("mouseover", ".cell", function() {
			$(this).addClass("paint");
		});
	}

	function clearGrid() {
		//Clear the grid
		$("#clear-grid").click(function() {
			$(".cell").removeClass("paint");
		});
	}
	
	function setGridSize() {
		//Change the size of the grid according to user input
		$("#grid-size").click(function() {
			var userSize = prompt("Enter a new grid size:", "");

			size = userSize;
			$(".cell").detach();
			displayGrid(userSize);
		});
	}
	

