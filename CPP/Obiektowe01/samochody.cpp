#include <iostream>

using namespace std;

class Samochod
{
    public:

    string marka;
    string model;
    int rocznik;
    int przebieg;

    void dodaj_samochod()
    {
        cout << "Dodawanie nowego pojazdu do bazy" << endl;
        cout << "Podaj marke: ";
        cin >> marka;
        cout << "Podaj model: ";
        cin >> model;
        cout << "Podaj rocznik: ";
        cin >> rocznik;
        cout << "Podaj przebieg: ";
        cin >> przebieg;
    }

    void informacje()
    {
        cout << marka << endl;
        cout << model << endl;
        cout << rocznik << endl;
        cout << przebieg << endl;
    }


};

int main()
{
    Samochod model1;
    model1.dodaj_samochod();
    model1.informacje();

    Samochod model2;
    model2.dodaj_samochod();
    model2.informacje();
}