#include <iostream>

using namespace std;

string tablica;
int ile;
int suma;

int main()
{
    cin >> ile;
    for(int i = 0; i < ile; i++)
    {
        cin >> tablica;
        suma=
                (tablica[0]-'0')+
                (tablica[1]-'0')*3+
                (tablica[2]-'0')*7+
                (tablica[3]-'0')*9+
                (tablica[4]-'0')+
                (tablica[5]-'0')*3+
                (tablica[6]-'0')*7+
                (tablica[7]-'0')*9+
                (tablica[8]-'0')+
                (tablica[9]-'0')*3+
                (tablica[10]-'0'); 
                
            if(suma>0)
            {
                if(suma%10==0)
                {
                    cout<<"D" << endl;
                }
                else
                {
                    cout<<"N" << endl;
                }
            } 
    }
}