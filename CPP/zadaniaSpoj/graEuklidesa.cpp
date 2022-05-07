#include <iostream>

using namespace std;

int ile_partii;
int gracz_A;
int gracz_B;

int main()
{
    cin >> ile_partii;
    for(int i=0; i < ile_partii; i++)
    {
        cin >> gracz_A >> gracz_B;
        while(!(gracz_A == gracz_B))
        {
            if(gracz_A > gracz_B)
            {
                gracz_A = gracz_A - gracz_B;
            }
            else if(gracz_A < gracz_B)
            {
                gracz_B = gracz_B - gracz_A;
            }
        }

        cout << gracz_A + gracz_B << endl;
    }
    return 0;
}