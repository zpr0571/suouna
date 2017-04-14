var uname=window.localStorage.getItem('uname');
		if (uname==null) {
		}else{
		$('#spn').html('<span>'+uname+'</span>');
		$('#spnn').html('<a>注销<a>');
		 window.localStorage.clear();
		 // window.location.reload();
		 $('#spnn').click(function() {
		 	window.location.reload();
		 })
		}