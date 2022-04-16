#include <iostream>
#include <cmath>

using namespace std;
;

float srednia;
int ile_liczb;
int najblizsza;

int main()
{
    int ile_petli;
    cin >> ile_petli;
    for(int i=0; i<ile_petli; i++)
    {
        float suma = 0;
        cin >> ile_liczb;
        int tablica[ile_liczb];

        for(int i=0; i <ile_liczb; i++)
        {
        cin >> tablica[i];
        suma += tablica[i];
        
        }
        
        srednia = suma / ile_liczb;
        najblizsza = tablica[0];
        for(int i=0; i < ile_liczb; i++)
        {
           if (fabs(tablica[i] - srednia) < fabs(najblizsza - srednia))
           {
                najblizsza = tablica[i];
           }

        }
        cout << najblizsza << endl;
    }
    return 0;
}