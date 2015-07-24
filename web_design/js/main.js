/* Loading Script */
$(window).load(function () {
    $(".loader").delay(500).fadeOut();
    $("#mask").delay(1000).fadeOut("slow");
});

/*Validation*/
jQuery("#contact-form").validate({
    submitHandler: function (form) {
        jQuery(form).ajaxSubmit();
        jQuery('.formSent').show();
    }
});

/* Home page slider */
$(window).load(function () {
    "use strict";
    $("#owl-main-text").owlCarousel({
        autoPlay: 3500,
        goToFirst: true,
        goToFirstSpeed: 2000,
        navigation: false,
        slideSpeed: 700,
        pagination: false,
        transitionStyle: "fadeUp",
        singleItem: true
            // "singleItem:true" is a shortcut for:
            // items : 1, 
            // itemsDesktop : false,
            // itemsDesktopSmall : false,
            // itemsTablet: false,
            // itemsMobile : false
    });
});

/* Home background slider */
$(window).load(function () {
    "use strict";
    $("#owl-main").owlCarousel({
        autoPlay: 5000,
        navigation: true,
        slideSpeed: 400,
        pagination: false,
        transitionStyle: "fade",
        singleItem: true
            // "singleItem:true" is a shortcut for:
            // items : 1, 
            // itemsDesktop : false,
            // itemsDesktopSmall : false,
            // itemsTablet: false,
            // itemsMobile : false
    });
});

/* About slider */
$(document).ready(function () {
    "use strict";
    $("#owl-about").owlCarousel({
        navigation: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true
            // "singleItem:true" is a shortcut for:
            // items : 1, 
            // itemsDesktop : false,
            // itemsDesktopSmall : false,
            // itemsTablet: false,
            // itemsMobile : false
    });
});

/* Facts */
jQuery(document).ready(function ($) {
    "use strict";
    $('.facts-list').appear(function () {
        $('#fact1').animateNumber({
            number: 354
        }, 1000);
        $('#fact2').animateNumber({
            number: 45
        }, 1000);
        $('#fact3').animateNumber({
            number: 3459
        }, 1000);
        $('#fact4').animateNumber({
            number: 539
        }, 1000);
    }, {
        accX: 0,
        accY: -50
    });
});

/* Project Single Slider */
$(document).ajaxComplete(function () {
    "use strict";
    $("#owl-project-single").owlCarousel({
        navigation: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true
            // "singleItem:true" is a shortcut for:
            // items : 1, 
            // itemsDesktop : false,
            // itemsDesktopSmall : false,
            // itemsTablet: false,
            // itemsMobile : false
    });
});

/* Quote slider */
$(document).ready(function () {
    "use strict";
    $("#owl-quote").owlCarousel({
        navigation: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true
            // "singleItem:true" is a shortcut for:
            // items : 1, 
            // itemsDesktop : false,
            // itemsDesktopSmall : false,
            // itemsTablet: false,
            // itemsMobile : false
    });
});

/* FAQ */
    $(document).ready(function() {
        "use strict";
        $('.faq-q').click(function(){
            $(this).next('.faq-a').show();
        });
        $('.faq-hide').click(function(){
            $(this).parent('.faq-a').hide();
        });
    });

/* Clients slider */
$(document).ready(function () {
    "use strict";
    $("#owl-clients").owlCarousel({
        autoPlay: 3000,
        //Set AutoPlay to 3 seconds
        navigation: false,
        pagination: false,
        items: 5,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3]
    });
});

/* Isotope */
$(window).load(function () {
    var $container = $('#folio');
    $container.isotope({
        itemSelector: '.folio-item'
    });
    var $optionSets = $('#portfolio .folio-filter'),
        $optionLinks = $optionSets.find('a');
    $optionLinks.click(function () {
        var $this = $(this);
        // don't proceed if already selected
        if ($this.hasClass('selected')) {
            return false;
        }
        var $optionSet = $this.parents('.folio-filter');
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');
        // make option object dynamically, i.e. { filter: '.my-filter-class' }
        var options = {},
            key = $optionSet.attr('data-option-key'),
            value = $this.attr('data-option-value');
        // parse 'false' as false boolean
        value = value === 'false' ? false : value;
        options[key] = value;
        if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
            changeLayoutMode($this, options);
        } else {
            // otherwise, apply new options
            $container.isotope(options);
        }
        return false;
    });
});

/* Scroll plugin */
$(document).ready(function () {
    "use strict";
    $('nav li').localScroll();
    $('.slider-wrap').localScroll();
});

/* Portfolio ajax */
$(document).ready(function () {
    "use strict";
    $('.folio-item').click(function () {
        $("html, body").animate({
            scrollTop: $('#project-show').offset().top
        }, 1000);
    });
});

/* Nav menu */
$(document).ready(function () {
    "use strict";
    $('.navigation ul').onePageNav({
        filter: ':not(.external)'
    });
});

/* Sticky Header */
$(document).ready(function () {
    "use strict";
    $("header").sticky({
        topSpacing: 0
    });
});

/* Parallax */
jQuery(document).ready(function ($) {
    "use strict";
    $.stellar({
        horizontalScrolling: false,
        verticalOffset: 0
    });
});

/* Portfolio */
$(function () {
    "use strict";
    $(' .folio-item ').each(function () {
        $(this).hoverdir({
            hoverDelay: 5
        });
    });
});

jQuery(document).ready(function ($) {
    "use strict";
    $('.folio-item').click(function () {
        $.scrollTo($('#ajax'), 500);
    });
});

$(document).ajaxComplete(function () {
    "use strict";
    $(".close").click(function () {
        //$("#ajax").hide(1000);
        $('#ajax').html('').css('height', '0px');
    });
});

/* Animation */
$(function () {
    "use strict";
    $('.animate').bind('inview', function (event, visible) {
        if (visible === true) {
            var offset = $(this).offset();
            $(this).removeClass('animate');
        }
    });
    $('.mac-img').bind('inview', function (event, visible) {
        if (visible === true) {
            $('.show').removeClass('animate-slide');
        }
    });
    $('.hide-progress').bind('inview', function (event, visible) {
        if (visible === true) {
            var offset = $(this).offset();
            $(this).removeClass('hide-progress');
        }
    });
});

$(function () {
    var board1 = new ChessBoard('board1', 'start');
    var board2 = new ChessBoard('board2', 'start');
});