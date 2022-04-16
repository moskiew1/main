#include <iostream>
#include <math.h>
#include <cmath>

using namespace std;
int ile_petli;
int czas_zaw_w_sek = 86400;     // doba przeliczona na sekundy
int ile_zaw;
int ile_ciastek_w_pudelku;
int czas_jedzenia;
float ile_ciastek_na_dobe;
float ile_pudelek;
float suma=0;



int main()
{
    //cout << "Podaj ile bedzie testow: ";
    cin >> ile_petli;

    for(int i=1; i<=ile_petli; i++)
    {  
        //cout << "Podaj ilu bedzie zawodnikow oraz ile jest ciastek w pudelku: ";
        cin >> ile_zaw >> ile_ciastek_w_pudelku;
        for(int x=0; x<ile_zaw; x++)
        {   
            //cout << "Podaj jaki jest czas spozywania ciastka: ";
            cin >> czas_jedzenia;
            ile_ciastek_na_dobe = czas_zaw_w_sek/czas_jedzenia;
            //cout << "Tyle ciastek zje na dobe: " << ile_ciastek_na_dobe << endl;
            
            suma += ile_ciastek_na_dobe;
            ile_pudelek=ceil(suma/ile_ciastek_w_pudelku);
            
            
        }
        cout << ile_pudelek <<endl;
        suma = 0;
        
    }
    
return 0;
}











                                                                                                                                                     