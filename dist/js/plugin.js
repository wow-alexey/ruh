$('.burger').on('click', function() {
    $('header nav').toggleClass('opened');
    $('body, html').toggleClass('hide-overflow');
});

$('nav a').on('click', function () {
    var currLink = $(this).data('link');
    $('nav a').removeClass('active');
    $('a[data-link="'+currLink+'"]').addClass('active');
});

//accordion
$('.accordion').click(function(e) {
    e.preventDefault();

    var $this = $(this);

    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
    } else {
        $this.parent().parent().find('li .panel').removeClass('show');
        $this.parent().parent().find('li .panel').slideUp(350);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }
});