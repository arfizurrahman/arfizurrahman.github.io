(function ($) {
    

    $(document).ready(function () {


        /*--------------------------------------------------*/
        /*  Mobile Menu - mmenu.js
        /*--------------------------------------------------*/
        $(function () {
            function mmenuInit() {
                var wi = $(window).width();
                if (wi <= '1099') {

                    $(".mmenu-init").remove();
                    $("#navigation").clone().addClass("mmenu-init").insertBefore("#navigation").removeAttr('id').removeClass('style-1 style-2')
                        .find('ul, div').removeClass('style-1 style-2 mega-menu mega-menu-content mega-menu-section').removeAttr('id');
                    $(".mmenu-init").find("ul").addClass("mm-listview");
                    $(".mmenu-init").find(".mobile-styles .mm-listview").unwrap();


                    $(".mmenu-init").mmenu({
                        "counters": true
                    }, {
                        // configuration
                        offCanvas: {
                            pageNodetype: "#wrapper"
                        }
                    });

                    var mmenuAPI = $(".mmenu-init").data("mmenu");
                    var $icon = $(".mmenu-trigger .hamburger");

                    $(".mmenu-trigger").on('click', function () {
                        mmenuAPI.open();
                    });

                }
                $(".mm-next").addClass("mm-fullsubopen");
            }
            mmenuInit();
            $(window).resize(function () {
                mmenuInit();
            });
        });

        // Animated typing text

        $(".animated-text").typed({
            strings: [
            "dishwashers and kitchen assistants for canteen, restaurants etc.",
            "cleaning for companies and individuals.",
            "drivers for transport or delivery tasks."
        ],
            typeSpeed: 60,
            loop: true,
        });
        
        
        
        
        
        /*--------------------------------------------------*/
        /*  Sticky Header
        /*--------------------------------------------------*/
        function stickyHeader() {
            if ($(window).width() > '1099') {

                // CSS adjustment
                $("#header-container").css({
                    position: 'fixed',
                });

                var headerOffset = $("#header-container").height();

                if ($(window).scrollTop() >= headerOffset) {
                    $("#header-container").addClass('cloned');
                    $(".wrapper-with-transparent-header #header-container").addClass('cloned').removeClass("transparent-header unsticky");
                } else {
                    $("#header-container").removeClass("cloned");
                    $(".wrapper-with-transparent-header #header-container").addClass('transparent-header unsticky').removeClass("cloned");
                }

                // Sticky Logo
                var transparentLogo = $('#header-container #logo img').attr('data-transparent-logo');
                var stickyLogo = $('#header-container #logo img').attr('data-sticky-logo');

                if ($('.wrapper-with-transparent-header #header-container').hasClass('cloned')) {
                    $("#header-container.cloned #logo img").attr("src", stickyLogo);
                }

                if ($('.wrapper-with-transparent-header #header-container').hasClass('transparent-header')) {
                    $("#header-container #logo img").attr("src", transparentLogo);
                }

                $(window).on('load resize', function () {
                    var headerOffset = $("#header-container").height();
                    $("#wrapper").css({
                        'padding-top': headerOffset
                    });
                });
            }
        }
        // Sticky Header Init
        stickyHeader();


        
        /*----------------------------------------------------*/
        /*  Back to Top
        /*----------------------------------------------------*/

        // Button
        function backToTop() {
            $('body').append('<div id="backtotop"><a href="#"><i class="far fa-angle-up"></a></div>');
        }
        backToTop();

        /*--------------------------------------------------*/
        /*  Tippy JS 
        /*--------------------------------------------------*/
        /* global tippy */
        tippy('[data-tippy-placement]', {
            delay: 100,
            arrow: true,
            arrowType: 'sharp',
            size: 'regular',
            duration: 200,

            // 'shift-toward', 'fade', 'scale', 'perspective'
            animation: 'shift-away',

            animateFill: true,
            theme: 'dark',

            // How far the tooltip is from its reference element in pixels 
            distance: 10,

        });

        // Showing Button
        var pxShow = 600; // height on which the button will show
        var scrollSpeed = 500; // how slow / fast you want the button to scroll to top.

        $(window).scroll(function () {
            if ($(window).scrollTop() >= pxShow) {
                $("#backtotop").addClass('visible');
            } else {
                $("#backtotop").removeClass('visible');
            }
        });

        $('#backtotop a').on('click', function () {
            $('html, body').animate({
                scrollTop: 0
            }, scrollSpeed);
            return false;
        });


    });
     /* ======================================
                Google Map
====================================== */
        $(window).on("load", function () {
            //These are variables for google map
            var addressString = 'Sayed Shah Road, Chittagong, Bangladesh';
            var unikaLatlng = {
                lat: 55.710694,
                lng: 12.469104
            };

            // 1. Render Google Map
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 14,
                center: unikaLatlng
            });

            // 2. Add marker
            var marker = new google.maps.Marker({
                position: unikaLatlng,
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
            google.maps.event.addDomListener(window, 'resize', function () {
                var center = map.getCenter();
                google.maps.event.trigger(map, 'resize');
                map.setCenter(center);
            });
        });
})(this.jQuery);