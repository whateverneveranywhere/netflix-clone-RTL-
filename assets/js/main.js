$('.owl-carousel').owlCarousel({
      lazyLoad: true,
      lazyLoadEager:true,
      rtl:true,
      nav:true,
       autoWidth:true,
      smartSpeed :900,
      navText : ["<i class='fas fa-chevron-right mt-3 ml-2 mr-1'></i>", "<i class='fas fa-chevron-left mt-3 mr-2 ml-1'></i>"],
      autoHeight: true,
        loop:true,
        margin:10,
        autoplay:false,
      autoplayTimeout:0,
      autoplayHoverPause:false,
      slideBy: 3 ,
      dots:false,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:4
            },
            1000:{
                items:5
            }
        }
    })


    $(".more").click(function() {
        var delay=1000 * 0.5;//1*6 seconds
setTimeout(function(){
  window.scrollBy(0, 600);//scrolls to specific location
},delay); 
    });

    
    $(".more-alt").click(function() {
        var delay=1000 * 0.5;//1*6 seconds
setTimeout(function(){
  window.scrollBy(0, 600);//scrolls to specific location
},delay); 
    });

    $(".more-cat").click(function() {
      var delay=1000 * 0.5;//1*6 seconds
setTimeout(function(){
window.scrollBy(0, 600);//scrolls to specific location
},delay); 
  });

    $(".downer").click(function() {
      var delay=1000 * 0.5;//1*6 seconds
setTimeout(function(){
window.scrollBy(0, 600);//scrolls to specific location
},delay); 
  });



    /* Open */
function openNav() {
    document.getElementById("fs-menu").style.height = "100%";
  }
  
  /* Close */
  function closeNav() {
    document.getElementById("fs-menu").style.height = "0%";
  }


  
  
  $('body').tooltip({
    selector: '[data-toggle]',
    trigger: 'hover',
    placement: 'auto',
    delay: {
      show: 50,
      hide: 50
    }
  });


  function displayNotification() {
    if (Notification.permission == 'granted') {
      navigator.serviceWorker.getRegistration().then(function(reg) {
        reg.showNotification('Hello world!');
      });
    }
  }

//   $("#navbar a").click(function(event) {
//     event.preventDefault();

//     $('html, body').animate({
//         scrollTop: $("#elementtoScrollToID").offset().top
//     }, 2000);
// });