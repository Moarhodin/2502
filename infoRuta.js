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