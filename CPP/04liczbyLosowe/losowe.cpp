#include <iostream>
#include <cstdlib>
#include <time.h>

using namespace std;
int liczba, strzal, ile_prob = 0;

int main()
{
    cout << "Witaj pomyslalem sobie liczbe od 1 do 100";
    srand(time(NULL));
    liczba = rand()%100+1;

    while(strzal != liczba)
    {
        ile_prob++;

        cout << "Zgadnij jaka (to Twoja" << ile_prob <<" proba): ";
        cin >> strzal;

        if(strzal == liczba)
        {
            cout << " Udało się! Wygrywasz w " << ile_prob << " probie" << endl;
        }
        else if(strzal < liczba)
        {
            cout << "To za malo" << endl;
        }
        else if (strzal > liczba)
        {
            cout << "To za duzo" << endl;
        }
    }

    system("pause");

    return 0;
    
}