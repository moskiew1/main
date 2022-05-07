#include <iostream>

using namespace std;

int t, S;

int Oblicz(int S, int P)
{
    if(S == 1)
    {
        return P;
    }
    else
    {
        if(S % 2 == 1)
        {
            return Oblicz(3 * S + 1, ++P);
        }
        else
        {
            return Oblicz(S / 2, ++P);
        }
    }
}

int main()
{
    cin >> t;
    for(int i=0; i<t; i++ )
    {   
        cin >> S;
        cout << Oblicz(S, 0) << endl;
    }
    return 0;
}