#include <iostream>

using namespace std;
int testy;
int n;
int liczby;
int tablica;

int main()
{
    //cout << "Podaj liczbe testow: ";
    cin >> testy;
    for(int i=0; i<testy; i++)
    {
        //cout << "Podaj ilosc liczb: ";
        cin >> n;

        int *tablica;
        tablica = new int [n];

        for (int i = 0; i < n; i++)
        {
            //cout << "Podaj liczbe " << i+1 << ":";
            cin >> tablica[i];
        }

        for(int i=n-1; i>=0; i--)
        {
            cout << tablica[i] << " ";
        }
        cout << endl;
        delete[]tablica;
    }
}