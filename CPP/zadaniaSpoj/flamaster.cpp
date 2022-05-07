#include <iostream>

using namespace std;
int c;
string tekst;

int main()
{
    cin >> c;
    for(int i=0; i < c; i++)
    {
        cin >> tekst;
        string wynik ="";
        int ile = 1, j = 0;
        while(j < tekst.length())
        {
            ile = 1;
            char aktualnyZnak = tekst[j];
            j++;
            for(; j < tekst.length() && tekst[j] == aktualnyZnak; j++)
            {
                ile++;
            }
            if(ile == 1)
            {
                wynik += aktualnyZnak;
            }
            else if(ile == 2)
            {
                wynik += aktualnyZnak;
                wynik += aktualnyZnak;
            }
            else
            {
                wynik += aktualnyZnak + to_string(ile); 
            }
        }
        cout << wynik << endl;
    }
    return 0;
}