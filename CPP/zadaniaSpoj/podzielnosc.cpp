#include <iostream>

using namespace std;
int ile, a, b, c;
int wynik;

void podzielnosc(int a, int b, int c)
{
    for(int i=1; i < a ; i++)
    {
        if(i % b == 0 && i % c != 0)
        {
             cout << i << " ";
        }
    }
    
}

int main()
{
    cin >> ile;
    for(int i=0; i<ile;i++)
    {
        cin >> a >> b >> c;
        podzielnosc(a,b,c);
        cout << endl;
    }

}