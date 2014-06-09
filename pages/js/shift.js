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


    var pomoc = "";
    var tytul = "";
    var socket = io.connect();

        function title(naglowek) {
        tytul = $(naglowek).html();
        $("#gorny_naglowek h1").html(tytul);
    }



});