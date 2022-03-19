#include <iostream>
#include <string>
#include <algorithm>


using namespace std;

int main()
{   //klejenie stringów

    string jeden = " Ala ma ";
    string dwa = "ma kota";

    string trzy = jeden + dwa;
    cout << trzy;

    //zmiana wielkości liter
    string napis = "Ala ma kota";

    transform(napis.begin(), napis.end(), napis.begin(), ::toupper);
    cout << napis;

    transform(napis.begin(), napis.end(), napis.begin(), ::tolower);
    cout << napis;

    // znajdowanie frazy w łańcuchu

    string napis1 = "Ala ma kota";
    string szukaj = "kot";

    size_t pozycja = napis1.find(szukaj);

    if (pozycja != string::npos)
        cout << "Znaleziono na pozycji: " << pozycja;
    else
        cout << "Nie znaleziono!";

    // Kasowanie części napisów

    String napis2 = "Ala ma kota";
    napis2.erase(3,3);
    cout << napis2;

    //wstawianie do istniejącego napisu 

    string napis3 = "Ala ma kota";
    napis.insert(11, "Filemona");
    cout << napis3;

    // zastąpienie fragmentu łańcucha

    string napis4 = "Ala ma kota";
    napis.replace(4, 2, "nie ma");
    cout << napis4;

    //wyciagnięcie fragmentu łańcucha

    string napis5 = "Ala ma kota";
    string nowynapis = napis5.substr(4, 7);

    cout << nowynapis;
}
    

