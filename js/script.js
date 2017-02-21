$(document).ready(function() {
	//Store the grid
	var grid = $(".grid");
	
	//Set the number of rows and columns the grid should have
	rowSize = 16;
	columnSize = 16;
	
	//Create rows and columns of appropriate number
	for(i = 0; i < rowSize; i++) {
		grid.append("<tr>");
		
		for(j = 0; j < columnSize; j++) {
			grid.append("<td class='cell'></td>");
		}

		grid.append("</tr>");
	}

	$(".cell").hover(function() {
		$(this).css("background-color", "white");
	}, function() {

	});
	
});