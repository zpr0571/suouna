$(document).ready(function(){
  $('.carousel').carousel();
  $('.header').load('templates/common.html');
  $('.footer').load('templates/common-footer.html');
  $a_list = $('.sort').find('a');
  $a_list.each(function(i){
    i=i+4;
    $(this).click(function(){
      //console.log(i);
      $.getJSON('php/test.php',{a: '分',id: i},function(data){
        console.log(data);
        var html = '';
        data.forEach(function(item){
          html+=
            '<li>'+
              '<div class="pad">'+
                '<div class="img-box">'+
                  '<a href="#/tab/kepian/video/'+item.id+'">'+
                    '<img src="'+item.img+'" alt="">'+
                  '</a>'+
                '</div>'+
                '<h3 class="f-title">'+item.explain+'</h3>'+
              '</div>'+
            '</li>'
          })
      $('.ul-list').html(html);
      })
    })
  })
})