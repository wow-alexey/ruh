$('.burger').on('click', function() {
    $('.general-container').toggleClass('opened');
    $('body').toggleClass('overflow');
});

$('nav a').on('click', function () {
    var currLink = $(this).data('link');
    $('nav a').removeClass('active');
    $('a[data-link="'+currLink+'"]').addClass('active');
});