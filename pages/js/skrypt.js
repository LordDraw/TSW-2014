$(function(){
    var stronaglowna = $('#stronaglowna').html(); //skopiowanie treści ze strony głównej
    var dalej ="<br>Nasz serwis internetowy ruszył w dniu dzisiejszym<br>";
    var kontakt = "Możecie się z nami skontaktować poprzez adres e-mail:";
    var about = "Strona zrobiona przez: Paweł Karczewski";
    var $contact = $('#kontakt');
    var $about = $('#about');
    var $thefooter = $('#footer').html();
 //  $('body').css('color','red'); //ustaw kolor w body na "red"
    function dalej(){
        $("#container").append(dalej);
        $("#container").html(dalej);

  //     $('body').css('color','blue');
    } 
    $('#more').click(function(){ //kliknięcie na przycisk o id "more" spowoduje
        $('.row').html(""); // wyczyszczenie zawartości od podanego poziomu w deklaracji
		$(".row").append("<div class='span4'><h2>" +dalej + "</h2>" + "<p>" + "Nasz serwis internetowy ruszył w dniu dzisiejszym." + "</p>" + "mamy nadzieję, że wam się spodoba" +"</div>");
     
    //    $('body').css('color','blue');

    })

    $('#mainpage').click(function(){
      $("#stronaglowna").html(stronaglowna);
        $('#more').click(function(){
                $('#stronaglowna').html("");

            $(".row").append(dalej);
            $(".row").html(dalej +"html");


        })
    })
    
    $('#more').click(function(){
        if(this.id === "mainpage"){
            $("#stronaglowna").html(stronaglowna);

        } 
     //   if(this.id === "more"){

        //    $(".row").append(dalej);
        //    $(".row").html(dalej +"Mamy nadzieję, że wam się spodoba");

       //     $('body').css('color','blue');
     //   }
    })

    		$contact.click(function(){
    			$('.row').html("");
    			$('.row').append("<div class='span4'><h5>" + kontakt + "</h5>" + "admin@testowastrona.pl" + "</div>");

    		})

    		$about.click(function(){
    			$('.row').html("");
    			$('.row').append("<div class='span4'><h5>" + about);
    		})


    	 $('#mainpage').click(function(){
     	 $("#stronaglowna").html(stronaglowna);
         $('#more').click(function(){

            $(".row").append(dalej);
            $(".row").html(dalej);

        })
    })

});