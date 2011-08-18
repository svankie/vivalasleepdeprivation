/** are computers ever become... <i>volitional</i>? */

$(".show-popup").live('click', function(ev) {
    ev.stopPropagation();
    ev.preventDefault();
    $("#box").fadeOut();
    $("#pop-up").fadeIn();
});

$(".cancel-cs").live('click', function(ev) {
    ev.stopPropagation();
    ev.preventDefault();
    $("#pop-up").fadeOut();
    $("#box").fadeIn();
});

$("#add-cs").live('submit', function(ev) {
    ev.stopPropagation();
    ev.preventDefault();
    debugger;
});
