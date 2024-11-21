$(document).ready(function(){
    $(function(){
        $("#head").load("./includes/meta.html");
        $("#header").load("./includes/header.html");
        $("#footer").load("./includes/footer.html");
    });
    // table sorting from search bar
    $("#myInput").on("keyup", function(){
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
    // accordion
    $('#accordion li h3').click(function(){
        var $parent = $(this).parent();
        if($parent.hasClass('active')) return;
        $('#accordion ul .row').not().slideUp();
        $(this).next().slideDown(function(){
            $parent.addClass('active').siblings().removeClass('active');
        });
    });
    // slider
    function rotate(){
        var lastChild = $('.slider div:last-child').clone();
        $('slider div').removeClass('firstSlide')
        $('.slider div:last-child').remove();
        $('.slider').prepend(lastChild)
        $(lastChild).addClass('firstSlide')
    }
    window.setInterval(function(){
        rotate()
    }, 4000);
});