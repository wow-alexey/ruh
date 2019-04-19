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
    $('.accordion').removeClass('opened');


    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
    } else {
        $('.panel').removeClass('show');
        $('.panel').slideUp(350);
        $this.parent().parent().find('li .panel').removeClass('show');
        $this.parent().parent().find('li .panel').slideUp(350);
        $this.toggleClass('opened');
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }
});

function appendHtml() {
    if ($(window).width() < 640 && $('.intro-categories .container--tabs')){
        $('.container--tabs').appendTo($('.for-tabs-container'));
    } else if($(window).width() >= 640 && $('.for-tabs-container .container--tabs')) {
        $('.container--tabs').appendTo($('.intro-categories'));
    }
}

window.addEventListener("load", function() {
    //tabs
    var myTabs = document.querySelectorAll("ul.nav-tabs > li");
    function myTabClicks(tabClickEvent) {
        for (var i = 0; i < myTabs.length; i++) {
            myTabs[i].classList.remove("active");
        }
        var clickedTab = tabClickEvent.currentTarget;
        clickedTab.classList.add("active");
        tabClickEvent.preventDefault();
        var myContentPanes = document.querySelectorAll(".tab-pane");
        for (i = 0; i < myContentPanes.length; i++) {
            myContentPanes[i].classList.remove("active");
        }
        var anchorReference = tabClickEvent.target;
        var activePaneId = anchorReference.getAttribute("href");
        var activePane = document.querySelector(activePaneId);
        activePane.classList.add("active");
    }
    for (var i = 0; i < myTabs.length; i++) {
        myTabs[i].addEventListener("click", myTabClicks)
    }
});

$( document ).ready(function() {
    appendHtml();
});

$(window).resize(function() {
    appendHtml();
});
