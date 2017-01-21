function startAnimation() {
    $('#homePrev, #tab .topBanner, #header').addClass('swanimate');
    setTimeout(function() {
        window.location = 'https://belowaverage.org/webdows/'; 
    }, 2500);
}
$('#sb').click(startAnimation);
if(typeof mem.Home.hash !== 'undefined') {
    if(typeof mem.Home.hash.start !== 'undefined') {
        startAnimation();
    }
}