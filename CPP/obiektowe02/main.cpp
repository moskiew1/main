#include <iostream>
#include "pytania.h"

using namespace std;

int main()
{
    Pytanie p[5];
   int suma=0;
   for(int i=0; i<=4; i++)
   {
    Pytanie p1;
    p1.nr_pytania = 1;
    p1.wczytaj();
    p1.zadaj();
    p1.sprawdz();
   }

       cout<<"KONIEC QUIZU! PUNKTY = "<<suma;

   return 0;
}