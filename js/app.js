(function($) {
  $('.nav-home, .nav-about, .nav-whatwedo, .nav-process, .nav-best-results, .nav-apply').on('click', function(e) {
    e.preventDefault();

    var clickedLinkClass = $(this).attr('class').substr(4),
        scrollTo = $('#' + clickedLinkClass);

    //$.smoothScroll({ scrollTarget: scrollTo });

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
      });
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
