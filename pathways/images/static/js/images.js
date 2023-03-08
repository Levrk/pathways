
let focused = false;

window.addEventListener('load', function() {
    const imageConst = document.getElementById('img');
    const arrows = document.querySelectorAll(".arrowButton");
    arrows.forEach(function(arrow) {
        arrow.classList.add('fadeIn');
    });
    imageConst.classList.add('slowFadeIn');
});



function upArrow(url) {
    if (focused === true){return}
    const imageConst = document.getElementById("img");
    imageConst.classList.remove('unFocus');
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
    if (focused === true){return}
    const imageConst = document.getElementById("img");
    imageConst.classList.remove('unFocus');
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
    if (focused === true){return}
    const imageConst = document.getElementById("img");
    imageConst.classList.remove('unFocus');
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
    if (focused === true){return}
    const imageConst = document.getElementById("img");
    imageConst.classList.remove('unFocus');
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

function focus() {
    const imageConst = document.getElementById("img");
    const captionConst = document.getElementById("caption");
    const arrows = document.querySelectorAll(".arrowButton");

    if (focused==false){
    imageConst.classList.remove('unFocus'); 
    imageConst.classList.add('focus');
    captionConst.classList.remove('fadeOut');
    captionConst.classList.add('fadeIn'); 
    arrows.forEach(function(arrow) {
        arrow.classList.remove('fadeIn');
        arrow.classList.add('fadeOut');
        
    }); 
    focused = true;
    }
    else {
    imageConst.classList.remove('focus');
    imageConst.classList.add('unFocus');
    captionConst.classList.remove('fadeIn');
    captionConst.classList.add('fadeOut'); 
    setTimeout(function() {
        arrows.forEach(function(arrow) {
            arrow.classList.remove('fadeOut');
            arrow.classList.add('fadeIn');
        }); 
}, 500);
focused = false;
    }
}

