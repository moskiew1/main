function sprawdz()
        {
            
            
            
            
            //document.getElementById('jakaliczba').innerHTML = 'Podałeś: ' + liczba + ' ' + 'Liczba losowa to: ' + losowa;
            while(true)
            {
                
                var liczba = document.getElementById("okno").value;
                if (liczba < losowa)
                {
                    document.getElementById('wynik').innerHTML = "Liczba jest za mała";
                }
                else if( liczba > losowa)
                {
                    document.getElementById('wynik').innerHTML = "Liczba jest za duża";
                }
                else
                {
                    document.getElementById('wynik').innerHTML = "Brawo! Udało Ci się odgadnąć Liczbę!";
                }
                
            }          
        }