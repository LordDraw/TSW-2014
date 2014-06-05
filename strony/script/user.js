$(function(){
	var socket = io.connect();
	var $nickForm = $('#setNick');
	var $nickError = $('#nickError');
	var $nickBox = $('#nickname');
	var $user = $('#user');
    var $logout = $('#logout');
    var $pass = $('#pass');
	
	$nickForm.submit(function(e){
		e.preventDefault();
        if($nickBox.val()==="janders"){
            $pass.show( function() {
                if($pass.val()==="ppp") {
                    $("#ACP").css("visibility", "visible");
                }
            });
        }
        if($nickBox.val()==="aslowinski"){
            $pass.show( function() {
                if($pass.val()==="aaa") {
                    $("#ACP").css("visibility", "visible");
                }
            });
        }
        if($nickBox.val()==="jkowalski"){
            $pass.show( function() {
                if($pass.val()==="bbb") {
                    $("#ACP").css("visibility", "visible");
                }
            });
        }
        if($nickBox.val()==="jnowak"){
            $pass.show( function() {
                if($pass.val()==="ccc") {
                    $("#ACP").css("visibility", "visible");
                }
            });
        }
        if($nickBox.val()==="hbur"){
            $pass.show( function() {
                if($pass.val()==="ddd") {
                    $("#ACP").css("visibility", "visible");
                }
            });
        }
        if($nickBox.val()==="ikos"){
            $pass.show( function() {
                if($pass.val()==="eee") {
                    $("#ACP").css("visibility", "visible");
                }
            });
        }
        if($nickBox.val()==="hmazur"){
            $pass.show( function() {
                if($pass.val()==="fff") {
                    $("#ACP").css("visibility", "visible");
                }
            });
        }
        if($nickBox.val()==="gsz"){
            $pass.show( function() {
                if($pass.val()==="ggg") {
                    $("#ACP").css("visibility", "visible");
                }
            });
        }
        else
        {socket.emit('new user', $nickBox.val(), function(data){
			if(data){
				$nickForm.hide();
				$nickError.hide();
				$user.show();
                $logout.show();
			} else{
				$nickError.html('Ten login jest obecnie używany. Spróbuj ponownie');
			}
		});
            $nickBox.val('');
        }


			
	});
	
	socket.on('usernames',function(data){
		
		$user.html(data);
		//$user.html(data.count+ "sss"  + i + data.nick.length-1 );
		// + data.nick[data.count + data.nick.length-1]
		

	});

});