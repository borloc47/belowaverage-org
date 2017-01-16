var mem = {};
function loadTab(tid) {
    $('#tab, #tabStyle').html('');
    if(typeof mem[tid].html == 'string') {
        $('#tab').html(mem[tid].html);
    }
    if(typeof mem[tid].js == 'string') {
        eval(mem[tid].js);
    }
    if(typeof mem[tid].css == 'string') {
        $('#tabStyle').html(mem[tid].css);
    }
}
function changeTab(tid) {
    if(tid == '') {
        tid = 'Home';
    }
    tid = tid.replace('#', '');
    $('#header .links a').removeClass('active');
    $('#header .links a[tid='+tid+']').addClass('active');
    if(typeof mem[tid] !== 'object') {
        $.get('config/pages/'+tid+'/index.html', function(html) {
            mem[tid] = {};
            mem[tid].html = html;
            $.get('config/pages/'+tid+'/index.js', function(js) {
                mem[tid].js = js;
            }).always(function() {
                $.get('config/pages/'+tid+'/index.css', function(css) {
                    mem[tid].css = css;
                }).always(function() {
                    loadTab(tid);
                });
            });
        }).fail(function() {
            alert('404'); //do something neat here
        });
    } else {
        loadTab(tid);
    }
}
$(document).ready(function() {
    $.getJSON('config/main.json', function(data) {
        $.each(data.pages, function() {
            $('#header .links').append('<a href="#'+this+'" tid="'+this+'">'+this+'</a>');
        });
    });
    changeTab(window.location.hash);
    window.onhashchange = function() {
        changeTab(window.location.hash);
    };
});