#include <iostream>

using namespace std;
int ile_petli;
int n;
int silnia = 1;
int dziesiatki;
int jednosci;

int main()
{
    cin >> ile_petli;
    for(int i=0; i<ile_petli; i++)
    {
        cin >> n;
        if(n >= 10)
        {
            cout << "0 0" << endl;    
        }
        else if ((n <= 1)&&(n >= 0))
        {
            cout << "0 1" << endl;           
        }
        else
        {
            for(int j=2; j <= n; j++)
            {
                
                silnia *= j;
                
            }
                cout<<(silnia%100)/10<<" "<<silnia%10<<"\n"; 
                silnia=1;    
        }
    }
    return 0;
}