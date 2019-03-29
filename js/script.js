/* ======================================
                Preloader
====================================== */
$(window).on("load", function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

/* ======================================
                Navigation
====================================== */
/* Show and hide white navigation */
$(function () {
    //Show and hide nav at page load
    showHideNav();

    $(window).scroll(function () {
        //Show and hide nav at window's scroll
        showHideNav();
    });

    function showHideNav() {
        if ($(window).scrollTop() > 50) {
            //show white nav
            $("nav").addClass("small-nav-top");

            //set dark logo
            $(".navbar-brand img").attr("src", "images/logo.png");

            //Show Back to top button
            $("#back-to-top").fadeIn();
        } else {
            //hide white nav
            $("nav").removeClass("small-nav-top");

            //remove dark logo
            $(".navbar-brand img").attr("src", "images/logo.png");

            //Hibe Back to top button
            $("#back-to-top").fadeOut();
        }
    }
});

$(function () {
        var windowWidth= window.innerWidth;
    if (windowWidth < 768){
        $('.navbar-brand').parent('#nav-container').removeClass('container');
        $('.navbar-brand').parent('#nav-container').addClass('container-fluid');
    }else if(windowWidth > 768){
        $('.navbar-brand').parent('#nav-container').removeClass('container-fluid');
        $('.navbar-brand').parent('#nav-container').addClass('container');
    }
    
   
});

$(window).resize(function(){
    var windowWidth= window.innerWidth;
    if (windowWidth < 768){
        $('.navbar-brand').parent('#nav-container').removeClass('container');
        $('.navbar-brand').parent('#nav-container').addClass('container-fluid');
    }else if(windowWidth > 768){
        $('.navbar-brand').parent('#nav-container').removeClass('container-fluid');
        $('.navbar-brand').parent('#nav-container').addClass('container');
    }
});
/* Smooth Scrolling */
$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();

        //get services id like #about, #services, #work, #team and etc.
        var section_id = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, "easeInOutExpo");
    });
});


/* ======================================
                Progress Bars
====================================== */
$(function () {

    $('#progress-elemnts').waypoint(function () {
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 2000);

        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });

});

/* ======================================
                Portfolio
====================================== */
$(window).on("load", function () {

    //Initialize isotope
    $('#isotope-container').isotope({});
    // filter items on button click
    $('#isotope-filters').on('click', 'button', function () {
        //get filter value
        var filterValue = $(this).attr('data-filter');

        //filter portfolio items
        $('#isotope-container').isotope({
            filter: filterValue
        });

        $('#isotope-filters').find('.active').removeClass('active');
        //active button
        $(this).addClass('active');
    });
});

/****** Quick view *********/
$(function(){
    $('.portfolio-item h3').on('click',function(){
        $(".slider-wrapper").addClass("animated slideInDown");
        $(".project-info").addClass("animated zoomIn");
    });
});
/* ======================================
                Magnifier
====================================== */
/*$(function () {

    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });

});

/* ======================================
                Mobile Menu
====================================== */
$(function () {

    /* show mobile nav */
    $("#mobile-nav-open-btn").click(function() {
        $("#mobile-nav").css("height", "100%");
    });
    
    /* show mobile nav */
    $("#mobile-nav-close-btn, #mobile-nav a").click(function() {
        $("#mobile-nav").css("height", "0%");
    });
    
});
/* ======================================
                Animations
====================================== */
//animation on scroll
$(function () {

    new WOW().init();
    
});

/* Home animation on page load */
$(window).on("load", function () {
   
    $("#home-heading").addClass("animated fadeInDown");
    $(".home-text").addClass("animated zoomIn");
    $(".home-btn").addClass("animated zoomIn");
});