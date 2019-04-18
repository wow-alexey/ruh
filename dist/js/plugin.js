$('.burger').on('click', function() {
    $('header nav').toggleClass('opened');
    $('body').toggleClass('hide-overflow');
});

$('nav a').on('click', function () {
    var currLink = $(this).data('link');
    $('nav a').removeClass('active');
    $('a[data-link="'+currLink+'"]').addClass('active');
});

//accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}