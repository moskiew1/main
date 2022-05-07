function odliczanie()
        {
        var dzisiaj = new Date();

        var dzien = dzisiaj.getDate();
        var miesiac = dzisiaj.getMonth() + 1;
        var rok = dzisiaj.getFullYear();

        var godzina = dzisiaj.getHours();
        if (godzina < 10) godzina = "0" + godzina;
        var minut = dzisiaj.getMinutes();
        if (minut < 10) minut = "0" + minut
        var sekunda = dzisiaj.getSeconds();
        if (sekunda < 10) sekunda = "0" + sekunda;
        
        document.getElementById("zegar").innerHTML = dzien + "/" + miesiac + "/" + rok + "|" + 
        godzina + ":" + minut + ":" + sekunda;

        setTimeout("odliczanie()",1000);
        }