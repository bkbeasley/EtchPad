$(document).ready(function() {
	displayGrid();
	clearGrid();
	paintCell();
	setGridSize();
	initColorPicker();
	changeColor();
	
});


//Initialize and display a grid of appropriate size
function displayGrid(gridArea = null) {
	//Store the grid element
	var grid = $(".grid");

	var defaultRowSize;
	var defaultColumnSize;

	//Set the default number of rows and columns the grid should have
	if(gridArea === null) {
		gridArea = 16;
	}
	

	//Create rows and columns of appropriate number
	for(i = 0; i < gridArea * gridArea; i++) {
		grid.append("<div class='cell'></div>");
	}
	$(".cell").css("height", 500 / gridArea);
		$(".cell").css("width", 500 / gridArea);
	
}

function paintCell(color) {
	//Change the color of each cell a user hovers over
	$(document).on("mouseover", ".cell", function() {
		$(this).css("background-color", color);
	});
}


function clearGrid() {
	//Clear the grid
	$("#clear-grid").click(function() {
		$(".cell").css("background-color", "#ffffff")
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

function initColorPicker() {
	//Initialize the color picker
	$("#color-picker").spectrum({
	    color: "#000000",
	    chooseText: "Choose color"
	});
	paintCell("#000000");
}

function changeColor() {
	//Change the color of cells using the color picker
	$("#color-picker").spectrum({
		change: function(color) {
			 paintCell(color.toHexString());
		}
	});
}


	

