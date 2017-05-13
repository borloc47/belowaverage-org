$.getJSON('config/pages/Projects.json', function(data) {
	$.each(data, function(k) {
		var html = '<span class="proj"><img src="'+this.background+'"><div class="head"><div class="ttl">'+k+'</div><div class="slogan">'+this.slogan+'</div></div><div class="links">';
		$.each(this.links, function(k) {
			if(typeof this.target == 'undefined') {
				this.target = '';
			}
			html = html + '<a class="'+this.class+'" target="'+this.target+'" href="'+this.href+'">'+k+'</a>';
		});
		html = html + '</div></span>';
		$('#projs').append(html);
	});
});