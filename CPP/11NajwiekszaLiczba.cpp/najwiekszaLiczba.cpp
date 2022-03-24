#include <iostream>

using namespace std;

int a, b ,c;

int main()
{
    cout << "Podaj 3 liczby rozdzielone spacja; ";
    cin >> a >> b >> c;

    m = a;

    if(a > m) m = b;
    if(c > m) m = c;

    cout << "Największa liczba to: " << m;

}