#include <iostream>

using namespace std;

int wiek;

int main()
{
    cout << " Podaj swój wiek: ";
    cin >> wiek;

    if(wiek < 18)
    {
        cout << "NIE jestes pełnoletni i nie mozesz zostac prezydentem";
    }
    else if ((wiek >= 18) && (wiek < 35))
    {
        cout << " Jesteś pełnoletni, ale nie możesz zostać prezydentem";
    }
    else 
    {
        cout << " Jesteś pełnoletni i możesz zostać prezydentem";
    }
    return 0;

}   