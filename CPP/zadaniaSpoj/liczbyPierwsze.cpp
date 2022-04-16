#include <iostream>

using namespace std;

bool czy_pierwsza(int liczba)
{
    if (liczba < 2)
        return false;
    
    for(int i=2; i<liczba; i++ )
        if(liczba % i == 0)
            return false;
        
    return true;
}

int main()
{
    int n;
    int liczba;

    cin >> n;
    
        for (int i=0; i<n; i++ )
        {
            cin >> liczba;

            if(czy_pierwsza(liczba))
            {
                cout << "TAK" << endl;
            }   
            else
            {
                cout << "NIE" << endl;
            }
        }    
    return 0;
}