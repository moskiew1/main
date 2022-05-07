#include <iostream>

using namespace std;

class Pytanie
{
    public:

    string tresc;
    string a,b,c,d;
    int nr_pytania;
    string poprawna;
    string odpowiedz;
    int punkt;

    void wczytaj();  //wczytuje pytanie z pliku
    void zadaj();   // pokazuje pytanie i czyta odpowiedz
    void sprawdz();  // sprawdza poprawna odpowiedz

};