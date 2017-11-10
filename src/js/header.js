// Add class to element on scroll (jQuery dependence)
$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
        $('.header').addClass("header--isTransformed");
    }
    else{
        $('.header').removeClass("header--isTransformed");
    }
});