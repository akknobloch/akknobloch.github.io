//Append Navigation to pages
$(document).ready(function(){
  $.get("nav.html", function(data) {
    $("#navigation").html(data);
  });

  //Text Typing
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #fff }";
  document.body.appendChild(css);
});

//Text Typing effectvar TxtRotate = function(el, toRotate, period) {
var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);

  //Smooth Scrolling
  $('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
          $('.parallax--home').css('background-position', 'left ' + (('scrollTop')) + 'px');
	        window.location.hash = target;
	    });
	});
};

//Menu toggle
function toggleMenu() {
  document.getElementById("mobile-menu").classList.toggle("open");
  document.body.classList.toggle("no-scroll");
}

function MobileScrollToBottom() {
  document.getElementById("mobile-menu").classList.toggle("open");
  document.body.classList.toggle("no-scroll");
  window.scrollTo(0,document.body.scrollHeight);
}

//Keep scrolled effect
$(window).scroll(function() {
  var scrolledY = $(window).scrollTop();
  $('.parallax--home').css('background-position', 'left ' + ((scrolledY)) + 'px');
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      document.getElementById("scrollToTop").style.display = "block";
  } else {
      document.getElementById("scrollToTop").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function ScrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
