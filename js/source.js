$(document).ready(function() {
    var controller = new ScrollMagic.Controller();
    var snowmanTween = TweenMax.to(".animatesnow", 2, {
        css: {
            scale: 2,
            skewY: 8,
            skewX: 45
        }
    });
    if (Modernizr.mq('screen and (max-width:480px)')) {
        console.log('mobile');
        var tween = TweenMax.fromTo(".mountain", 3, {
            left: "8%"
        }, {
            left: "12%",
            repeat: -1,
            yoyo: true,
            ease: Linear.easeNone
        });
        var mountain = new ScrollMagic.Scene({
            triggerElement: "#trigger1",
            duration: "20%"
        }).setTween(tween).addTo(controller);
        var snowMan = new ScrollMagic.Scene({
            triggerElement: "#trigger2",
            duration: "40%",
            offset: 90
        }).setTween(snowmanTween).addTo(controller);
        var candycaneTween = TweenMax.to(".candycane", 2, {
            y: '-=280',
            ease: Power0.easeOut
        });
        var candyCane = new ScrollMagic.Scene({
            triggerElement: "#trigger3",
            duration: "85%"
        }).setTween(candycaneTween).addTo(controller);
        var tunnelTweenMobile = TweenMax.to(".tunnel", 2, {
            css: {
                rotation: 37,
                right: -350,
                top: -460
            },
            ease: Quad.easeInOut
        });
        var tunnel = new ScrollMagic.Scene({
            triggerElement: "#trigger4",
            duration: "70%"
        }).setTween(tunnelTweenMobile).addTo(controller);
        var footer = new ScrollMagic.Scene({
            triggerElement: "#page5",
            triggerHook: 'onEnter',
            duration: 250
        }).setTween("#page5 > div", {
            y: 235,
            ease: Linear.easeNone
        }).addTo(controller);
    }
    else if (Modernizr.mq('screen and (max-width:768px)')) {
        console.log('tablets');
        var snowMan = new ScrollMagic.Scene({
            triggerElement: "#trigger2",
            duration: "40%",
            offset: 90
        }).setTween(snowmanTween).addTo(controller);
        var candycaneTween = TweenMax.to(".candycane", 2, {
            y: '-=380',
            ease: Power0.easeOut
        });
        var candyCane = new ScrollMagic.Scene({
            triggerElement: "#trigger3",
            duration: "75%"
        }).setTween(candycaneTween).addTo(controller);
        var tunnelTweenMobile = TweenMax.to(".tunnel", 2, {
            css: {
                rotation: 37,
                right: -350,
                top: -460
            },
            ease: Quad.easeInOut
        });
        var tunnel = new ScrollMagic.Scene({
            triggerElement: "#trigger4",
            duration: "70%"
        }).setTween(tunnelTweenMobile).addTo(controller);
        var footer = new ScrollMagic.Scene({
            triggerElement: "#page5",
            triggerHook: 'onEnter',
            duration: 370
        }).setTween("#page5 > div", {
            y: 350,
            ease: Linear.easeNone
        }).addTo(controller);
    } else {
        console.log('desktop');
        var tween = TweenMax.fromTo(".mountain", 2, {
            left: "63%"
        }, {
            left: "65%",
            repeat: -1,
            yoyo: true,
            ease: Power1.easeInOut
        });
        var mountain = new ScrollMagic.Scene({
            triggerElement: "#trigger1",
            duration: "20%"
        }).setTween(tween).addTo(controller);
        var snowMan = new ScrollMagic.Scene({
            triggerElement: "#trigger2",
            duration: "60%"
        }).setTween(snowmanTween).addTo(controller);
        var candycaneTween = TweenMax.to(".candycane", 2, {
            y: '-=380',
            ease: Power0.easeOut
        });
        var candyCane = new ScrollMagic.Scene({
            triggerElement: "#trigger3",
            duration: "90%",
            offset: 10
        }).setTween(candycaneTween).addTo(controller);
        var tunnelTween = TweenMax.to(".tunnel", 2, {
            css: {
                rotation: 37,
                right: -260,
                top: -354
            },
            ease: Quad.easeInOut
        });
        var tunnel = new ScrollMagic.Scene({
            triggerElement: "#trigger4",
            duration: "70%"
        }).setTween(tunnelTween).addTo(controller);
        var footer = new ScrollMagic.Scene({
            triggerElement: "#page5",
            triggerHook: 'onEnter',
            duration: 250
        }).setTween("#page5 > div", {
            y: 235,
            ease: Linear.easeNone
        }).addTo(controller);
    }
    $('#buzz, #contact-email').click(function(e) {
        e.preventDefault();
        $('#page6').slideToggle();
        $('html, body').animate({
            scrollTop: $(document).height()
        }, 'slow');
    });
    $(".cd-form").validate();
    var form = $('#ajax-contact');
    var formMessages = $('#form-messages');
    $(form).submit(function(e) {
        event.preventDefault();
        var formData = $(form).serialize();
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: {message: "hello!"},
            dataType: "json"
        }).done(function(response) {
            $(formMessages).removeClass('error');
            $(formMessages).addClass('success');
            $("form").trigger("reset");
            $('.cd-label').removeClass('float');
            $('input, textarea').removeClass('valid');
            $('#page6').slideToggle();
        }).fail(function(data) {
            $(formMessages).removeClass('success');
            $(formMessages).addClass('error');
            if (data.responseText !== '') {
                $(formMessages).text('*Please fill up highlighted fileds. Thanks!');
            } else {
                $(formMessages).text('Oops! An error occured and your message could not be sent.');
            }
        });
    });
    if ($('.floating-labels').length > 0)
        floatLabels();
    function floatLabels() {
        var inputFields = $('.floating-labels .cd-label').next();
        inputFields.each(function() {
            var singleInput = $(this);
            checkVal(singleInput);
            singleInput.on('change keyup', function() {
                checkVal(singleInput);
            });
        });
    }
    function checkVal(inputField) {
        (inputField.val() == '') ? inputField.prev('.cd-label').removeClass('float') : inputField.prev('.cd-label').addClass('float');
    }
})

