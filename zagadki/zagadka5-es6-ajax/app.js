/*

-za pomoca ajaxa pobierz json z adresu:
http://domanart.pl/CODERS/zagadki/zagadka-es6/zadanie.json

1) W tym json jest tylko jedna właściwość. Odwołaj się do niej

2) zrob petle po tej tablicy. W swoim kodzie nie stosuj ani słowa var, ani pętli for i while

zanim zaczniesz tworzyc rysunek koncowy, musisz naprawic ta tablice, bo jest bledna:
* zamien wszystkie ujemne liczby na ich dodatnie odpowiedniki np. -2 na 2
* przekonwertuj wszystkie liczby na o 1 mniejsze (4 na 3, 5 na 4 itp)
* usun wszystkie liczby, ktore sa wieksze badz rowne 13

3) no dobra w tym momencie powinienes miec oczyszczoną ze smieci tablice 2d
przykładowo:
tab[0] = [9,9,9,9,9,...],
tab[3] = [6,6,6,6,6....]
Mini podpowiedź: jej dlugosc to 38, a dlugosc pierwszej podtablicy to 66

4) zrob po niej petle
* dla kazdej wartosci w tych podtablicach wstawiaj do elementu .canvas div, 
ktoremu ustawisz backgorund o kolorze pobranym z tablicy colors o indeksie ktory pobrales z oczyszczonej tablicy. 
Nie używaj do tego innerHTML, a odpowiednie metody i właściwości
Po każdej pętli po podtablicy, wstawiac do canvas <br>. Tutaj też nie korzystaj z innerHTML

Rozwiązanie: podaj nazwę bohatera.

5*) Hej. To nie koniec :) Skoro już wiesz kto jest tajemniczą postacią, spróbuj wykonać dodatkowe zadanie:
* nie ruszając HTML dodaj do strony button z tekstem "Zmień mnie"
* Po kliknięciu na ten button zmień kolor bohatera np na czerwony.
* W tym punkcie możesz już użyć pętli for. Ewentualnie jeżeli chcesz się trzymać forEach w tym punkcie,
    przeczytaj to: https://css-tricks.com/snippets/javascript/loop-queryselectorall-matches/
* Nasz bohater składa się z odcieni, więc będziesz musiał zmienić kilka kolorów. Polecam
    skorzystać z konsoli by sprawdzić kolory...

Jeżeli uda ci się zrobić powyższe zadanie, więcej nie mam pytań.    

*/


const colors = ["#ffffff","#46AFFF","#0094FF","#0074C9","#006AB9","#81C60D","#0AC61F","#007F0E","#F59BFF","#F7BCFF","#000000","#F06FFF"]


