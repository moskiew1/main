#include <iostream>
#include <math.h>
#include <cstdio>

using namespace std;
double ile;
double k;
double n;

double Newton(double n, double k)
{
    double wynik = 1;
    for(int i=1; i<=k; i++)
    {
        wynik = (wynik * (n - i + 1)) / i;
    }
    return round(wynik);
}

int main()
{
    cin >> ile;
    for(int i=0; i<ile; i++)
    {
        cin >> n >> k;
        cout << Newton(n,k) << endl;
    }
    return 0;
}