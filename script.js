window.onload = function() {
    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  // Hide all slides
        }

        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        // Ensure the slide index is within range
        if (slides[slideIndex-1]) {
            slides[slideIndex-1].style.display = "block";  // Show the current slide
            dots[slideIndex-1].className += " active";
        }
    }

    // Make these functions accessible globally
    window.plusSlides = plusSlides;
    window.currentSlide = currentSlide;
};

//contact
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting
    alert("This is a dummy website, so the form will not be submitted.");
});


function openForm(){
    document.getElementById("myForm").style.display = "block";
}

function closeForm(){
    document.getElementById("myForm").style.display = "none";
}

