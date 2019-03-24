(function ($) {

    /* ======================================
                    Preloader
    ====================================== */
    $(window).on("load", function () {
        $('#sk-three-bounce').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
    });


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


        /*----------------------------------------------------*/
        /* Dashboard Scripts
        /*----------------------------------------------------*/

        // Dashboard Nav Submenus
        $('.dashboard-nav ul li a').on('click', function (e) {
            if ($(this).closest("li").children("ul").length) {
                if ($(this).closest("li").is(".active-submenu")) {
                    $('.dashboard-nav ul li').removeClass('active-submenu');
                } else {
                    $('.dashboard-nav ul li').removeClass('active-submenu');
                    $(this).parent('li').addClass('active-submenu');
                }
                e.preventDefault();
            }
        });


        // Responsive Dashbaord Nav Trigger
        $('.dashboard-responsive-nav-trigger').on('click', function (e) {
            e.preventDefault();
            $(this).toggleClass('active');

            var dashboardNavContainer = $('body').find(".dashboard-nav");

            if ($(this).hasClass('active')) {
                $(dashboardNavContainer).addClass('active');
            } else {
                $(dashboardNavContainer).removeClass('active');
            }

            $('.dashboard-responsive-nav-trigger .hamburger').toggleClass('is-active');

        });


        /*--------------------------------------------------*/
        /*  Animated Text 
        /*--------------------------------------------------*/
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
            $('body').append('<div id="backtotop"><a href="#"></a></div>');
        }
        backToTop();

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


        /*--------------------------------------------------*/
        /*  Ripple Effect
        /*--------------------------------------------------*/
        $('.ripple-effect, .ripple-effect-dark').on('click', function (e) {
            var rippleDiv = $('<span class="ripple-overlay">'),
                rippleOffset = $(this).offset(),
                rippleY = e.pageY - rippleOffset.top,
                rippleX = e.pageX - rippleOffset.left;

            rippleDiv.css({
                top: rippleY - (rippleDiv.height() / 2),
                left: rippleX - (rippleDiv.width() / 2),
                // background: $(this).data("ripple-color");
            }).appendTo($(this));

            window.setTimeout(function () {
                rippleDiv.remove();
            }, 800);
        });


        /*--------------------------------------------------*/
        /*  Interactive Effects
        /*--------------------------------------------------*/
        $(".switch, .radio").each(function () {
            var intElem = $(this);
            intElem.on('click', function () {
                intElem.addClass('interactive-effect');
                setTimeout(function () {
                    intElem.removeClass('interactive-effect');
                }, 400);
            });
        });


        /*--------------------------------------------------*/
        /*  Sliding Button Icon
        /*--------------------------------------------------*/
        $(window).on('load', function () {
            $(".button.button-sliding-icon").not(".task-listing .button.button-sliding-icon").each(function () {
                var buttonWidth = $(this).outerWidth() + 30;
                $(this).css('width', buttonWidth);
            });
        });


        /*--------------------------------------------------*/
        /*  Sliding Button Icon
        /*--------------------------------------------------*/
        $('.bookmark-icon').on('click', function (e) {
            e.preventDefault();
            $(this).toggleClass('bookmarked');
        });

        $('.bookmark-button').on('click', function (e) {
            e.preventDefault();
            $(this).toggleClass('bookmarked');
        });


        /*----------------------------------------------------*/
        /*  Notifications Boxes
        /*----------------------------------------------------*/
        $("a.close").removeAttr("href").on('click', function () {
            function slideFade(elem) {
                var fadeOut = {
                    opacity: 0,
                    transition: 'opacity 0.5s'
                };
                elem.css(fadeOut).slideUp();
            }
            slideFade($(this).parent());
        });

        /*--------------------------------------------------*/
        /*  Notification Dropdowns
        /*--------------------------------------------------*/
        $(".header-notifications").each(function () {
            var userMenu = $(this);
            var userMenuTrigger = $(this).find('.header-notifications-trigger a');

            $(userMenuTrigger).on('click', function (event) {
                event.preventDefault();

                if ($(this).closest(".header-notifications").is(".active")) {
                    close_user_dropdown();
                } else {
                    close_user_dropdown();
                    userMenu.addClass('active');
                }
            });
        });

        // Closing function
        function close_user_dropdown() {
            $('.header-notifications').removeClass("active");
        }

        // Closes notification dropdown on click outside the conatainer
        var mouse_is_inside = false;

        $(".header-notifications").on("mouseenter", function () {
            mouse_is_inside = true;
        });
        $(".header-notifications").on("mouseleave", function () {
            mouse_is_inside = false;
        });

        $("body").mouseup(function () {
            if (!mouse_is_inside) close_user_dropdown();
        });

        // Close with ESC
        $(document).keyup(function (e) {
            if (e.keyCode == 27) {
                close_user_dropdown();
            }
        });


        /*--------------------------------------------------*/
        /*  User Status Switch
        /*--------------------------------------------------*/
        if ($('.status-switch label.user-invisible').hasClass('current-status')) {
            $('.status-indicator').addClass('right');
        }

        $('.status-switch label.user-invisible').on('click', function () {
            $('.status-indicator').addClass('right');
            $('.status-switch label').removeClass('current-status');
            $('.user-invisible').addClass('current-status');
        });

        $('.status-switch label.user-online').on('click', function () {
            $('.status-indicator').removeClass('right');
            $('.status-switch label').removeClass('current-status');
            $('.user-online').addClass('current-status');
        });


        /*--------------------------------------------------*/
        /*  Full Screen Page Scripts
        /*--------------------------------------------------*/

        // Wrapper Height (window height - header height)
        function wrapperHeight() {
            var headerHeight = $("#header-container").outerHeight();
            var windowHeight = $(window).outerHeight() - headerHeight;
            $('.full-page-content-container, .dashboard-content-container, .dashboard-sidebar-inner, .dashboard-container, .full-page-container').css({
                height: windowHeight
            });
            $('.dashboard-content-inner').css({
                'min-height': windowHeight
            });
        }

        // Enabling Scrollbar
        function fullPageScrollbar() {
            $(".full-page-sidebar-inner, .dashboard-sidebar-inner").each(function () {

                var headerHeight = $("#header-container").outerHeight();
                var windowHeight = $(window).outerHeight() - headerHeight;
                var sidebarContainerHeight = $(this).find(".sidebar-container, .dashboard-nav-container").outerHeight();

                // Enables scrollbar if sidebar is higher than wrapper
                if (sidebarContainerHeight > windowHeight) {
                    $(this).css({
                        height: windowHeight
                    });

                } else {
                    $(this).find('.simplebar-track').hide();
                }
            });
        }

        // Init
        $(window).on('load resize', function () {
            wrapperHeight();
            fullPageScrollbar();
        });

        // Sliding Sidebar 
        $('.enable-filters-button').on('click', function () {
            $('.full-page-sidebar').toggleClass("enabled-sidebar");
            $(this).toggleClass("active");
            $('.filter-button-tooltip').removeClass('tooltip-visible');
        });

        /*  Enable Filters Button Tooltip */
        $(window).on('load', function () {
            $('.filter-button-tooltip').css({
                left: $('.enable-filters-button').outerWidth() + 48
            })
                .addClass('tooltip-visible');
        });






        // Small Footer Adjustment
        $(window).on('load resize', function () {
            var smallFooterHeight = $('.small-footer').outerHeight();
            $('.dashboard-footer-spacer').css({
                'padding-top': smallFooterHeight + 45
            });
        });

        /*--------------------------------------------------*/
        /*  Star Rating
        /*--------------------------------------------------*/
        function starRating(ratingElem) {

            $(ratingElem).each(function () {

                var dataRating = $(this).attr('data-rating');

                // Rating Stars Output
                function starsOutput(firstStar, secondStar, thirdStar, fourthStar, fifthStar) {
                    return ('' +
                        '<span class="' + firstStar + '"></span>' +
                        '<span class="' + secondStar + '"></span>' +
                        '<span class="' + thirdStar + '"></span>' +
                        '<span class="' + fourthStar + '"></span>' +
                        '<span class="' + fifthStar + '"></span>');
                }

                var fiveStars = starsOutput('star', 'star', 'star', 'star', 'star');

                var fourHalfStars = starsOutput('star', 'star', 'star', 'star', 'star half');
                var fourStars = starsOutput('star', 'star', 'star', 'star', 'star empty');

                var threeHalfStars = starsOutput('star', 'star', 'star', 'star half', 'star empty');
                var threeStars = starsOutput('star', 'star', 'star', 'star empty', 'star empty');

                var twoHalfStars = starsOutput('star', 'star', 'star half', 'star empty', 'star empty');
                var twoStars = starsOutput('star', 'star', 'star empty', 'star empty', 'star empty');

                var oneHalfStar = starsOutput('star', 'star half', 'star empty', 'star empty', 'star empty');
                var oneStar = starsOutput('star', 'star empty', 'star empty', 'star empty', 'star empty');

                // Rules
                if (dataRating >= 4.75) {
                    $(this).append(fiveStars);
                } else if (dataRating >= 4.25) {
                    $(this).append(fourHalfStars);
                } else if (dataRating >= 3.75) {
                    $(this).append(fourStars);
                } else if (dataRating >= 3.25) {
                    $(this).append(threeHalfStars);
                } else if (dataRating >= 2.75) {
                    $(this).append(threeStars);
                } else if (dataRating >= 2.25) {
                    $(this).append(twoHalfStars);
                } else if (dataRating >= 1.75) {
                    $(this).append(twoStars);
                } else if (dataRating >= 1.25) {
                    $(this).append(oneHalfStar);
                } else if (dataRating < 1.25) {
                    $(this).append(oneStar);
                }

            });

        }
        starRating('.star-rating');
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


        function avatarSwitcher() {
            var readURL = function (input) {
                if (input.files && input.files[0]) {
                    var reader = new FileReader();

                    reader.onload = function (e) {
                        $('.profile-pic').attr('src', e.target.result);
                    };

                    reader.readAsDataURL(input.files[0]);
                }
            };

            $(".file-upload").on('change', function () {
                readURL(this);
            });

            $(".upload-button").on('click', function () {
                $(".file-upload").click();
            });
        }
        avatarSwitcher();


        jQuery.validator.addMethod("phone", function (value, element) {
            // allow any non-whitespace characters as the host part
            return this.optional(element) || /(^((\(?\+45\)?)?)(\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2})$)/i.test(value);
        }, 'Please enter a valid phone number.');


        $(function () {
            // validate signup form on keyup and submit
            $("#expertRegistrationForm, #hirerRegistrationForm").validate({
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
                    email: {
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
                    email: {
                        required: "Please enter email address",
                        email: "Please enter a valid email address"
                    },
                    confirmemail: {
                        required: "Please confirm email address",
                        email: "Please enter a valid email address",
                        equalTo: "Email addresses didn't match!"
                    }
                }
            });

        });

        $(function () {
            // validate signup form on keyup and submit
            $("#loginForm").validate({
                rules: {
                    accountTypeRadio: {
                        required: true
                    },
                    password: {
                        required: true
                    },
                    email: {
                        required: true,
                        email: true
                    }
                },
                messages: {

                    password: {
                        required: "Please enter password"
                    },

                    email: {
                        required: "Please enter email address",
                        email: "Please enter a valid email address"
                    },

                },
                errorPlacement: function (error, element) {
                    if (element.attr("name") == "email") {
                        error.insertAfter("#loginEmailErrorMsg");
                    } else if (element.attr("name") == "password") {
                        error.insertAfter("#loginPassErrorMsg");
                    } else {
                        error.insertAfter(element);

                    }
                }
            });

        });

        /*--------------------------------------------------*/
        /*  Validating expert complete profile form
        /*--------------------------------------------------*/
        /* $(function () {
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
*/
        $(function () {
            var form = $("#completeProfileForm").show();

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
                    // Allways allow previous action even if the current form is not valid!
                    if (currentIndex > newIndex) {
                        return true;
                    }

                    // Needed in some cases if the user went back (clean up)
                    if (currentIndex < newIndex) {
                        // To remove error styles
                        form.find(".body:eq(" + newIndex + ") label.error").remove();
                        form.find(".body:eq(" + newIndex + ") .error").removeClass("error");
                    }
                    form.validate().settings.ignore = ":disabled,:hidden";
                    return form.valid();
                },
                onFinishing: function (event, currentIndex) {
                    form.validate().settings.ignore = ":disabled";
                    return form.valid();
                },
                onFinished: function (event, currentIndex) {
                    alert("Submitted!");
                }
            }).validate({
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
        });


        $(function () {
            var form = $("#completeHirerProfileForm").show();

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
                    // Allways allow previous action even if the current form is not valid!
                    if (currentIndex > newIndex) {
                        return true;
                    }

                    // Needed in some cases if the user went back (clean up)
                    if (currentIndex < newIndex) {
                        // To remove error styles
                        form.find(".body:eq(" + newIndex + ") label.error").remove();
                        form.find(".body:eq(" + newIndex + ") .error").removeClass("error");
                    }
                    form.validate().settings.ignore = ":disabled,:hidden";
                    return form.valid();
                },

                onFinishing: function (event, currentIndex) {
                    form.validate().settings.ignore = ":disabled";
                    return form.valid();
                },
                onFinished: function (event, currentIndex) {
                    alert("Submitted!");
                }
            }).validate({
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
        });




        $(function () {

            // var readURL = function (input) {
            //     if (input.files && input.files[0]) {
            //         var reader = new FileReader();

            //         reader.onload = function (e) {
            //             $('.profile-pic').attr('src', e.target.result);
            //         };

            //         reader.readAsDataURL(input.files[0]);
            //     }
            // };

            // $("#image-upload").on('change', function () {
            //     readURL(this);
            // });

            // $(".image-file-upload").on('click', function () {
            //     $("#image-upload").click();
            // });


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


            $image_crop = $('#image_demo').croppie({
                enableExif: true,
                viewport: {
                    width: 200,
                    height: 200,
                    type: 'square' //circle
                },
                boundary: {
                    width: 300,
                    height: 300
                }
            });


            $('#image-upload').on('change', function () {

                var reader = new FileReader();
                reader.onload = function (event) {
                    $image_crop.croppie('bind', {
                        url: event.target.result
                    }).then(function () {
                        console.log('jQuery bind complete');
                    });
                }
                reader.readAsDataURL(this.files[0]);
                $('#uploadimageModal').modal('show');
            });

            $(".image-file-upload").on('click', function () {
                alert("sadsd");
                $("#image-upload").click();
            });

        });

        $(function () {
            $("#dateOfBirth").datepicker({
                changeMonth: true,
                changeYear: true
            });
        });


        /*----------------------------------------------------*/
        /*  Inline CSS replacement for backgrounds
        /*----------------------------------------------------*/
        function inlineBG() {

            // Common Inline CSS
            $(".single-page-header, .intro-banner").each(function () {
                var attrImageBG = $(this).attr('data-background-image');

                if (attrImageBG !== undefined) {
                    $(this).append('<div class="background-image-container"></div>');
                    $('.background-image-container').css('background-image', 'url(' + attrImageBG + ')');
                }
            });

        }
        inlineBG();


        /*----------------------------------------------------*/
        /*  Tabs
        /*----------------------------------------------------*/
        var $tabsNav = $('.popup-tabs-nav'),
            $tabsNavLis = $tabsNav.children('li');

        $tabsNav.each(function () {
            var $this = $(this);

            $this.next().children('.popup-tab-content').stop(true, true).hide().first().show();
            $this.children('li').first().addClass('active').stop(true, true).show();
        });

        $tabsNavLis.on('click', function (e) {
            var $this = $(this);

            $this.siblings().removeClass('active').end().addClass('active');

            $this.parent().next().children('.popup-tab-content').stop(true, true).hide()
                .siblings($this.find('a').attr('href')).fadeIn();

            e.preventDefault();
        });

        var hash = window.location.hash;
        var anchor = $('.tabs-nav a[href="' + hash + '"]');
        if (anchor.length === 0) {
            $(".popup-tabs-nav li:first").addClass("active").show(); //Activate first tab
            $(".popup-tab-content:first").show(); //Show first tab content
        } else {
            anchor.parent('li').click();
        }

        // Link to Register Tab
        $('.register-tab').on('click', function (event) {
            event.preventDefault();
            $(".popup-tab-content").hide();
            $("#register.popup-tab-content").show();
            $("body").find('.popup-tabs-nav a[href="#register"]').parent("li").click();
        });

        // Disable tabs if there's only one tab
        $('.popup-tabs-nav').each(function () {
            var listCount = $(this).find("li").length;
            if (listCount < 2) {
                $(this).css({
                    'pointer-events': 'none'
                });
            }
        });


        /*----------------------------------------------------*/
        /*  Custom Upload Button
        /*----------------------------------------------------*/

        var uploadButton = {
            $button: $('.uploadButton-input'),
            $nameField: $('.uploadButton-file-name')
        };

        uploadButton.$button.on('change', function () {
            _populateFileField($(this));
        });

        function _populateFileField($button) {
            var selectedFile = [];
            for (var i = 0; i < $button.get(0).files.length; ++i) {
                selectedFile.push($button.get(0).files[i].name + '<br>');
            }
            uploadButton.$nameField.html(selectedFile);
        }


        /*----------------------------------------------------*/
        /*  Magnific Popup
        /*----------------------------------------------------*/
        $('.mfp-gallery-container').each(function () { // the containers for all your galleries

            $(this).magnificPopup({
                type: 'image',
                delegate: 'a.mfp-gallery',

                fixedContentPos: true,
                fixedBgPos: true,

                overflowY: 'auto',

                closeBtnInside: false,
                preloader: true,

                removalDelay: 0,
                mainClass: 'mfp-fade',

                gallery: {
                    enabled: true,
                    tCounter: ''
                }
            });
        });

        $('.popup-with-zoom-anim').magnificPopup({
            type: 'inline',

            fixedContentPos: false,
            fixedBgPos: true,

            overflowY: 'auto',

            closeBtnInside: true,
            preloader: false,

            midClick: true,
            removalDelay: 300,
            mainClass: 'my-mfp-zoom-in'
        });

        $('.mfp-image').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            mainClass: 'mfp-fade',
            image: {
                verticalFit: true
            }
        });

        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,

            fixedContentPos: false
        });

        /* ======================================
            Enable or Disable Settings button
        ====================================== */


       
        $('#profile-edit').on('click', function () {
            $('#address, #country, #dateOfBirth, #city, #zip, #selfIntroduction').removeAttr('disabled');
            $('#profile-settings-btn').css('display', 'block');

        });

        $('#account-edit').on('click', function () {
            $('#firstname, #lastname, #phone, #email').removeAttr('disabled');
            $('#account-settings-btn').css('display', 'block');

        });

        $('#pass-edit').on('click', function () {
            $('#currentPass, #newPass, #repeateNewPass').removeAttr('disabled');
            $('#pass-settings-btn').css('display', 'block');

        });

        $('#skill-edit').on('click', function () {
            $('.form-check-input, #upload,#experience, .remove-attachment').removeAttr('disabled');
            $('#skill-settings-btn').css('display', 'block');

        });

        $('#payment-edit').on('click', function () {
            $('.form-control').removeAttr('disabled');
            $('#payment-settings-btn').css('display', 'block');

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
