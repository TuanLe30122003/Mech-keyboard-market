const home = document.querySelector('#home');
const explore = document.querySelector('#explore');
const item = document.querySelector('#item');
const owner = document.querySelector('#owner');
const create = document.querySelector('#create');

create.onclick = function (e) {
    var stagee = document.getElementsByClassName('stage');

    for(let i=0; i < stagee.length; i++) {
        stagee[i].style.display = "none";
    }

    document.getElementById('purchasestage').style.display = "block";

    var buttonn = document.getElementsByClassName('nav-but');
    for(let i=0; i < buttonn.length; i++){
        buttonn[i].style.backgroundColor = "#fff";
        buttonn[i].style.color = "#7453fc";
    }
    document.getElementById('create').style.backgroundColor = "#7453fc"; 
    document.getElementById('create').style.color = "#fff";

    window.scrollTo(0, 0);
}

owner.onclick = function(e) {
    var stagee = document.getElementsByClassName('stage');

    for(let i=0; i < stagee.length; i++) {
        stagee[i].style.display = "none";
    }

    document.getElementById('ownerstage').style.display = "block";

    var buttonn = document.getElementsByClassName('nav-but');
    for(let i=0; i < buttonn.length; i++){
        buttonn[i].style.backgroundColor = "#fff";
        buttonn[i].style.color = "#7453fc";
    }
    document.getElementById('owner').style.backgroundColor = "#7453fc"; 
    document.getElementById('owner').style.color = "#fff";

    window.scrollTo(0, 0);
}

item.onclick = function() {
    var stagee = document.getElementsByClassName('stage');

    for(let i=0; i < stagee.length; i++) {
        stagee[i].style.display = "none";
    }

    document.getElementById('itemstage').style.display = "block";

    var buttonn = document.getElementsByClassName('nav-but');
    for(let i=0; i < buttonn.length; i++){
        buttonn[i].style.backgroundColor = "#fff";
        buttonn[i].style.color = "#7453fc";
    }
    document.getElementById('item').style.backgroundColor = "#7453fc"; 
    document.getElementById('item').style.color = "#fff";

    window.scrollTo(0, 0);
}

home.onclick = function() {
    var stagee = document.getElementsByClassName('stage');

    for(let i=0; i < stagee.length; i++) {
        stagee[i].style.display = "none";
    }

    document.getElementById('homestage').style.display = "block";

    var buttonn = document.getElementsByClassName('nav-but');
    for(let i=0; i < buttonn.length; i++){
        buttonn[i].style.backgroundColor = "#fff";
        buttonn[i].style.color = "#7453fc";

    }
    document.getElementById('home').style.backgroundColor = "#7453fc"; 
    document.getElementById('home').style.color = "#fff";

    window.scrollTo(0, 0);
}


explore.onclick = function() {
    var stagee = document.getElementsByClassName('stage');

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

    window.scrollTo(0, 0);

}

const cateIcon = document.querySelector('.cate div ion-icon');
const availableIcon = document.querySelector('.available div ion-icon');
const cateChoice = document.querySelector('.cate .choice');
const availableChoice = document.querySelector('.available .choice');

cateIcon.onclick = function (e) {
    cateChoice.classList.toggle('unable');
}

availableIcon.onclick = function (e) {
    availableChoice.classList.toggle('unable');
}

const choosenCate = document.querySelectorAll('.cate li');
const choosenAvailable = document.querySelectorAll('.available li');

const choiceBox = document.querySelectorAll('.choiceBox');

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

const directToExplore = document.querySelector('.directToExplore');

directToExplore.onclick = function () {
    var stagee = document.getElementsByClassName('stage');

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

    window.scrollTo(0, 0);
}


const curSortList = document.querySelector('.sort ion-icon');
const orderList = document.querySelector('.sortOrderList');

curSortList.onclick = function() {
    orderList.classList.toggle('unable');
}

const contentSort = document.querySelector('.sort > div > span');
const contentChoice = document.querySelectorAll('.sortOrderList > li');

for(var i=0; i<contentChoice.length; i++){
    contentChoice[i].onclick = function(e) {
        contentSort.innerText = e.target.innerText;
        orderList.classList.add('unable');
        
    }
}

const directToCreate = document.querySelectorAll('.c-direct > div');

// console.log(directToCreate);

for(var i=0; i<directToCreate.length; i++){
    directToCreate[i].onclick = function(e) {
        var stagee = document.getElementsByClassName('stage');
    
        for(let i=0; i < stagee.length; i++) {
            stagee[i].style.display = "none";
        }
    
        document.getElementById('purchasestage').style.display = "block";
    
        var buttonn = document.getElementsByClassName('nav-but');
        for(let i=0; i < buttonn.length; i++){
            buttonn[i].style.backgroundColor = "#fff";
            buttonn[i].style.color = "#7453fc";
        }
        document.getElementById('create').style.backgroundColor = "#7453fc"; 
        document.getElementById('create').style.color = "#fff";
    
        window.scrollTo(0, 0);
    }
}

const directToCreate2 = document.querySelectorAll('.db');

for(var i=0; i<directToCreate2.length; i++){
    directToCreate2[i].onclick = function(e) {
        var stagee = document.getElementsByClassName('stage');
    
        for(let i=0; i < stagee.length; i++) {
            stagee[i].style.display = "none";
        }
    
        document.getElementById('purchasestage').style.display = "block";
    
        var buttonn = document.getElementsByClassName('nav-but');
        for(let i=0; i < buttonn.length; i++){
            buttonn[i].style.backgroundColor = "#fff";
            buttonn[i].style.color = "#7453fc";
        }
        document.getElementById('create').style.backgroundColor = "#7453fc"; 
        document.getElementById('create').style.color = "#fff";
    
        window.scrollTo(0, 0);
    }
}

home.click();

