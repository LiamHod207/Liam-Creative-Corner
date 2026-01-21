function showNotes1() {
    var x = document.getElementById("productionbox1");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function showNotes2() {
    var x = document.getElementById("productionbox2");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function DarkBG() {
    var bg = document.body.style;

    if (bg.backgroundImage === 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("Content/Cinema_bg_2.jpg")') {
        bg.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("Content/Cinema_bg_2.jpg")';
    } else {
        bg.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("Content/Cinema_bg_2.jpg")';
    }    
}

