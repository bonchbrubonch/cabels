$(function(){
  $(".sale__wrapper").slick({
    dots: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="../images/icons/nextarrow.png" alt=""></img>',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="../images/icons/nextarrow.png" alt=""></img>',
  });

  $(".sale__wrapper").on('afterChange', function(event, slick, currentSlide){
    $("#cp").text(currentSlide + 1);
  });
  

  $(".statistic__item-num").each(function(){
    $(this).prop("Counter", 0).animate({
      Counter:$(this).text()
    },{
      duration: 2000,
      easing:"swing",
      step:function(now){
        $(this).text(Math.ceil(now));
      }
    });
  });

  // var show = true;
  //   var countbox = ".statistic__wrapper";
  //   $(window).on("scroll load resize", function () {
  //       if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
  //       var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
  //       var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
  //       var w_height = $(window).height(); // Высота окна браузера
  //       var d_height = $(document).height(); // Высота всего документа
  //       var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
  //       if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
  //          //
  //          // скрипт который должен выполниться
  //          //
  //          show = false;
  //       }
        
  //   });



  $('.confidence__wrapper').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite:true,
    // centerMode: true,
    variableWidth: true,
    // centerPadding: '60px',
    prevArrow: '<img class="confidence-arrows slider-arrows__left" src="../images/icons/nextarrow-confidence.png" alt=""></img>',
    nextArrow: '<img class="confidence-arrows slider-arrows__right" src="../images/icons/nextarrow-confidence.png" alt=""></img>',
  });
  $(".confidence__wrapper").on('afterChange', function(event, slick, currentSlide){
    $("#cpn").text(currentSlide + 1);
  });

  $('.confidence__item-img').magnificPopup({
    type: 'image'
   
  });

});


