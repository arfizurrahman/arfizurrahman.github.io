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
        jQuery.validator.addMethod("phone", function (value, element) {
            // allow any non-whitespace characters as the host part
            return this.optional(element) || value.length > 9 && /(^(\+?[0-9]+)?((\s|\-|\.)[0-9]+)+$)|(^\(\+?[0-9]+\)((\s|\-|\.)[0-9]+)+$)|(^[0-9]+$)/i.test(value);
        }, 'Please enter a valid phone number.');


        $(function () {
            // validate signup form on keyup and submit
            $("#expertRegistrationForm, #hirerRegistrationForm, #loginForm").validate({
                rules: {
                    firstname: "required",
                    lastname: "required",
                    password: {
                        required: true,
                        minlength: 6
                    },
                    confirmpassword: {
                        required: true,
                        minlength: 6,
                        equalTo: "#password"
                    },
                    emaila: {
                        required: true,
                        email: true
                    },
                    confirmemail: {
                        required: true,
                        email: true,
                        equalTo: "#email"
                    }
                },
                messages: {
                    firstname: "Please enter your firstname",
                    lastname: "Please enter your lastname",
                    password: {
                        required: "Please enter password",
                        minlength: "Password too short"
                    },
                    confirmpassword: {
                        required: "Please confirm the password",
                        minlength: "Password too short",
                        equalTo: "Passwords didn't match!"
                    },
                    email: "Please enter a valid email address",
                    confirmemail: {
                        required: "Please confirm email address",
                        email: "Please enter a valid email address",
                        equalTo: "Email addresses didn't match!"
                    }
                }
            });

        });

        /*--------------------------------------------------*/
        /*  Validating expert complete profile form
        /*--------------------------------------------------*/
        $(function () {
            // validate form on keyup and submit
            $("#completeProfileForm").validate({
                rules: {
                    phonenumber: {
                        required: true,
                        phone: true
                    },
                    gender: "required",
                    address: "required",
                    dateOfBirth: "required",
                    country: "required",
                    city: "required",
                    zip: {
                        required: true,
                        number: true
                    },
                    "job[]": {
                        required: true,
                        minlength: 1
                    },
                    experience: "required",
                    cv: {
                        required: true
                    },
                    namOnCard: "required",
                    cardNumber: "required",
                    expirationdate: "required",
                    cvc: "required"

                },
                messages: {
                    phonenumber: {
                        required: "Please enter phone number"
                    },
                    gender: "Please select a gender",
                    address: "Please enter address",
                    dateOfBirth: "Please enter date of birth",
                    country: "Please select a country",
                    city: "Please select a city",
                    zip: {
                        required: "Please enter zip code",
                        number: "Please enter a valid zip code"
                    },
                    "job[]": "You must select a job",
                    experience: "Please select years of experience",
                    cv: {
                        required: "Please upload your CV"
                    },
                    namOnCard: "Please enter the name on card",
                    cardNumber: "Please enter card number",
                    expirationdate: "Please enter expiration date",
                    cvc: "Please enter cvc code",
                },
                errorPlacement: function (error, element) {
                    if (element.attr("name") == "job[]") {
                        error.insertAfter("#check-error-msg");
                    } else {
                        error.insertAfter(element);

                    }
                }
            });


            var form = $("#completeProfileForm");
            form.steps({
                headerTag: "h3",
                bodyTag: "fieldset",
                transitionEffect: "slideLeft",
                labels: {
                    previous: 'Previous',
                    next: 'Next',
                    finish: 'Submit',
                    current: ''
                },
                titleTemplate: '<div class="title"><span class="number">#index#</span>#title#</div>',
                onStepChanging: function (event, currentIndex, newIndex) {
                    form.validate().settings.ignore = ":disabled,:hidden";
                    // console.log(form.steps("getCurrentIndex"));
                    return form.valid();
                },
                onFinishing: function (event, currentIndex) {
                    form.validate().settings.ignore = ":disabled";
                    //console.log(getCurrentIndex);
                    return form.valid();
                },
                onFinished: function (event, currentIndex) {
                    alert('Submited');
                }
                // onInit : function (event, currentIndex) {
                //     event.append('demo');
                // }
            });



        });



        $(function () {

            const profilePicBtn = document.getElementById("profilepic");
            const picUploadBtn = document.getElementById("pic-upload-button");
            const picCustomTxt = document.getElementById("pic-choosen-text");

            picUploadBtn.addEventListener("click", function () {
                profilePicBtn.click();
            });

            profilePicBtn.addEventListener("change", function () {
                if (profilePicBtn.value) {
                    picCustomTxt.innerHTML = profilePicBtn.value.match(
                        /[\/\\]([\w\d\s\.\-\(\)]+)$/
                    )[1];
                } else {
                    picCustomTxt.innerHTML = "No file chosen, yet.";
                }
            });
            
            
            const realFileBtn = document.getElementById("cv");
            const customBtn = document.getElementById("cv-upload-button");
            const customTxt = document.getElementById("nofile-choosen-text");

            customBtn.addEventListener("click", function () {
                realFileBtn.click();
            });

            realFileBtn.addEventListener("change", function () {
                if (realFileBtn.value) {
                    customTxt.innerHTML = realFileBtn.value.match(
                        /[\/\\]([\w\d\s\.\-\(\)]+)$/
                    )[1];
                } else {
                    customTxt.innerHTML = "No file chosen, yet.";
                }
            });

        });

        $(function () {
            $("#dateOfBirth").datepicker({
                changeMonth: true,
                changeYear: true
            });
        });


    });





    /* ======================================
                File Upload
====================================== */


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