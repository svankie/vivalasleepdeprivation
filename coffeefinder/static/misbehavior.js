/** are computers ever become... <i>volitional</i>? */

$(".show-popup").live('click', function(ev) {
    ev.stopPropagation();
    ev.preventDefault();
    $('#box').css({ opacity: .25 });
    $("#pop-up").fadeIn();
});

$(".cancel-cs").live('click', function(ev) {
    ev.stopPropagation();
    ev.preventDefault();
    $('#box').css({ opacity: 1 });
    $("#pop-up").fadeOut();
});

$(".detail").live('click', function(ev) {
    ev.stopPropagation();
    ev.preventDefault();
    alert('Naming is the mother of all things. -Lao Zi.');
});

$("#add-cs").live('submit', function(ev) {
    ev.stopPropagation();
    ev.preventDefault();

    var query = {};
    query.name = extractValues('name') || undefined;
    query.address =  extractValues('address') || undefined;
    if (extractValues('wifi') != 'false' || typeof extractValues('wifi') == undefined) { query.wifi = extractValues('wifi'); }
    if (extractValues('plugs') != 'false' || typeof extractValues('plugs') == undefined) { query.plugs = extractValues('plugs'); }
    if (extractValues('plastic') != 'false' || typeof extractValues('plastic') == undefined) { query.plastic = extractValues('plastic'); }
    if (extractValues('berserk_mode') != 'false' || typeof extractValues('berserk_mode') == undefined) { query.berserk_mode = extractValues('berserk_mode'); }

    $.ajax({
        url: '/coffeeshops/add/',
        data: query,
        type: 'post',
        success: function(text, status, text) {
            alert("Your favorite coffee shop has been added!");
            window.location = 'http://svankie.alwaysdata.net/coffeeshops/';
        },
        error: function(xhr, text) {alert("todo mal"); }
    });
});

/** h3lp3r5 */
function extractValues(attrName, input_type, multiple) {
    if (input_type == 'select' && typeof multiple != 'undefined') {
        var vector = new Array();
        $.each($('#' + attrName + ' :selected'), function(idx, el) {
            vector.push($(el).val());
        });
        return vector.join(",");
    } else if (input_type == 'select') {
        return $('#' + attrName + ' :selected').val();
    } else {
        return $('#' + attrName).val();
    }
}
