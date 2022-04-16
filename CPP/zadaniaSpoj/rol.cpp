#include <iostream>

using namespace std;
int ile_petli, ile_liczb;
int tablica[101];

int main()
{
    cin >> ile_petli;
    for(int i=0; i<ile_petli; i++)
    {
        cin >> ile_liczb;
        for(int i=0; i<ile_liczb; i++)
        {
            cin >> tablica[i];
        }

        for(int i = 1; i < ile_liczb; i++)
        {
            cout << tablica[i] << " ";
        }
        cout << tablica[0] << endl;
    }
    return 0;
}