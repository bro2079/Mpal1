const sideBar = document.getElementById("sideBar");
const homeP = document.getElementById("homePg");
const lofiP = document.getElementById("lofiPg");
const rainP = document.getElementById("rainPg");
const homeBtn = document.getElementById("homeBtn");
const lofiBtn = document.getElementById("lofiBtn");
const rainBtn = document.getElementById("rainBtn");
const navOpenBtn = document.getElementById("navOpenBtn");
const navCloseBtn = document.getElementById("navCloseBtn");

let indexCounter = 3;

homeBtn.onclick = function(){
    indexCounter++
    homeP.style.zIndex = `${indexCounter}`;
}

lofiBtn.onclick = function(){
    indexCounter++
    lofiP.style.zIndex = `${indexCounter}`;
}

rainBtn.onclick = function(){
    indexCounter++
    rainP.style.zIndex = `${indexCounter}`;
}

navOpenBtn.onclick = function(){
    sideBar.style.left = "0";
    sideBar.style.transition = "0.7s";
    navOpenBtn.style.display = "none";
    navCloseBtn.style.display = "initial";
    indexCounter++;
    sideBar.style.zIndex = `${indexCounter}`;
}

navCloseBtn.onclick = function(){
    sideBar.style.left = "-50%";
    navCloseBtn.style.display = "none";
    navOpenBtn.style.display = "initial";
    indexCounter++;
    sideBar.style.zIndex = `${indexCounter}`;
}