
document.addEventListener("DOMContentLoaded", function (){
    let toggler = document.querySelector('.ico');
    let navlinks = document.querySelector('.nav-links');
    let navbutton = document.querySelector('.show')



console.log(toggler);
console.log(navlinks);
console.log(navbutton);

toggler.addEventListener('click',listDisplay);

function listDisplay(){
    navlinks.classList.toggle('active');
    navbutton.classList.toggle('active');
    console.log("menu toggled");
    console.log("buttonshow");
}


    let slider = document.querySelector(".health-layout-area");
    let leftArrow = document.querySelector(".heading-part .fa-arrow-left-long");
    let rightArrow = document.querySelector(".heading-part .fa-arrow-right-long");

    if (!slider || !leftArrow || !rightArrow) {
        console.error("One or more elements not found!");
        return;
    }

    let cardWidth = document.querySelector(".health-card").offsetWidth + 20; // Width of one card + margin

    // Move Right
    rightArrow.addEventListener("click", function () {
        slider.scrollBy({
            left: cardWidth,
            behavior: "smooth"
        });
    });

    // Move Left
    leftArrow.addEventListener("click", function () {
        slider.scrollBy({
            left: -cardWidth,
            behavior: "smooth"
        });
    });

});

