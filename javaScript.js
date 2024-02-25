function showMessage() {
	alert("Hello, JavaScript!");
}

/*Den stänngs nnär man klickar på nästa*/
/*function showInfo(infoBoxId) {
	// Göm alla InfoBox
	var allInfoBoxes = document.querySelectorAll('.InfoBox');
	allInfoBoxes.forEach(function(box) {
	    box.style.display = 'none';
	});

	// Visa den valda InfoBox
	var selectedInfoBox = document.getElementById(infoBoxId);
	if (selectedInfoBox) {
	    selectedInfoBox.style.display = 'flex';
	}
}*/

/*Den stänngs inte när man öppnar nästa */
/*function showInfo(infoBoxId) {
	// Hämta det elementet med det angivna infoBoxId
	var selectedInfoBox = document.getElementById(infoBoxId);
	
	// Om infoBoxen är synlig, göm den, annars visa den
	if (selectedInfoBox.style.display === 'flex') {
	    selectedInfoBox.style.display = 'none';
	} else {
	    selectedInfoBox.style.display = 'flex';
	}
}*/

/*Öppna info ruta */
function showInfo(infoBoxId) {
	const selectedInfoBox = document.getElementById(infoBoxId);
	selectedInfoBox.style.display = 'flex';
}
    
/*Stäng info ruta */
function closeInfo(infoBoxId) {
	const selectedInfoBox = document.getElementById(infoBoxId);
	selectedInfoBox.style.display = 'none';
}