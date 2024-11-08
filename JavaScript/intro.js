$(document).ready(function() {
    $(".introtext").hide();

    $(".introtext").each(function(index) {
        $(this).delay(index * 500).fadeIn(1000);
    });
});
