#include <iostream>
#include <windows.h>
#include <cstdlib>

using namespace std;

int main()
{
    for(int i=15; i>=0; i--)
    {
        _Sleep(1000);
        system('cls');
        cout << i << endl;
    }

    cout << "Jebut!";
}