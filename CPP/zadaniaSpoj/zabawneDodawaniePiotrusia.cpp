#include <iostream>
#include <cstdlib>
#include <string>

using namespace std;

int ile;


int main()
{
    cin >> ile;
    for(int i=0; i<ile; i++)
    {
        string tekst;
        cin >> tekst;
        int liczba = atoi(tekst.c_str());
        int odwrotnosc = 0;
        string tekst2 = "";
        int ile_prob = 0;

        do 
        {
            for (int i = tekst.length() - 1; i>=0; i--)
            {
                tekst2 += tekst[i];
            }
            int odwrotnosc = atoi(tekst2.c_str());
            
            if(liczba == odwrotnosc)
            {
                break;
            }
            ile_prob++;
            liczba += odwrotnosc;
             
            tekst = to_string(liczba);
            tekst2 = "";
        }while(true);
        cout << liczba << " " << ile_prob << endl;      
    }
  return 0;  
}