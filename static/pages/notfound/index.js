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
        if($(pre).html() !== '') {
            $('pre.last').css('display','block').removeClass('last');
            $(pre).css('display','inline-block').addClass('last');
        }
        $('#tab').scrollTop($('#tab')[0].scrollHeight);
    }, time);
    time = time + 50;
});
$('#cursor').hide();
setTimeout(function() {
    $('#loady').css('visibility','hidden');
    setInterval(function() {
        $('#cursor').toggle();
    }, 500);
}, time);
$('#cb').append(navigator.userAgent);
$('#dt').append(new Date());
$('#jq').append(jQuery.fn.jquery);
$('#pg').append(window.location.hash+'...');