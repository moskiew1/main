#include <iostream>
#include <cstdlib>
#include <time.h>
#include <stdio.h>

using namespace std;

int liczba, strzal, ile_prob = 0;

int main()
{
    cout << "Witaj pomyslalem sobie o liczbe z zakresu od 1 do 100";
    
    srand(time(NULL));
    liczba = rand() % 100 + 1;
    

   while(strzal != liczba)
   {
       ile_prob++;

       cout << "Zgadnij jaka to liczba(to twoja " <<ile_prob<<" proba): ";
       cin >> strzal;

       if(strzal == liczba)
       cout << "Udalo sie! Wygrywasz w "<< ile_prob <<" probie" << endl;

       else if(strzal < liczba)
       cout << "Liczba jest za mała" << endl;

       else if(strzal > liczba)
       cout << "Liczba jest za duza" << endl;
   }

    getchar(); getchar();


   
}