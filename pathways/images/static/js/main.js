
window.addEventListener('load', function() {
    const imageConst = document.getElementById('img');
    const arrows = document.querySelectorAll(".arrowButton");
    arrows.forEach(function(arrow) {
        arrow.classList.add('fadeIn');
    });
    imageConst.classList.add('slowFadeIn')
    
});
scrollbars
function upArrow(url) {
    const imageConst = document.getElementById("img");
    const arrows = document.querySelectorAll(".arrowButton");
    imageConst.classList.remove('slowFadeIn')
    imageConst.classList.add("onUp");
    arrows.forEach(function(arrow) {
        arrow.classList.remove('fadeIn');
        arrow.classList.add('fadeOut');
    });
    setTimeout(function() {
        window.location.href = url;
}, 500);
}

function downArrow(url) {
    const imageConst = document.getElementById("img");
    const arrows = document.querySelectorAll(".arrowButton");
    imageConst.classList.remove('slowFadeIn')
    imageConst.classList.add("onDown");
    arrows.forEach(function(arrow) {
        arrow.classList.remove('fadeIn');
        arrow.classList.add('fadeOut');
    });
    setTimeout(function() {
        window.location.href = url;
}, 500);
}

function leftArrow(url) {
    const imageConst = document.getElementById("img");
    const arrows = document.querySelectorAll(".arrowButton");
    imageConst.classList.remove('slowFadeIn')
    imageConst.classList.add("onLeft");
    arrows.forEach(function(arrow) {
        arrow.classList.remove('fadeIn');
        arrow.classList.add('fadeOut');
    });
    setTimeout(function() {
        window.location.href = url;
}, 500);
}

function rightArrow(url) {
    
    const imageConst = document.getElementById("img");
    const arrows = document.querySelectorAll(".arrowButton");
    imageConst.classList.remove('slowFadeIn')
    imageConst.classList.add("onRight");
    arrows.forEach(function(arrow) {
        arrow.classList.remove('fadeIn');
        arrow.classList.add('fadeOut');
    });
    setTimeout(function() {
        window.location.href = url;
}, 500);
    
}