/** are computers ever become... <i>volitional</i>? */

$(".show-coffeshops").live('click', function(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    var el = $(this);
    if (el.html() == "SHOW'EM") {
        $("#coffeeshops").show();
        $(el).html("HIDE'EM");
    } else {
        $("#coffeeshops").hide();
        $(el).html("SHOW'EM");
    }
});
