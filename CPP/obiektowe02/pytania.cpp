#include <iostream>
#include "pytania.h"
#include <fstream>
#include <cstdlib>

using namespace std;

void Pytanie::wczytaj()
{
    fstream plik;
    plik.open("quiz.txt", ios::in);

    if(plik.good() == false)
    {
        cout << " nie udalo sie otworzyc pliku!";
    } 

    int nr_liniii = (nr_pytania-1)*6+1;
    int aktualny_nr = 1;
    string linia;

    while(getline(plik, linia))
    {
        if(aktualny_nr==nr_liniii) tresc=linia;
        if(aktualny_nr==nr_liniii + 1) a=linia;
        if(aktualny_nr==nr_liniii + 2) b=linia;
        if(aktualny_nr==nr_liniii + 3) c=linia;
        if(aktualny_nr==nr_liniii + 4) d=linia;
        if(aktualny_nr==nr_liniii + 5) poprawna=linia;
        
        aktualny_nr++;
    }
    plik.close();
}

void Pytanie::zadaj()
{
    cout << endl << tresc << endl;
    cout << a << endl;
    cout << b << endl;
    cout << c << endl;
    cout << d << endl;
    cout << "---------------------" << endl;
    cout << endl << "Odpowiedz: ";
    cin >> odpowiedz;
}

void Pytanie::sprawdz()
{
    if(odpowiedz == poprawna)
    {
        punkt = 1;
    }
    else punkt = 0
}