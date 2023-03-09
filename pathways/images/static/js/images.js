// ! global var to determine if img is focused
let focused = false;

window.addEventListener('load', function() {
    // ! fades in images on load
    const imageConst = document.getElementById('img');
    imageConst.classList.add('slowFadeIn');
    
    // ! fades in arrows on load
    const arrows = document.querySelectorAll(".arrowButton");
    arrows.forEach(function(arrow) {
        arrow.classList.add('fadeIn');
    });
});


function upArrow(url) {
    // * slides image off-screen upwards
    if (focused === true){return} // ! returns if focused

    // ! updates image
    const imageConst = document.getElementById("img");
    imageConst.classList.remove('unFocus');
    imageConst.classList.remove('slowFadeIn')
    imageConst.classList.add("onUp");

    // ! updates arrows
    const arrows = document.querySelectorAll(".arrowButton");
    arrows.forEach(function(arrow) {
        arrow.classList.remove('fadeIn');
        arrow.classList.add('fadeOut');
    });

    // ! navagating to the new page
    setTimeout(function() {
        window.location.href = url;
}, 500);
}

function downArrow(url) {
    // * slides image off-screen upwards
    if (focused === true){return} // ! returns if focused

    // ! updates image
    const imageConst = document.getElementById("img");
    imageConst.classList.remove('unFocus');
    imageConst.classList.remove('slowFadeIn')
    imageConst.classList.add("onDown");

    // ! updates arrows
    const arrows = document.querySelectorAll(".arrowButton");
    arrows.forEach(function(arrow) {
        arrow.classList.remove('fadeIn');
        arrow.classList.add('fadeOut');
    });

    // ! navagating to the new page
    setTimeout(function() {
        window.location.href = url;
}, 500);
}

function leftArrow(url) {
    // ! slides image off-screen upwards
    if (focused === true){return} // ! returns if focused

    // ! updates image
    const imageConst = document.getElementById("img");
    imageConst.classList.remove('unFocus');
    imageConst.classList.remove('slowFadeIn')
    imageConst.classList.add("onLeft");
    
    // ! updates arrows
    const arrows = document.querySelectorAll(".arrowButton");
    arrows.forEach(function(arrow) {
        arrow.classList.remove('fadeIn');
        arrow.classList.add('fadeOut');
    });

    // ! navagating to the new page
    setTimeout(function() {
        window.location.href = url;
}, 500);
}

function rightArrow(url) {
    // ! slides image off-screen upwards
    if (focused === true){return} // ! returns if focused

    // ! updates image
    const imageConst = document.getElementById("img");
    imageConst.classList.remove('unFocus');
    imageConst.classList.remove('slowFadeIn')
    imageConst.classList.add("onRight");
    
    // ! updates arrows
    const arrows = document.querySelectorAll(".arrowButton");
    arrows.forEach(function(arrow) {
        arrow.classList.remove('fadeIn');
        arrow.classList.add('fadeOut');
    });

    // ! navagating to the new page
    setTimeout(function() {
        window.location.href = url;
}, 500);
}

function focus() {

    //! identifying constants
    const imageConst = document.getElementById("img");
    const captionConst = document.getElementById("caption");
    const arrows = document.querySelectorAll(".arrowButton");

    //! focus
    if (focused==false){
    //! updating img
    imageConst.classList.remove('unFocus'); 
    imageConst.classList.add('focus');
    //! updating caption
    captionConst.classList.remove('fadeOut');
    captionConst.classList.add('fadeIn');
    //! updating arrows 
    arrows.forEach(function(arrow) {
        arrow.classList.remove('fadeIn');
        arrow.classList.add('fadeOut');
        
    }); 
    //! updating global var
    focused = true;
    }

    //! unfocus
    else {
    //! updating img
    imageConst.classList.remove('focus');
    imageConst.classList.add('unFocus');
    //! updating captions
    captionConst.classList.remove('fadeIn');
    captionConst.classList.add('fadeOut'); 
    //! updating arrows
    arrows.forEach(function(arrow) {
        arrow.classList.remove('fadeOut');
        arrow.classList.add('fadeIn');
    }); 
    //! updating global var
    focused = false;
    }
}

