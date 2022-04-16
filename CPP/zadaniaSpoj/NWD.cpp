#include <iostream>

using namespace std;
int a, b, ile;

void NWD(int a, int b)
{
    while(b!=0)
    {
        int c = a % b;
        a = b;
        b = c;
    }
    cout << a;
}

int main()
{
    cin >> ile;
    for(int i=0; i < ile; i++)
    {
        cin >> a >> b;
        NWD(a,b);
        cout << endl; 
    }
    return 0;
}