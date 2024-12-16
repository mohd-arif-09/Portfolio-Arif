$(document).ready(function(){
    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
    });

    $(window).on('scroll load',function(){
        $("#menu").removeClass('fa-times');
        $('header').removeClass('toggle');

        
    });

    $('a[href*="#"]').on('click', function (e) {
        const target = $(this).attr('href');
        if (target === '#' || !$(target).length) return; // Skip if the href is '#' or invalid
        
        e.preventDefault();
        $('html, body').animate(
            {
                scrollTop: $(target).offset().top,
            },
            500,
            'linear'
        );
    });

});

document.querySelectorAll('header .navbar ul li a').forEach(link => {
    link.addEventListener('touchstart', () => {
        link.classList.add('hover-effect');
    });
    link.addEventListener('touchend', () => {
        link.classList.remove('hover-effect');
    });
});



const images = ["images/tcs.jpg", "images/unified.jpg"]; // Add your image paths here
        let currentImageIndex = 0;

        function updateImage() {
            const sliderImage = document.getElementById('sliderImage');
            sliderImage.src = images[currentImageIndex];
        }

        function nextImage() {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            updateImage();
        }

        function prevImage() {
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
            updateImage();
        }
