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
    nav: true,
    dot: true,
    center:true,
    // animateOut: 'slideOutDown',
    // animateIn: 'flipInX',
    // smartSpeed: 450,
    autoplay: true,
    autoplayTimeout: 3000,
    
    responsive: {
        0: {
            items: 1
            
        },
        600: {
            items: 1
        },
        767: {
            items: 1
        }, 
        1000: {
            items:3
        },

        1200: {
            items:3
        }
    }
});

$('.worx_trusted_mbl > .owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
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
            items: 1
        },
        767: {
            items: 1
        },
        1000: {
            items:3
        },

        1200: {
            items:4
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


$(document).ready(function(){
    // console.log('Hello');
    setTimeout(function () {
        // console.log('Hello');
        // $("#smallProduct").trigger('click'); 
        // $("#mediumProduct").trigger('click');
        $(".tab_content").hide();
        $(".tab_content:nth-child(3)").show();

    }, 3500);


    setTimeout(function () {


        $(function() {

            //find iframe
            let iframe = $('#product-component-1685341297708 > iframe');
            
            //find button inside iframe
            let button = iframe.contents().find('.shopify-buy__btn-wrapper > button');
            
            //trigger button click
            button.click(function () {                
                setTimeout(function () {
                    console.log("The paragraph was clicked.");  
                    $("#exampleModal").modal('show')
                }, 1500);
            });
            
        });


        $(function() {

            //find iframe
            let iframe = $('#product-component-1685415660713 > iframe');
            
            //find button inside iframe
            let button = iframe.contents().find('.shopify-buy__btn-wrapper > button');
            
            //trigger button click
            button.click(function () {             
                setTimeout(function () {
                    console.log("The paragraph was clicked.");
                    $("#faq").trigger('click')
                }, 1000);
                setTimeout(function () {
                    console.log("The paragraph was clicked.");  
                    $("#exampleModal").modal('show')
                }, 1800);
            });
            console.log(button);
        });


        

    }, 2500);


    
});





 // tabbed content
    // http://www.entheosweb.com/tutorials/css/tabs.asp
  
   

  /* if in tab mode */
    $("ul.tabs li").click(function() {
		
        $(".tab_content").hide();
        var activeTab = $(this).attr("rel"); 
        $("#"+activeTab).fadeIn();		
            
        $("ul.tabs li").removeClass("active");
            
        $(this).addClass("active");
	  
    });
	
	
	/* Extra class "tab_last" 
	   to add border to right side
	   of last tab */
	// $('ul.tabs li').last().addClass("tab_last");
	

/*<![CDATA[*/

$("#product-component-1685341297708 > iframe > .shopify-buy__product > .shopify-buy__btn-wrapper").hide()

function openModal() {
    console.log('Hello');
}


var myModalEl = document.getElementById('exampleModal')
myModalEl.addEventListener('shown.bs.modal', function (event) {
    
    

    (function () {

        // $("#loader").hide()
        

        var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
        if (window.ShopifyBuy) {
            if (window.ShopifyBuy.UI) {
                ShopifyBuyInit();
            } else {
                loadScript();
            }
        } else {
            loadScript();
        }
        function loadScript() {
            var script = document.createElement('script');
            script.async = true;
            script.src = scriptURL;
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
            script.onload = ShopifyBuyInit;
        }
        function ShopifyBuyInit() {
            var client = ShopifyBuy.buildClient({
                domain: 'worx-environmental-australia.myshopify.com',
                storefrontAccessToken: 'd6e87929c08f447624bf912ac20cc17d',
            });
            ShopifyBuy.UI.onReady(client).then(function (ui) {
                ui.createComponent('product', {
                    id: '8208048324864',
                    node: document.getElementById('product-component-1686234193437'),
                    moneyFormat: '%24%7B%7Bamount%7D%7D',
                    options: {
                        "product": {
                            "styles": {
                                "product": {
                                    "@media (min-width: 601px)": {
                                        "max-width": "calc(25% - 20px)",
                                        "margin-left": "20px",
                                        "margin-bottom": "50px"
                                    }
                                },
                                "button": {
                                    "font-family": "Montserrat, sans-serif",
                                    "font-weight": "bold",
                                    "font-size": "18px",
                                    "padding-top": "17px",
                                    "padding-bottom": "17px",
                                    ":hover": {
                                        "background-color": "#182e83"
                                    },
                                    "background-color": "#0e1b4d",
                                    ":focus": {
                                        "background-color": "#182e83"
                                    },
                                    "border-radius": "35px",
                                    "padding-left": "74px",
                                    "padding-right": "74px"
                                },
                                "quantityInput": {
                                    "font-size": "18px",
                                    "padding-top": "17px",
                                    "padding-bottom": "17px"
                                }
                            },
                            "text": {
                                "button": "Add to cart"
                            },
                            "googleFonts": [
                                "Montserrat"
                            ]
                        },
                        "productSet": {
                            "styles": {
                                "products": {
                                    "@media (min-width: 601px)": {
                                        "margin-left": "-20px"
                                    }
                                }
                            }
                        },
                        "modalProduct": {
                            "contents": {
                                "img": false,
                                "imgWithCarousel": true,
                                "button": false,
                                "buttonWithQuantity": true
                            },
                            "styles": {
                                "product": {
                                    "@media (min-width: 601px)": {
                                        "max-width": "100%",
                                        "margin-left": "0px",
                                        "margin-bottom": "0px"
                                    }
                                },
                                "button": {
                                    "font-family": "Montserrat, sans-serif",
                                    "font-weight": "bold",
                                    "font-size": "18px",
                                    "padding-top": "17px",
                                    "padding-bottom": "17px",
                                    ":hover": {
                                        "background-color": "#182e83"
                                    },
                                    "background-color": "#0e1b4d",
                                    ":focus": {
                                        "background-color": "#182e83"
                                    },
                                    "border-radius": "35px",
                                    "padding-left": "74px",
                                    "padding-right": "74px"
                                },
                                "quantityInput": {
                                    "font-size": "18px",
                                    "padding-top": "17px",
                                    "padding-bottom": "17px"
                                }
                            },
                            "googleFonts": [
                                "Montserrat"
                            ],
                            "text": {
                                "button": "Add to cart"
                            }
                        },
                        "option": {},
                        "cart": {
                            "styles": {
                                "button": {
                                    "font-family": "Montserrat, sans-serif",
                                    "font-weight": "bold",
                                    "font-size": "18px",
                                    "padding-top": "17px",
                                    "padding-bottom": "17px",
                                    ":hover": {
                                        "background-color": "#182e83"
                                    },
                                    "background-color": "#0e1b4d",
                                    ":focus": {
                                        "background-color": "#182e83"
                                    },
                                    "border-radius": "35px"
                                }
                            },
                            "text": {
                                "total": "Subtotal",
                                "button": "Checkout"
                            },
                            "popup": false,
                            "googleFonts": [
                                "Montserrat"
                            ]
                        },
                        "toggle": {
                            "styles": {
                                "toggle": {
                                    "font-family": "Montserrat, sans-serif",
                                    "font-weight": "bold",
                                    "background-color": "#0e1b4d",
                                    ":hover": {
                                        "background-color": "#182e83"
                                    },
                                    ":focus": {
                                        "background-color": "#182e83"
                                    }
                                },
                                "count": {
                                    "font-size": "18px"
                                }
                            },
                            "googleFonts": [
                                "Montserrat"
                            ]
                        }
                    },
                });
            });
        }
    })()

    
    var x = document.getElementById("loader");
    x.style.display = 'none'
    console.log(x);
    

})



    
/*]]>*/