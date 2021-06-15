$(window).load(function() {
    $('#slider').nivoSlider()
    }
);

$(window).load(function() {
    $('#slider').nivoSlider({
        effect: 'fade',
        slices: 10,
        boxCols: 4,
        boxRows: 2,
        animSpeed: 600,
        pauseTime: 3000,
        startSlide: 0,
        directionNav: true,
        controlNav: true,
        controlNavThumbs: true,
        pauseOnHover: true,
        manualAdvance: false,
        prevText: '<',
        nextText: '>',
        randomStart: false,
        beforeChange: function(){},
        afterChange: function(){},
        slideshowEnd: function(){},
        lastSlide: function(){},
        afterLoad: function(){}
    });
});