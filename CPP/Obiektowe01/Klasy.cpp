#include <iostream>

using namespace std;

class Zwierze
{
    public:

    string gatunek;
    string imie;
    int wiek;

    void dodaj_zwierze()
    {
        cout << " Dodawanie nowego zwierzęcia do bazy" << endl;
        cout << " Podaj gatunek: ";
        cin >> gatunek;
        cout << "Podaj imie: ";
        cin >> imie;
        cout << "Podaj wiek: ";
        cin >> wiek;
    }

    void daj_glos()
    {
        if(gatunek=="kot") cout << imie << "lat: " << wiek << ": Miau!";
        else if (gatunek=="koza") cout << imie << "lat: " << wiek << ": Beee!";
        else if (gatunek=="krowa") cout << imie << "lat: " << wiek << ": Muuu!";
        else cout << "Nieznany gatunek!";
    }
};

int main()
{
     Zwierze z1;
     z1.dodaj_zwierze();
     z1.daj_glos();

     Zwierze z2;

}