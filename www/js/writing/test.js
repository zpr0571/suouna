$(document).ready(function(){
	$('.carousel').carousel();
	$('.footer').load('templates/common-footer.html');
	$a_list = $('.change').find('a');
	$a_list.each(function(i){
		i=i+1;
		$(this).click(function(){
			console.log(i);
			$.getJSON('php/test.php',{a: '分',id: i},function(data){
				console.log(data);
				var html = '';
				data.forEach(function(item){
					html+=
					'<div>'+
	   				'<span>'+item.explain+'</span>'+
	           ' <a href="#/tab/zuopin_detail/'+item.id+'/'+item.explain+'">'+
	             ' <img src="'+item.img+'"/>'+
	           ' </a>'+
	   				'</div>'
				})
			$('.m_content').html(html);
			})
		})
	})
})