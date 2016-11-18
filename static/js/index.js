function changeTab(tid) {
    if(tid == '') {
        tid = 'home';
    }
    tid = tid.replace('#', '');
    $('#header .links a, #tabs div').removeClass('active');
    $('#header .links a[tid='+tid+'], #tabs div[tid='+tid+']').addClass('active');
}
$(document).ready(function() {
    changeTab(window.location.hash);
    window.onhashchange = function() {
        changeTab(window.location.hash);
    };
    $('#sb').click(function() {
        $('#homePrev').addClass('swanimate');
        setTimeout(function() {
            window.location = 'https://webdows.belowaverage.org/';
        }, 2500);
    });
});