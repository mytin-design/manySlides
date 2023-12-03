let slideIndex = [1,1];
/* Class the members of each slideshow group with different CSS classes */

let slideId = ["mySlides1", "mySlides2"];

showSlides(1,0);
showSlides(1,1);



//Next/previous controls

function plusSlide(n, no) {
    showSlides(slideIndex[no] += n, no);
}



function showSlides(n, no) {


    let slides = document.getElementsByClassName(slideId[no]);


    if(n > slides.length) {
        slideIndex[no] = 1
    }


    if(n < 1) {
        slideIndex[no] = slides.length;
    }


    let m;
    
    for(m = 0; m < slides.length;m++) {
        slides[m].style.display = "none";
    }

    slides[slideIndex[no]-1].style.display = "block";
}