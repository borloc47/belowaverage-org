if(typeof mem.Gallery.hash.view == 'string') {
    var view = mem.Gallery.hash.view;
    if(typeof mem.Gallery.data[view] == 'object') {
        var num = 0;
        var viewObj = mem.Gallery.data[view];
        if(typeof mem.Gallery.hash.num == 'string') {
            num = mem.Gallery.hash.num;
        }
        var tot = Object.keys(viewObj).length;
        var key = Object.keys(viewObj)[num];
        $('#slides').css('display','block');
        if((parseInt(num) + 1) !== 1) {
            $('#slides .butt.left').attr('href', '#Gallery,view.'+view+',num.'+(num - 1));
        } else {
            $('#slides .butt.left').attr('href', '#Gallery');
        }
        if((parseInt(num) + 1) !== tot) {
            $('#slides .butt.right').attr('href', '#Gallery,view.'+view+',num.'+(parseInt(num) + 1));
        } else {
            $('#slides .butt.right').attr('href', '#Gallery');
        }
        $('#slides #n').html((parseInt(num) + 1)+'/'+tot);
        $('#slides #t').html(view);
        $('#slides #des').html(viewObj[key]);
        $('#slides #im').css('background-image','url(\'static/img/gallery/'+view+'/'+key+'\')');
        $(document).bind('keydown', function(e){
            if (e.keyCode == 37) {
               window.location.href = $('#slides .butt.left').attr('href');
            }
            if (e.keyCode == 39) {
               window.location.href = $('#slides .butt.right').attr('href');
            }
            e.preventDefault();
        });
    }
} else {
    $('#slides').css('display','none');
    $(document).unbind('keydown');
}