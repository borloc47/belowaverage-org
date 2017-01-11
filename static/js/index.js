var mem = {};
function loadTab(tid, pageObj) {
    $.each(pageObj, function(k) {
        if(k == 'html') {
            $('#tabs .tab[tid='+tid+']').append(pageObj[k]);
        } else if(k == 'css') {
            $('#tabs .tab[tid='+tid+']').append('<style>'+pageObj[k]+'</style>');
        } else if(k == 'javascript') {
            $('#tabs .tab[tid='+tid+']').append('<script>'+pageObj[k]+'</script>');
        } else {
            //error
        }
    });
}
function changeTab(tid) {
    if(tid == '') {
        tid = 'Home';
    }
    tid = tid.replace('#', '');
    $('#tabs div').html('');
    if(typeof mem[tid] !== 'object') {
        $.get('config/pages/'+tid+'.html', function(data) {
            mem[tid] = data;
            loadTab(tid, data);
        });
    } else {
        loadTab(tid, mem[tid]);
    }
    $('#header .links a, #tabs div').removeClass('active');
    $('#header .links a[tid='+tid+'], #tabs div[tid='+tid+']').addClass('active');
}
$(document).ready(function() {
    $.getJSON('config/main.json', function(data) {
        $.each(data.pages, function() {
            $('#header .links').append('<a href="#'+this+'" tid="'+this+'">'+this+'</a>');
            $('#tabs').append('<div class="tab" tid="'+this+'"></div>');
        });
    });
    changeTab(window.location.hash);
    window.onhashchange = function() {
        changeTab(window.location.hash);
    };
});