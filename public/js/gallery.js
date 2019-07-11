$(document).ready(function() {
  // Magnific Popup with gallery enabled
  $('.tcu-popup-link--icon').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true,
    },
  });

  // Magnific Popup without gallery
  $('.tcu-popup-link').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true,
    },
  });

  // Add Magnific Popup to slider
  $('.tcu-gallery-slider').each(function() {
    // the containers for all your galleries
    var _items = $(this).find('li > a');
    var items = [];
    for (var i = 0; i < _items.length; i++) {
      items.push({
        src: $(_items[i]).attr('href'),
        title: $(_items[i]).attr('title'),
      });
    }

    $(this)
      .parent()
      .find('.tcu-action-btn')
      .magnificPopup({
        items: items,
        type: 'image',
        gallery: {
          enabled: true,
        },
      });
    $(this)
      .parent()
      .find('.tcu-gallery-description')
      .magnificPopup({
        items: items,
        type: 'image',
        gallery: {
          enabled: true,
        },
      });
  });

  // Flexslider
  $('.tcu-gallery-slider').flexslider({
    animation: 'slide',
    slideshowSpeed: 3000,
  });

  // var tcuGallery = $( '.tcu-gallery-wrapper' ).isotope( {
  //   itemSelector: '.tcu-gallery-item',
  //   resizesContainer: false,
  //   layoutMode: 'masonry',
  //   filter: '*'
  // } );

  // tcuGallery.imagesLoaded().progress( function() {
  //   tcuGallery.isotope( 'layout' );
  // } );

  imagesLoaded().done(function() {
    // isotope
    $('.tcu-gallery-wrapper').isotope({
      itemSelector: '.tcu-gallery-item',
      resizesContainer: false,
      layoutMode: 'masonry',
      filter: '*',
    });

    // filter
    // Start Filtering with Isotope
    jQuery('.tcu-filter-link').click(function(e) {
      // e.preventDefault();
      console.log('I am in!');
      $('.tcu-gallery-wrapper').isotope({
        filter: $(this).data('filter'),
      });
    });
  });
});
