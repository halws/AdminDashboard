$(function() {
    $('.toggle-nav').click(function() {
        toogleNav();
        toggleIcon();
    });
});

function toggleIcon() {
    if ($('.lines').hasClass('close')) {
        $('.lines').removeClass('close');
    } else {
        $('.lines').addClass('close');
    }
};

function toogleNav() {
    if ($('#site-wrapper').hasClass('show-nav')) {
        $('#site-wrapper').removeClass('show-nav');
    } else {
        $('#site-wrapper').addClass('show-nav')
    }
};
