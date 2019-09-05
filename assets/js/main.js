$(document).ready(()=>{
    console.log('I am working');
    $('#recipeCarousel').carousel({
        interval: 5000
      })
      
      $('.carousel .carousel-item').each(function(){
          var minPerSlide = 3;
          var next = $(this).next();
          if (!next.length) {
          next = $(this).siblings(':first');
          }
          next.children(':first-child').clone().appendTo($(this));
          
          for (var i=0;i<minPerSlide;i++) {
              next=next.next();
              if (!next.length) {
                  next = $(this).siblings(':first');
                }
              
              next.children(':first-child').clone().appendTo($(this));
            }
      });
    $('.giving-back').backstretch('assets/images/medcouture-givingback.png')
    $('#splash').backstretch('assets/images/splash.png')
})