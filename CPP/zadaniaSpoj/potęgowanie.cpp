#include <iostream>

using namespace std;

int ile_petli;
int podstawa;
int wykladnik;
int wynik;

int main()
{
    cin >> ile_petli;
    for(int i=0; i<ile_petli; i++)
    {
        cin >> podstawa >> wykladnik;
        podstawa %= 10;
        if(wykladnik > 0)
        {
            if( wykladnik % 4 == 0)
            {
                wykladnik = 4;
            }
            else
            {
                wykladnik = wykladnik % 4;
            }
            int wynik = podstawa;
            for(int j = 1; j < wykladnik; j++)
            {
                wynik *= podstawa;
            }
            wynik = wynik % 10;
            cout << wynik << endl;
        }
        else
        {
            cout << "1" << endl;
        }
    }
    return 0;
}