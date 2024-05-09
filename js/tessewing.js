jQuery(document).ready(function($){

  $(document).ready(function() {
  	var s = $(".navbarAS");
    var nc = $(".navbar-collapse");
    var lt = $(".logo-text");
    var lm = $(".logo");
  	var pos = s.position();
  	$(window).scroll(function() {
  		var windowpos = $(window).scrollTop();
  		if (windowpos >= pos.top) {
  			s.addClass("stick");
        nc.removeClass("buffer");
        lm.addClass("hide-it");
        lt.removeClass("hide-it");
  		} else {
  			s.removeClass("stick");
        nc.addClass("buffer");
        lm.removeClass("hide-it");
        lt.addClass("hide-it");
  		}
  	});
  });

  $(document).ready(function() {
    $(".showmore").click(function(){
        $(this).closest(".post-caption").removeClass("clear-color");
        $(this).closest(".post-caption").find(".post-caption-more").addClass("brighter");
        $(this).addClass("hide-it");
        $(this).siblings(".showless").removeClass("hide-it");
    });
  });

  $(document).ready(function() {
    $(".showless").click(function(){
        $(this).closest(".post-caption").addClass("clear-color");
        $(this).closest(".post-caption").find(".post-caption-more").removeClass("brighter");
        $(this).siblings(".showmore").removeClass("hide-it");
        $(this).addClass("hide-it");
    });
  });

  $(document).ready(function() {
     
      $(".entry-thumb").hover(function(){
        if ( $(window).width() > 992 ) {
          $(this).children(".post-caption").toggleClass("clear-color");
        }
        
    });
  });



  $(document).ready(function() {
      $('a').not('[href*="mailto:"]').not('[href*="#"]').not('[href*="javascript"]').each(function () {
  		var isInternalLink = new RegExp('/' + window.location.host + '/');
  		if ( ! isInternalLink.test(this.href) ) {
  			$(this).attr('target', '_blank');
  		}
  	});
  });

  $.param({ filter: '.web-design' })

  $(window).load(function(){

    // Store # parameter and add "." before hash
    var hashID = "." + window.location.hash.substring(1);

    //  the current version of isotope, the hack works in v2 also
    var $container = $('#isotope-list');

    $container.imagesLoaded(function(){
        $container.isotope({
            itemSelector: ".cat-item",
            filter: hashID, // the variable filter hack
        });             
    });

});


});
