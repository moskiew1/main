#include <iostream>


int uczniowie, cukierki, x, y;

using namespace std;


int main()
{
    cout << "Ilu uczniow jest w twojej klasie: ";
    cin >> uczniowie;

    cout << "ile cukierkow kupila mama? :";
    cin>> cukierki;

    x = cukierki / (uczniowie-1);
    cout << "Cukierkow dla kazdego ucznia: " << x;

    y = cukierki-x*(uczniowie-1);
    cout << endl << "Dla Jasia na wieczor: " << y ;
}