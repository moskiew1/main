#include <iostream>
#include <windows.h>
#include <time.h>

using namespace std;

int liczba;

int main()
{
    cout << "Witaj w losowaniu za trzy sekundy nastapi zwolnienei blokady";
    Sleep(3000);
    srand(time(NULL));

    for (int i=1; 1 <= 6; i++)
    {       
    liczba = rand() % 49 + 1;
    Sleep(1000);
    cout << liczba << "\a" << endl;
    }

}