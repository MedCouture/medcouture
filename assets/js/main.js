$(document).ready(() => {
  $('#recipeCarousel').carousel({
    interval: 5000
  })

  $('.carousel .carousel-item').each(function () {
    var minPerSlide = 3;
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i = 0; i < minPerSlide; i++) {
      next = next.next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }

      next.children(':first-child').clone().appendTo($(this));
    }
  });

  $('#giving-back').backstretch('assets/images/medcouture-givingback.png');
  $('#splash').backstretch('assets/images/splash.png');

  //start store retailers

    let retailerData = [
      
     ]


  for (let i = 0; i < retailerData.length; i++) {
    let business = retailerData[i].SFSCUST_NAME;
    let address = retailerData[i].ADDRESS1;
    let address2 = retailerData[i].ADDRESS2;
    let tel = retailerData[i].ACCESSNUM;
    // let website = retailerData[i].Website;

    $('#retailers').append(`
        <h2 class="text-center">${business}</h2>
        <h4 class="text-center">${address}</h4>
        <div class="d-flex justify-content-center align-items-center my-5">
            <div class="">
            <a href="tel:${tel}" class="button text-blue text-sofia text-center mr-2">${tel}</a>
            <a href="http://maps.google.com/?q=${address}${address2}" class="button text-blue text-sofia text-center text-uppercase mr-2">Directions</a>
        </div>
      `)
  }




  //end store retailers 


})