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
    // animateOut: 'slideOutDown',
    // animateIn: 'flipInX',
    // smartSpeed: 450,
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

// $(function() {
//     $('a[href*=\\#]:not([href=\\#])').on('click', function() {
//         var target = $(this.hash);
//         target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
//         if (target.length) {
//             $('html,body').animate({
//                 scrollTop: target.offset().top
//             }, 1000);
//             return false;
//         }
//     });

// });

$('a[href*=\\#]:not([href=\\#])').click(function() {
    $('html,body').animate({
        scrollTop: $("#chooseSize").offset().top},
        'slow');
});




// $(window).load(function() {
//     setTimeout(function () {
//         console.log('Hello');
//          $("#productThree").trigger('click'); 
//         $("#productTwo").trigger('click');
//     }, 2000);
// });


$(document).ready(function(){
    // console.log('Hello');
    setTimeout(function () {
        console.log('Hello');
        $("#smallProduct").trigger('click'); 
        $("#mediumProduct").trigger('click');
    }, 3500);
});