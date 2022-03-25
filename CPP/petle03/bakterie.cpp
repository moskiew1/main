#include <iostream>

using namespace std;

int bakteria = 1; int godzina = 0;

int main()
{
    while(bakteria <= 1000000)
    {
    godzina = godzina + 1;
    bakteria = bakteria * 2;

    cout << "Minelo godzin: " << godzina << endl;
    cout << "Ilosc bakterii: " << bakteria << endl;
    }
}