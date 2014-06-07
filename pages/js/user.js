$(function(){
	var socket = io.connect();
	var $nickForm = $('#setNick');
	var $nickError = $('#nickError');
	var $nickBox = $('#nickname');
	var $user = $('#user');
    var $logout = $('#wylogujsie');
    var $pass = $('#passwd');
    var $login = $('#login');
	
	$nickForm.submit(function(e){
		e.preventDefault();
        if($nickBox.val()==="admin"){
            $pass.show( function() {
                if($pass.val()==="123") {
                    $("#panelAdmina").css("visibility", "visible");
                    
				$nickForm.hide();
				$nickError.hide();
				$user.show();
				$logout.show()
                }
            });
        }
        


			
	});
	
	socket.on('usernames',function(data){
		
		$user.html(data);
		//$user.html(data.count+ "sss"  + i + data.nick.length-1 );
		// + data.nick[data.count + data.nick.length-1]
		

	});

});