$(document).ready(function(){
    $('#nav-icon1').click(function(){
        $(this).toggleClass('open');
    });

    $('#nav-icon1').click(function() {

        if (!$(this).children().hasClass('white')) {
            $(this).children().addClass('white');
            $('#myNav').addClass('open');
        } else {
            $(this).children().removeClass('white');
            $('#myNav').removeClass('open');
        }
    });

    $('#show-more-less').click(function (e) {
        e.preventDefault();
        if ($(this).text() === 'Read more') {
            $(this).text('Read less');
            $('#secondpara').removeClass('hidden-xs').removeClass('hidden-sm');
        } else {
            $(this).text('Read more');
            $('#secondpara').addClass('hidden-xs').addClass('hidden-sm');
        }

    })

    $('#myNav a').click(function() {
        $('#nav-icon1').children().removeClass('white');
        $('#myNav').removeClass('open');
    })

    $('body').scrollspy({target: ".navbar", offset: 50});

    // Add smooth scrolling on all links inside the navbar
    $(".navbar-list li a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }  // End if
    });
});
