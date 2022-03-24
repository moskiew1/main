#include <iostream>

using namespace std;

string PIN;


int main()
{
    cout << "Witaj w naszym Banku" << endl;
    cout << "Podaj numer PIN";
    cin >> PIN;

    if(PIN == "1729")
    {
        cout << " Poprawny PIN";
    }
    else
    {
        cout<< "Nie poprawny PIN";
    }

    return 0;
}