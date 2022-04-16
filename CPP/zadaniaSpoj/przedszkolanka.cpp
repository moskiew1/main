#include <iostream>

using namespace std;

int a, b, ile;

int main()
{
    cin >> ile;
    for(int i = 1; i <= ile; i++)
    {
        cin >> a >> b;
        
        for (int i = 1; i <= 10000; i++)
        {
            if((i % a == 0) && (i % b == 0))
            {
                cout << i << endl;
                break;
            }             
        }
    }
    return 0;
}