#include <iostream>

using namespace std;

int ile_petli;


int main()
{
    cin >> ile_petli;
    for(int i=0; i < ile_petli; i++)
    {
        string ciag;
        cin >> ciag;
        int dlugosc =ciag.length() / 2;
        
        for(int i=0 ; i < dlugosc; i++)
        {
            cout << ciag[i];
        }
        cout << endl;

    }
    return 0;
}