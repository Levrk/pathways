
window.addEventListener('load', function() {
    const imageConst = document.getElementById('img');
    const arrows = document.querySelectorAll(".arrowButton");
    arrows.forEach(function(arrow) {
        arrow.classList.add('fadeIn');
    });
});
scrollbars
function upArrow(url) {
    const imageConst = document.getElementById("img");
    const arrows = document.querySelectorAll(".arrowButton");
    imageConst.classList.add("onUp");
    arrows.forEach(function(arrow) {
        arrow.classList.remove('fadeIn');
        arrow.classList.add('fadeOut');
    });
    setTimeout(function() {
        window.location.href = url;
}, 700);
}

function downArrow(url) {
    const imageConst = document.getElementById("img");
    const arrows = document.querySelectorAll(".arrowButton");
    imageConst.classList.add("onDown");
    arrows.forEach(function(arrow) {
        arrow.classList.remove('fadeIn');
        arrow.classList.add('fadeOut');
    });
    setTimeout(function() {
        window.location.href = url;
}, 700);
}

function leftArrow(url) {
    const imageConst = document.getElementById("img");
    const arrows = document.querySelectorAll(".arrowButton");
    imageConst.classList.add("onLeft");
    arrows.forEach(function(arrow) {
        arrow.classList.remove('fadeIn');
        arrow.classList.add('fadeOut');
    });
    setTimeout(function() {
        window.location.href = url;
}, 700);
}

function rightArrow(url) {
   
    const imageConst = document.getElementById("img");
    const arrows = document.querySelectorAll(".arrowButton");
    imageConst.classList.add("onRight");
    arrows.forEach(function(arrow) {
        arrow.classList.remove('fadeIn');
        arrow.classList.add('fadeOut');
    });
    setTimeout(function() {
        window.location.href = url;
}, 700);
    
}