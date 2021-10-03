$("#toggle").click(function(){
    var $target = $('.target'),
        $toggle = $(this);

    $target.slideToggle( 500, function () {
        $toggle.text(($target.is(':visible') ? 'Read Less' : 'Read More') + '');
    });
});
        
