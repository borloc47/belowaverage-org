$.getJSON('config/pages/Gallery.json', function(data) {
    var picCount = 0;
    $.each(data, function(k) {
        picCount++;
        $('#tab .bWrap').append('<a href="#Gallery,view.'+k+'" class="gal p'+picCount+'"><div class="ttl">'+k+'</div></a>');
        var count = 0;
        $.each(this, function(key) {
            count++;
            $('#tab .bWrap a.p'+picCount).append('<div class="img p'+count+'" style="background-image:url(\'https://api.belowaverage.org/v1/thumb/?size=x130&src='+encodeURIComponent(''+mem.main.thumbDomain+'/static/img/gallery/'+k+'/'+key)+'\');"></div>');
            if(count == 3) {
                return false;
            }
        });
    });
    mem.Gallery.data = data;
    $.get('static/pages/Gallery/slides.js', function(slides) {
        mem.Gallery.html = $('#tab').html();
        mem.Gallery.js = slides;
    });
});