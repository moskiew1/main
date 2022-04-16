#include <iostream>
#include "Uzytkownik.h"
#include <cstdlib>
#include <algorithm>
#include <string>
#include <fstream>

using namespace std;

int opcja;
string dodaj_uzytkownika;
string linia;


int main()
{

    for (;;)
    {
        cout << "1. Dodaj uzytkownika" << endl;
        cout << "2. Sprawdz liste uzytkownikow" << endl;
        cout << "3. Zakoncz dodawanie" << endl;
        cin >> opcja;


    if (opcja == 1)
    {
        Uzytkownik u1;
        u1.dodaj_uzytkownika();
        u1.zapisanie_uzytkownika();
    } 
    else if (opcja == 2)
    {
        Uzytkownik u1;
        u1.wypisanie_listy();  
    } 
    else if (opcja == 3)
    {
        cout << " Wybrales inna opcje ciulu!";
        return 0;
    }
        
    }
}