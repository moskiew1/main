#include <iostream>

using namespace std;
int wiek;

int main()
{
    cout << "Ile msz lat: ";
    cin >> wiek;

    if(wiek < 18)
    {
        cout << "Nie jestes pelnoletni i nie mozesz zostac prezydentem";
    }
    else if((wiek >= 18) && (wiek < 35))
    {
        cout << "Jestes pelnoletni, ale nie mozesz zostac prezydentem";
    }
    else
    {
        cout << "Jestes pelnoletni i mozesz zostac Prezydentem!";
    }
}