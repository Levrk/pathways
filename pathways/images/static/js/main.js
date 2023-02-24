
let focusNext = true;

window.addEventListener('load', function() {
    const imageConst = document.getElementById('img');
    const arrows = document.querySelectorAll(".arrowButton");
    arrows.forEach(function(arrow) {
        arrow.classList.add('fadeIn');
    });
    imageConst.classList.add('slowFadeIn');
});



function upArrow(url) {
    if (focusNext === false){return}
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
    if (focusNext === false){return}
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
    if (focusNext === false){return}
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
    if (focusNext === false){return}
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

function handleSpace( ) {

    if (focusNext) {
        focus();
    } else {
        unFocus();
    }
      focusNext= !focusNext; // toggle the boolean flag
    }



function focus() {
    
    const imageConst = document.getElementById("img");
    const captionConst = document.getElementById("caption");
    const arrows = document.querySelectorAll(".arrowButton");
    captionConst.classList.remove('fadeOut')
    captionConst.classList.add('slowFadeIn')
    arrows.forEach(function(arrow) {
        arrow.classList.remove('fadeIn');
        arrow.classList.remove('reEscape');
        arrow.classList.add('escape');
        
    }); 
}

function unFocus() {
    const imageConst = document.getElementById("img");
    const arrows = document.querySelectorAll(".arrowButton");
    const captionConst = document.getElementById("caption");
    captionConst.classList.remove('slowFadeIn')
    captionConst.classList.add('fadeOut')
    arrows.forEach(function(arrow) {
        arrow.classList.remove('escape');
        arrow.classList.add('reEscape');
    }); 
    setTimeout(function() {
        arrows.forEach(function(arrow) {
            arrow.classList.remove('reEscape');
        }); 
}, 500);
}