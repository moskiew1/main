#include <iostream>

using namespace std;
int N; //ilość pętli
int kierunek;
int kroki;
int suma = 0, suma1;
int T; // ilość skarbów

int main()
{
    cin >> N;
    for( int i=0; i<N; i++)
    {
        cin >> T;
        for(int j = 0; j<T; j++)
        {   
            cin >> kierunek >> kroki;
            switch(kierunek)
            {
                case 0:
                    suma += kroki;
                    break;
                case 1:
                    suma -= kroki;
                    break;
                case 2:
                    suma1 += kroki;
                    break;
                case 3:
                    suma1 -= kroki;
            } 
        }  
        if(suma != 0 || suma1 != 0)
        {
            if(suma > 0)
            {
                cout << "0 " << suma << endl;
            }
            else if(suma < 0)
            {
                cout << "1 " << abs(suma) << endl;
            }
            if(suma1 > 0)
            {
                cout << "2 " << suma1 << endl;
            }
            else if(suma1 < 0)
            {
                cout << "3 " << abs(suma1) << endl;
            }
            suma1 = 0;
            suma = 0;
        }
        else
        {
            cout << "studnia" << endl; 
        }
    }
    return 0;   
}