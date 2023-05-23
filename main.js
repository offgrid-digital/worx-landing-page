$('.worx_testimomials_mbl_carousel > .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav: false,
    dot: true,
    // animateOut: 'slideOutDown',
    // animateIn: 'flipInX',
    // smartSpeed: 450,
    autoplay:true,
    autoplayTimeout:2000,
    
    responsive:{
        0:{
            items:1,
            
        },
        600:{
            items:1
        },
        767:{
            items:1.1
        }
    }
})