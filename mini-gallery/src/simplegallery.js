/*!
 * jQuery simple gallery Plugin 1.1.0
 *
 * http://fernandomoreiraweb.com/
 *
 * Copyright 2013 Fernando Moreira
 * Released under the MIT license:
 *   http://mit.fernandomoreiraweb.com/
 */
;
(function($, window, document, undefined) {

  $.fn.simplegallery = function(options) {

    var defaults = {
      'galltime': 300,
      'gallcontent': '.content',
      'gallthumbnail': '.thumbnail',
      'gallthumb': '.thumb',
      'gallnext': '.right-arrow',
      'gallprevious': '.left-arrow'
    };

    var settings = $.extend({}, defaults, options);

    return this.each(function() {
      $(settings.gallprevious).click(function() {
        var now = $(this).parent().next("div.content").children(":visible"),
            last = $(this).parent().next("div.content").children(":last"),
            prev = now.prev();
            prev = prev.index() == -1 ? last : prev;
        now.fadeOut(settings.galltime, function() {prev.fadeIn(settings.galltime);});
      });
      $(settings.gallnext).click(function() {
    var now = $(this).parent().next("div.content").children(':visible'),
        first = $(this).parent().next("div.content").children(':first'),
        next = now.next();
        next = next.index() == -1 ? first : next;
    now.fadeOut(settings.galltime, function() {next.fadeIn(settings.galltime);});
});

      $(settings.gallthumb).click(function() {

        $(settings.gallcontent).find('img').stop(true, true).fadeOut(settings.galltime).hide();

        var img_attr = $(this).find('img').attr("id"),
          image_id = img_attr.replace('thumb_', '');
        $('.image_' + image_id + '').stop(true, true).fadeIn(settings.galltime);
        return false;

      });

    });

  };

})(jQuery, window, document);
