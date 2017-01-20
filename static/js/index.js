var mem = {};
function loadTab(tid) {
    var top = setTimeout(";");
    for(var i = 0; i < top; i++) {
        clearTimeout(i); 
    }
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
    if(typeof mem[tid] !== 'object') {
        mem[tid] = {};
    }
    $('#tab, #tabStyle').html('');
    $('#header .links a').removeClass('active');
    $('#header .links a[tid='+tid+']').addClass('active');
    if(typeof mem[tid].html !== 'string') {
        $.get('config/pages/'+tid+'/index.html', function(html) {
            mem[tid].html = html;
            $.ajax({
                url: 'config/pages/'+tid+'/index.js',
                dataType: 'text',
                success: function(js) {
                    mem[tid].js = js;
                }
            }).always(function() {
                $.get('config/pages/'+tid+'/index.css', function(css) {
                    mem[tid].css = css;
                }).always(function() {
                    loadTab(tid);
                });
            });
        }).fail(function() {
            changeTab('notfound');
        });
    } else {
        loadTab(tid);
    }
}
function hashChange() {
    tid = window.location.hash.split(',').shift().replace('#', '');
    if(typeof mem[tid] !== 'object') {
        mem[tid] = {};
    }
    var hash = window.location.hash;
    hash = hash.split(',');
    hash.shift();
    mem[tid].hash = {};
    $.each(hash, function() {
        data = this.split('.');
        if(typeof data[1] == 'undefined') {
            data[1] = null;
        }
        mem[tid].hash[data[0]] = data[1];
    });
    changeTab(tid);
}
$(document).ready(function() {
    $.getJSON('config/main.json', function(data) {
        $.each(data.pages, function() {
            $('#header .links').append('<a href="#'+this+'" tid="'+this+'">'+this+'</a>');
        });
        hashChange();
    });
});
window.onhashchange = hashChange;