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

  var retailerData = [
    {
      "Business": "Med Couture",
      "Address": "1901 Hutton Ct, Farmers Branch, TX 75234",
      "Tel": 2142312545,
      "Website": "http://www.medcouture.com"
    },
    {
      "Business": "Med Couture",
      "Address": "1901 Hutton Ct, Farmers Branch, TX 75234",
      "Tel": 2142312545,
      "Website": "http://www.medcouture.com"
    },
    {
      "Business": "Med Couture",
      "Address": "1901 Hutton Ct, Farmers Branch, TX 75234",
      "Tel": 2142312545,
      "Website": "http://www.medcouture.com"
    },
    {
      "Business": "Med Couture",
      "Address": "1901 Hutton Ct, Farmers Branch, TX 75234",
      "Tel": 2142312545,
      "Website": "http://www.medcouture.com"
    },
    {
      "Business": "Med Couture",
      "Address": "1901 Hutton Ct, Farmers Branch, TX 75234",
      "Tel": 2142312545,
      "Website": "http://www.medcouture.com"
    },
    {
      "Business": "Med Couture",
      "Address": "1901 Hutton Ct, Farmers Branch, TX 75234",
      "Tel": 2142312545,
      "Website": "http://www.medcouture.com"
    },
    {
      "Business": "Med Couture",
      "Address": "1901 Hutton Ct, Farmers Branch, TX 75234",
      "Tel": 2142312545,
      "Website": "http://www.medcouture.com"
    }
   ]


  for (let i = 0; i < retailerData.length; i++) {
    let business = retailerData[i].Business;
    let address = retailerData[i].Address;
    let tel = retailerData[i].Tel;
    let website = retailerData[i].Website;

    $('#retailers').append(`
        <h2 class="text-center">${business}</h2>
        <h4 class="text-center">${address}</h4>
        <div class="d-flex justify-content-center align-items-center my-5">
            <a href="tel:${tel}" class="button text-blue text-sofia text-center mr-2">256-320-5745</a>
            <a href="${website}" class="button text-blue text-sofia text-center text-uppercase mr-2">Website</a>
            <a href="http://maps.google.com/?q=${address}" class="button text-blue text-sofia text-center text-uppercase mr-2">Directions</a>
        </div>
      `)
  }




  //end store retailers 


})