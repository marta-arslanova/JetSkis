$(function(){

  $('.banner-section__slider').slick({
    dots: true,
    prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/banner-section/arrow-left.svg" alt="arrow-left"></button>',
    nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/banner-section/arrow-right.svg" alt="arrow-right"></button>',
  });

  $('.tab').on('click', function(e) {
    e.preventDefault();

    $('.tab').removeClass('tab--active');
    $('.tabs-content').removeClass('tabs-content--active');

    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs-content--active');
  });

  

});


