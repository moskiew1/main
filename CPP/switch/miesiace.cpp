#include <iostream>
#include <cstdlib>

using namespace std;
int nr_miesiaca;

int main()
{
    cout << "Podaj numer miesiąca: ";
    if(!(cin >> nr_miesiaca))
    {
        cerr << "To nie jest liczna!";
        exit(0);
    }

    switch (nr_miesiaca)
    {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            cout << "Ten miesiąc ma 31 dni!";
            break;

        case 4:
        case 6:
        case 9:
        case 11:
            cout << "Ten miesiąc ma 30 dni!";
        break;

        case 2:
            {
                int rok;
                cout << "Podaj aktualny rok: ";
                cin >> rok;

                if(((rok % 4 == 0) && (rok % 100 !=0)) || (rok % 400 == 0))
                
                    cout << "Luty ma 29dni";
                 else

                    cout << "Luty ma 28dni";
            } 
        break;
        default: cout << "Niepoprawny numer miesiaca!";
    }    
}