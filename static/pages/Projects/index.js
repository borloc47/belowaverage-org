function draw(data) {
	$.each(data, function(k) {
		var exp = '';
		var body = '';
		if(typeof mem.Projects.hash.more == 'string' && mem.Projects.hash.more == k) {
			exp = 'expanded';
			body = this.expand;
		}
		var html = '<span project="'+k+'" class="proj '+exp+'"><img src="'+this.background+'"><div class="head"><div class="ttl">'+k+'</div><div class="slogan">'+this.slogan+'</div>';
		html = html + body;
		html = html + '</div><div class="links">';
		$.each(this.links, function(k) {
			if(typeof this.target == 'undefined') {
				this.target = '';
			}
			html = html + '<a class="'+this.class+'" target="'+this.target+'" href="'+this.href+'">'+k+'</a>';
		});
		if(typeof this.expand == 'string') {
			if(typeof mem.Projects.hash.more == 'string') {
				html = html + '<a href="#Projects">Less</a>';
			} else {
				html = html + '<a href="#Projects,more.'+k+'">More</a>';
			}
		}
		html = html + '</div></span>';
		$('#projs').append(html);
	});
}
if(typeof mem.Projects.config == 'object') {
	draw(mem.Projects.config);
} else {
	$.getJSON('config/pages/Projects.json', function(data) {
		mem.Projects.config = data;
		draw(data);
	});
}