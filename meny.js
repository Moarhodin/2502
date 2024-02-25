function visaMeny() {
	var submenu = document.getElementById("submenu");
    
	if (submenu.style.display === "none") {
	    submenu.style.display = "flex";
	} else {
	    submenu.style.display = "none";
	}
    }


function visaSortiment() {
        var underkategorier = document.getElementById("sorter");
        underkategorier.style.display = "block"; 
}

    
function gömSortiment() {
        var underkategorier = document.getElementById("sorter");
        underkategorier.style.display = "none"; 
}

 