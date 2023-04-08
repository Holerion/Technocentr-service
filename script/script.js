(function ($) {
  $.fn.timeline = function () {
    var selectors = {
      id: $(this),
      item: $(this).find(".timeline-item"),
      activeClass: "timeline-item--active",
      img: ".timeline__img",
    };
    selectors.item.eq(0).addClass(selectors.activeClass);
    selectors.id.css("background-image", "url(" + selectors.item.first().find(selectors.img).attr("src") + ")");
    var itemLength = selectors.item.length;
    $(window).scroll(function () {
      var max, min;
      var pos = $(this).scrollTop();
      selectors.item.each(function (i) {
        min = $(this).offset().top - 100;
        max = $(this).height() + $(this).offset().top;
        var that = $(this);
        if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
          console.log(min);
          selectors.item.removeClass(selectors.activeClass);
          selectors.id.css("background-image", "url(" + selectors.item.last().find(selectors.img).attr("src") + ")");
          selectors.item.last().addClass(selectors.activeClass);
        } else if (pos <= max - 40 && pos >= min) {
          selectors.id.css("background-image", "url(" + $(this).find(selectors.img).attr("src") + ")");
          selectors.item.removeClass(selectors.activeClass);
          $(this).addClass(selectors.activeClass);
        }
      });
    });
  };
})(jQuery);

$("#timeline-1").timeline();




const normalNavbar = $('.navbar')
window.addEventListener('scroll', ()=>{
  if(scrollY>140){
    normalNavbar.addClass('show')
  }else{
    normalNavbar.removeClass('show')

  }
})

window.addEventListener('resize',()=>{
  if($(window).width()<900){
    normalNavbar.addClass('haburger')

  }
  else{
    normalNavbar.removeClass('haburger')
  }


})



function showTest(){
  const sec_list =  $('.second-list')
  sec_list.toggleClass('show')
  
  if(sec_list.hasClass('show')){
    $('.normal-navbar').css({'background-color':'#82074a','color':'white'})
  }
  else
  $('.normal-navbar').css({'background-color':'#fff', 'color':'black'})
}

let translate =-100;

$('.menu-icon__cheeckbox').click(
  function(){

    if(translate==-100){
      translate=0
      this.checked=true
    }else if(translate==0){
      translate-=100
      this.checked=false
    }else{
      translate-=100
      this.checked=true
    }

    console.log('translate: ', translate);

    $('.hamburger-navbar .menu').css('transform',`translateX(${translate}vw)`)
  }
  )
  
  function showTestHamburger(){
    translate+=100;
    console.log('translate: ', translate);
    $('.hamburger-navbar .menu').css('transform',`translateX(${translate}vw)`)
  }
