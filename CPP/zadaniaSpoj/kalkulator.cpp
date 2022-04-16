#include <iostream>

using namespace std;
char z;
int a=0, b=0;

int main()
{
    while(cin >> z)
    {
        cin >> a >> b;
        if(z == '+')
        {
            cout << a + b << endl;
        }
        else if(z == '-')
        {
            cout << a - b << endl;
        }
        else if(z == '*')
        {
            cout << a * b << endl;
        }
        else if (z == '/')
        {
            cout << a / b << endl;
        }
        else 
        {
            cout << a % b << endl;
        }     
    }
    return 0;
}