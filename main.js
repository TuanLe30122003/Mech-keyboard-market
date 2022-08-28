const home = document.querySelector('#home');
const explore = document.querySelector('#explore')

home.onclick = function() {
    // document.getElementById('explorestage').style.display = "none";

    var stagee = document.getElementsByClassName('stage');
    // console.log(stagee.length);

    for(let i=0; i < stagee.length; i++) {
        stagee[i].style.display = "none";
        console.log(i);
    }

    document.getElementById('homestage').style.display = "block";
    // document.getElementById('homestage').style.transition ="all 0.5s";


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
        // console.log(i);
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

home.click();


const cateIcon = document.querySelector('.cate div ion-icon');
const availableIcon = document.querySelector('.available div ion-icon');
const cateChoice = document.querySelector('.cate .choice');
const availableChoice = document.querySelector('.available .choice');
// console.log(choice);

cateIcon.onclick = function (e) {
    cateChoice.classList.toggle('unable');
}

availableIcon.onclick = function (e) {
    availableChoice.classList.toggle('unable');
}

const choosenCate = document.querySelectorAll('.cate li');
const choosenAvailable = document.querySelectorAll('.available li');

const choiceBox = document.querySelectorAll('.choiceBox');
// console.log(choiceBox);

for(var i=0; i<choosenCate.length; i++){
    choosenCate[i].onclick = function (e) {
        var needToChange = document.querySelector('.cate .choiceBox span');
        needToChange.innerText = e.target.innerText;
        cateChoice.classList.toggle('unable');
        choiceBox[0].style.backgroundColor = "#fff";
        choiceBox[0].style.color = "#7453fc";
        choiceBox[0].style.fontWeight = "700";
        cateIcon.style.color = "#000";
    }
}

for(var i=0; i<choosenAvailable.length; i++){
    choosenAvailable[i].onclick = function (e) {
        var needToChange = document.querySelector('.available .choiceBox span');
        needToChange.innerText = e.target.innerText;
        availableChoice.classList.toggle('unable');
        choiceBox[1].style.backgroundColor = "#fff";
        choiceBox[1].style.color = "#7453fc";
        choiceBox[1].style.fontWeight = "700";
        availableIcon.style.color = "#000";
    }
}


