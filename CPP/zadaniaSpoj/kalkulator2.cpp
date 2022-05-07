#include <iostream>

using namespace std;
char z;
int a=0, b=0;
string tekst;
int liczby[10];

int main()
{
    while(cin >> z)
    {
        cin >> a >> b;
        if(z == '+')
        {
            cout << liczby[a] + liczby[b] << endl;
        }
        else if(z == '-')
        {
            cout << liczby[a] - liczby[b] << endl;
        }
        else if(z == '*')
        {
            cout << liczby[a] * liczby[b] << endl;
        }
        else if (z == '/')
        {
            cout << liczby[a] / liczby[b] << endl;
        }
         else if (z == '%')
        {
            cout << liczby[a] % liczby[b] << endl;
        }
        else 
        {
            liczby[a] = b;
        }     
    }
    return 0;
}