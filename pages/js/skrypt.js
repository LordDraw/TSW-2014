$(function(){
    var stronaglowna = $('#stronaglowna').html(); //skopiowanie treści ze strony głównej
    var dalej ="<br>dalej<br>";
   $('body').css('color','red'); //ustaw kolor w body na "red"
    function dalej(){
        $("#container").html(dalej);
        $("#container").append(dalej);

        $('body').css('color','blue');
    } 
    $('#more').click(function(){ //kliknięcie na przycisk o id "more" spowoduje
        $('#stronaglowna').html("");

        $(".row").append("<div class='span4'><h2>" +dalej + "</h2>" + "<p>" + "Nowy tekst" + "</p></div>");
        $(".row").html(dalej 1+"html");
        $(".row")
        $('body').css('color','blue');

    })

    $('#mainpage').click(function(){
      $("#stronaglowna").html(stronaglowna);
        $('#more').click(function(){
            //    $('#stronaglowna').html("");

            $(".row").append(dalej);
            $(".row").html(dalej +"html");

      //      $('body').css('color','blue');

        })
    })
    
    $('#mainpage,#more').click(function(){
        if(this.id === "mainpage"){
            $("#stronaglowna").html(stronaglowna);

        }
        if(this.id === "more"){

            $(".row").append(dalej);
            $(".row").html(dalej +"html");

            $('body').css('color','blue');
        }
    })
    

});