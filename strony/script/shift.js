$(function () {
    var redakcja=[];
    $.getJSON("data/data_redaktorzy.json", function(results) {
        $.each(results, function (index, r) {
            var index2 = index.substring(7);
            redakcja[index2] ={imie: r.imie, dzial: r.dzial, wiek: r.wiek, zainteresowania: r.zainteresowania, skad: r.skad, IDRedaktora: r.IDRedaktora};

        });

    });
    function dodajZdjecia() {
        $.getJSON("data/data_zdjecia.json", function (results) {
            $.each(results, function (index, r) {
                var index2 = index.substring(7);
                $("." + index2 + " div img").attr("src", r.src);
            });
        });
    }

    var redaktor = "";
    var pomoc = "";
    var tytul = "";


    function title(naglowek) {
        tytul = $(naglowek).html();
        $("#top_header h2").html(tytul);
    }

    function ustaw(redakcja) {
        redaktor = "<article class=\"" + i + "\"> <header> <p>" + redakcja[i].imie + "</p> </header>" +
		"<div class=\"obr\"> <img alt=\"" + redakcja[i].imie + "\" class=\"img-thumbnail\">" +
		"</div> <table class=\"table table-striped tab\">  <tr> <th>Wiek</th> <td>" + redakcja[i].wiek + "</td> </tr> <tr>" +
		"<th>zainteresowania</th> <td>" + redakcja[i].zainteresowania + "</td> </tr> <tr> <th>skąd</th> <td>" + redakcja[i].skad + "</td> </tr> <tr> <th>IDRedaktora</th>" +
		"<td>" + redakcja[i].IDRedaktora + "</td> </tr>  </table> <footer> <p><a href=\"#\" class=\"btn btn-success btn-lg zglos\" id=\"" + redakcja[i].IDRedaktora + "\">Zgłoś</a></p>" +
		"</div></footer> </article>";
        pomoc += redaktor;
        $("#articles").html(pomoc);
        dodajZdjecia();

    }



    main = $('#wrapper').html();
    $('#work, #politics,#music,#misc,#all,#main_page').click(function () {
        if(this.id === 'main_page') {
            $('#big_wrapper').html(main);
        }
        if (this.id === 'work') {
            pomoc = "";
            title(this);
            for (i = 0; i < redakcja.length; i++) {
                if (redakcja[i].dzial === "Praca") {
                    ustaw(redakcja);
                }
            }
        }
        else if (this.id == 'politics') {
            pomoc = "";
            title(this);
            for (i = 0; i < redakcja.length; i++) {
                if (redakcja[i].dzial === "Polityka") {
                    ustaw(redakcja);

                }

            }
        }
        else if (this.id == 'music') {
            pomoc = "";
            title(this);
            for (i = 0; i < redakcja.length; i++) {
                if (redakcja[i].dzial === "Muzyka") {
                    ustaw(redakcja);
                }
            }
        }
        else if (this.id == 'misc') {
            pomoc = "";
            title(this);
            for (i = 0; i < redakcja.length; i++) {

                if (redakcja[i].dzial != "Polityka" && redakcja[i].dzial != "Praca" && redakcja[i].dzial != "Muzyka") {
                    ustaw(redakcja);
                }

            }
        }
        else if (this.id === 'all') {
            title(this);
            pomoc = "";
            for (i = 0; i < redakcja.length; i++) {

                redaktor = "<article class=\"" + i + "\"> <header> <p>" + redakcja[i].imie + "</p> </header>" +
                "<div class=\"obr\"> <img alt=\"" + redakcja[i].imie + "\" class=\"img-thumbnail\">" +
                "</div> <table class=\"table table-striped tab\"> <tr> <th>dział</th> <td>" + redakcja[i].dzial + "</td> </tr>  <tr> <th>Wielkość</th> <td>" + redakcja[i].wiek + "</td> </tr> <tr>" +
                "<th>zainteresowania</th> <td>" + redakcja[i].zainteresowania + "</td> </tr> <tr> <th>skad</th> <td>" + redakcja[i].skad + "</td> </tr> <tr> <th>IDRedaktora</th>" +
                "<td>" + redakcja[i].IDRedaktora + "</td> </tr>  </table> <footer>" +
				"<p><a href=\"#\" class=\"btn btn-success btn-lg zglos\" id=\"" + redakcja[i].IDRedaktora + "\">Zgłoś</a></p>" +
                "</footer> </article>";

                pomoc = pomoc + redaktor;
                $("#articles").html(pomoc);

                dodajZdjecia();
            };

        }
        zgloszono();
    });

    function zgloszono() {
        $('.zglos').click(function () {
            $('#main_section').hide();
            $('#belkaboczna').hide();
            $("#formularzkontaktowy").show();
            $('#work, #politics,#music,#misc,#all').click(function () {
                $('#main_section').show();
                $('#belkaboczna').show();
                $("#formularzkontaktowy").hide();
            });
            for (i = 0; i < redakcja.length; i++) {

                if (this.id === redakcja[i].IDRedaktora.toString()) {
                    $("#wybrany").val(redakcja[i].imie);
                }
            }

        });
    }


});