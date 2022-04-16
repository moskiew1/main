#include <iostream>

using namespace std;
int t;
int ilosc_cyfr;
int cyfra;
int suma;

int main()
{   
    cin >> t;
    for(int i=0; i<t; i++)
    {
        cin >> ilosc_cyfr;
        for(int x=0; x<ilosc_cyfr; x++)
        {
            cin >> cyfra;
            suma += cyfra;
        }
        cout << suma << endl;
        suma =0;
    }
      
    return 0;
}