$(document).ready(function(){
    $('#nav-icon1').click(function(){
        $(this).toggleClass('open');
    });

    function openNav() {
        document.getElementById("myNav").style.width = "100%";
    }

    /* Close when someone clicks on the "x" symbol inside the overlay */
    function closeNav() {
        document.getElementById("myNav").style.width = "0%";
    }

    $('#nav-icon1').click(function() {

        if (!$(this).children().hasClass('white')) {
            $(this).children().addClass('white');
            $('#myNav').addClass('open');
        } else {
            $(this).children().removeClass('white');
            $('#myNav').removeClass('open');
        }
    });

    $('#myNav a').click(function() {
        $('#nav-icon1').children().removeClass('white');
        $('#myNav').removeClass('open');
    })
});
