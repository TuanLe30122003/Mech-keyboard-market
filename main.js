let home = document.querySelector('#home');
let explore = document.querySelector('#explore')

home.onclick = function() {
    // document.getElementById('explorestage').style.display = "none";

    var stagee = document.getElementsByClassName('stage');
    // console.log(stagee.length);

    for(let i=0; i < stagee.length; i++) {
        stagee[i].style.display = "none";
        console.log(i);
    }

    document.getElementById('homestage').style.display = "block";


    var buttonn = document.getElementsByClassName('nav-but');
    for(let i=0; i < buttonn.length; i++){
        buttonn[i].style.backgroundColor = "#fff";
        buttonn[i].style.color = "#7453fc";

    }
    document.getElementById('home').style.backgroundColor = "#7453fc"; 
    document.getElementById('home').style.color = "#fff";

    // console.log(buttonn.length);
}

explore.onclick = function() {
    // document.getElementById('homestage').style.display = "none";

    var stagee = document.getElementsByClassName('stage');
    // console.log(stagee.length);

    for(let i=0; i < stagee.length; i++) {
        stagee[i].style.display = "none";
        console.log(i);
    }

    document.getElementById('explorestage').style.display = "block";

    var buttonn = document.getElementsByClassName('nav-but');
    for(let i=0; i < buttonn.length; i++){
        buttonn[i].style.backgroundColor = "#fff";
        buttonn[i].style.color = "#7453fc";
    }
    document.getElementById('explore').style.backgroundColor = "#7453fc"; 
    document.getElementById('explore').style.color = "#fff";
}


// --------------------Hover effect repeat :)) -------------------------------
// Hiện tại là đ làm dc cái kiểu này vì nó chồng chéo chau vcl :))
// Home

// home.onmouseover = function() {
//     document.getElementById('home').style.backgroundColor = "#7453fc";
//     document.getElementById('home').style.color = "#fff";
// }

// home.onmouseout = function () {
//     document.getElementById('home').style.backgroundColor = "#fff";
//     document.getElementById('home').style.color = "#7453fc";
// }

// // explore 

// explore.onmouseover = function() {
//     document.getElementById('explore').style.backgroundColor = "#7453fc";
//     document.getElementById('explore').style.color = "#fff";
// }

// explore.onmouseout = function () {
//     document.getElementById('explore').style.backgroundColor = "#fff";
//     document.getElementById('explore').style.color = "#7453fc";
// }

