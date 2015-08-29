//init foundation
  $(document).foundation();


(function($) {
  $('nav li a, .contact-form-button').on('click', function(e) {
    e.preventDefault();
    var clickedLink = $(this).attr('href');
    $.smoothScroll({
      scrollTarget: clickedLink,
      speed: 500,
    });
    return false;
  });

  $('#home, #about, #whatwedo, #process, #apply, #process, #best-results').waypoint(function(direction) {

        var verticalWaypoints = $.waypoints().vertical,
            indexBefore = verticalWaypoints.indexOf(this);

        $('.current-section').removeClass('current-section');

        if (indexBefore < 1 && direction === 'up')
          return;

        var addCurrentSectionTo;
        var beforeEl = verticalWaypoints[indexBefore - 1];

        if (direction === 'up')
          addCurrentSectionTo = beforeEl;
        else
          addCurrentSectionTo = this;

        $('.nav-' + $(addCurrentSectionTo).attr('id')).addClass('current-section');
      }, { offset: 1 });
})(jQuery);



// a little function to enable vertical alignment.

(function ($) {
// VERTICALLY ALIGN FUNCTION
$.fn.vAlign = function() {
    return this.each(function(i){
    var ah = $(this).height();
    var ph = $(this).parent().height();
    var mh = Math.ceil((ph-ah) / 2);
    $(this).css('margin-top', mh);
    });
};
})(jQuery);

$(function(){
  $('.service-image, .service-copy').vAlign();
});






$(function () {
  $('nav a[title]').qtip({
    style: {
      classes: 'tooltip',
    },
    position: {
      my: 'center right',  // Position my top left...
      at: 'center left', // at the bottom right of...
    }
  });
});
