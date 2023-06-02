$('.worx_testimomials_mbl_carousel > .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dot: true,
    // animateOut: 'slideOutDown',
    // animateIn: 'flipInX',
    // smartSpeed: 450,
    autoplay: true,
    autoplayTimeout: 2000,
    
    responsive: {
        0: {
            items: 1,
            
        },
        600: {
            items: 1
        },
        767: {
            items: 1.1
        }
    }
});


$('.worx_property_mbl > .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dot: true,
    center:true,
    // animateOut: 'slideOutDown',
    // animateIn: 'flipInX',
    // smartSpeed: 450,
    autoplay: true,
    autoplayTimeout: 2000,
    
    responsive: {
        0: {
            items: 1.25,
            
        },
        600: {
            items: 1.25
        },
        767: {
            items: 1.1
        }
    }
});

$('.worx_trusted_mbl > .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dot: true,
    autoplay: false,
    autoplayTimeout: 2000,
    
    responsive: {
        0: {
            items: 1,
            
        },
        600: {
            items: 1.2
        },
        767: {
            items: 1.1
        }
    }
});


$('a[href*=\\#]:not([href=\\#])').click(function() {
    $('html,body').animate({
        scrollTop: $("#chooseSize").offset().top},
        'slow');
});


$(document).ready(function(){
    // console.log('Hello');
    setTimeout(function () {
        $("#smallProduct").trigger('click'); 
        $("#mediumProduct").trigger('click');
    }, 2500);
});