#include <iostream>
#include <fstream>
#include <cstdlib>
#include <algorithm>
#include <string>

using namespace std;
string imie, nazwisko, miasto;
int wiek;

class Uzytkownik
{
    public:
    string imie, nazwisko, miasto;
    int wiek;
    
    
   void dodaj_uzytkownika()
   {
        cout << "Podaj swoje imie: ";
        cin >> imie;
        cout << "Podaj swoje nazwisko: ";
        cin >> nazwisko;
        cout << "Podaj miasto: ";
        cin >> miasto;
        cout << "Podaj swoj wiek: ";
        cin >> wiek;
   }

   void zapisanie_uzytkownika()
   {
        fstream plik;   
        plik.open("lista.txt", ios::out | ios::app);

        plik << imie << endl;
        plik << nazwisko << endl;
        plik << miasto << endl;
        plik << wiek << endl;

        plik.close();
   }

   void wypisanie_listy()
   {
        fstream plik;
        plik.open("lista.txt", ios::in );

        if(plik.good()== false)
        {
            cout << "Plik nie istnieje";
            exit (0); 
        }

        string linia;
        int nr_lini=1;
        while(getline(plik,linia))
        {   
            switch (nr_lini)
            {
            case 1: imie = linia; 
                break;
            case 2: nazwisko = linia;
                break;
            case 3: miasto = linia;
                break;
            case 4: wiek = atoi(linia.c_str());
                break;
            }
            nr_lini++;
        }
        plik.close();
        for(int i = 1; i<+nr_lini;i++)
        {
        cout << imie << "   ";
        cout << nazwisko << "   ";
        cout << miasto << "    ";
        cout << wiek << endl;
        }
   }
};
