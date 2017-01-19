setInterval(function() {
    if($('#loady').html() == '/') {
        $('#loady').html('-');
    } else if($('#loady').html() == '-') {
        $('#loady').html('\\');
    } else if($('#loady').html() == '\\') {
        $('#loady').html('|');
    } else if($('#loady').html() == '|') {
        $('#loady').html('/');
    }
}, 100);
var time = 1000;
$.each($('pre'), function() {
    var pre = this;
    setTimeout(function() {
        $(pre).css('display','block');
    }, time);
    time = time + 50;
});
$('#cursor').hide();
setTimeout(function() {
    $('#loady').hide();
    $('pre:last').css('display','inline-block');
    setInterval(function() {
        $('#cursor').toggle();
    }, 500);
}, time + 500);
$('#cb').append(navigator.userAgent);
$('#dt').append(new Date());
$('#jq').append(jQuery.fn.jquery);
$('#pg').append(window.location.hash+'...');