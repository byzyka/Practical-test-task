var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    loop: true,
  },
});

$(document).ready(function(){
  $.each($('.radiobuttuns__item'),function(index, val) {
    if($(this).find('input').prop('checked')==true){
        $(this).addClass('activeCheck');
    }
});

$('body').on('click', '.radiobuttuns__item', function(event) {
    $(this).parents('.radiobuttuns').find('.radiobuttuns__item').removeClass('activeCheck');
    $(this).parents('.radiobuttuns').find('.radiobuttuns__item input').prop('checked', false);
    $(this).toggleClass('activeCheck')
    $(this).find('input').prop('checked', true);
    return false;
});

$('body').on('click', '.header__btn', function(){
    if($('.form__window').hasClass('hidden')) {
        $('section').addClass('hidden');
        $('.form__window').removeClass('hidden'); 
        window.scrollTo(0, 0);           
    } else {
        $('section').removeClass('hidden');
        $('.form__window').addClass('hidden');
    }
})



})

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  // var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    // 'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}
 
function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  // var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    total: t,
    // days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
}
 
function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  // var daysSpan = clock.querySelector(".days");
  var hoursSpan = clock.querySelector(".hours");
  var minutesSpan = clock.querySelector(".minutes");
  var secondsSpan = clock.querySelector(".seconds");
 
  function updateClock() {
    var t = getTimeRemaining(endtime);
 
    if (t.total <= 0) {
      clearInterval(timeinterval);
      var deadline = new Date(Date.parse(new Date()) + 5 * 1000);
      initializeClock('countdown', deadline);
    }
 
    // daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
    minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
    secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
  }
 
  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}
 
var deadline = new Date(Date.parse(new Date()) + 30 * 60 * 1000);
initializeClock("countdown", deadline);


var scene = document.getElementById('scene');
var sceneRight = document.getElementById('scene__right');
var parallax = new Parallax(scene, {
  hoverOnly: true,
  relativeInput: true
});
var parallax = new Parallax(sceneRight, {
  hoverOnly: true,
  relativeInput: true
});