(function($){
  // Immediately Invoked Fucntion Expresion invoked to create a new execution context therefore creating encapsulation any variables from the global object

  $navLinks = $('.navigation ul li a');
  $icon = $('.navigation ul li');

  function addLinkTitlesToNavLinks() {
    $($navLinks).each(function() {
      $title = $(this).attr('title');
      $(this).find('span').html($title);
    });
  }

  function linkTitleOnHover() {
    $navLinks.hover(function() {
      $this = $(this);
      $this.find('i').hide();
      $this.find('span').show();
    }, function () {
      $this.find('i').show();
      $this.find('span').hide();
    });
  }

  function animateOnHover(elm, animation) {
    $(elm).hover(
      function(){
        $(this).addClass(animation);
      },
      function() {
        $(this).removeClass(animation);
      }
    );
  }

  function loadViewOnClick(elm, view, location) {
    var location = '.view' || location;
    $(elm).click(function(e){
      e.preventDefault();
      $(location).load(view);
      $.getScript('assets/javascripts/main.js');
    });
  }

  function addAnimation(elm, animation) {
    $(elm).addClass('my-animate ' + animation);
  }

  /* add animation before load for smoothest effect */
  addAnimation('.subpage-title', 'bounceInLeft');

  $(document).ready(function() {

    /* animations */
    addLinkTitlesToNavLinks();
    linkTitleOnHover();
    animateOnHover('.client-logo', 'tada');


    /* single page navigation */
    loadViewOnClick('.about', 'about.html');
    loadViewOnClick('.contact', 'contact.html');
    loadViewOnClick('.home', 'index.html');
    loadViewOnClick('.work', 'work.html');

    /* bug fix for modal window and animation.css */
    window.setTimeout(function() {
      $('.clients').removeClass('my-animate rotateInUpLeft');
    }, 3000);
  });
}(jQuery));
