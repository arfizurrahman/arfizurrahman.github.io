/* ======================================
                Preloader
====================================== */
$(window).on("load", function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

/* ======================================
                Team
====================================== */
$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 2
            }
        }

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
                Responsive Tabs
====================================== */
$(function () {
    $("#services-tabs").responsiveTabs({
        animation: 'slide'
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

/* ======================================
                Magnifier
====================================== */
$(function () {

    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });

});

/* ======================================
                Testimonials
====================================== */
$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});

/* ======================================
                Counter Up
====================================== */
$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});

/* ======================================
                Clients
====================================== */
$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 2
            },
            // breakpoint from 480 up
            480: {
                items: 3
            },
            // breakpoint from 480 up
            768: {
                items: 6
            }
        }
    });
});
/* ======================================
                Google Map
====================================== */
$(window).on("load", function () {
    //These are variables for google map
    var addressString = 'Sayed Shah Road, Chittagong, Bangladesh';
    var myLatlng = {
        lat: 22.356121,
        lng: 91.847749
    };

    // 1. Render Google Map
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: myLatlng
    });

    // 2. Add marker
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'CLick to see address.'
    });

    // 3. Add Info Window
    var infowindow = new google.maps.InfoWindow({
        content: addressString
    });

    // Show info window on marker click
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });
    
    // 4. Resize Function
    google.maps.event.addDomListener(window, 'resize', function() {
        var center = map.getCenter();
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center);
    });
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
            $("nav").addClass("white-nav-top");

            //set dark logo
            $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");

            //Show Back to top button
            $("#back-to-top").fadeIn();
        } else {
            //hide white nav
            $("nav").removeClass("white-nav-top");

            //remove dark logo
            $(".navbar-brand img").attr("src", "img/logo/logo.png");

            //Hibe Back to top button
            $("#back-to-top").fadeOut();
        }
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
   
    $("#home-heading-1").addClass("animated fadeInDown");
    $("#home-heading-2").addClass("animated fadeInLeft");
    $("#home-text").addClass("animated zoomIn");
    $("#home-btn").addClass("animated zoomIn");
    $("#arrow-down i").addClass("animated fadeInDown infinite");
});