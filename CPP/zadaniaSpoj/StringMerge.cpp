#include <iostream>

using namespace std;
int ile;
string a,b;

string marge(string a, string b)
{
    string c;
    if(a.length() <= b.length())
    {
        for(int i=0, j=0; i < a.length(); i++, j++)
        {
            c += a[i];
            c += b[i];
        }   
    }
    else
    {
        for(int i=0, j=0; i < b.length(); i++, j++)
        {
            c += a[i];
            c += b[i];
        }
    }
    return c;
}

int main()
{
    cin >> ile;
    for(int i=0; i<ile; i++)
    {
        cin >> a >> b;
        cout << marge(a,b) << endl;
    }
    return 0;
}