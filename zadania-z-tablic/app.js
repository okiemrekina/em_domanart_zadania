/*przypomnienie
-------------------------
petla for:
-------------------------
for (var i=0; i<10; i++) {
    //i to licznik
    console.log(i);
}



-------------------------
petla po tablicy
-------------------------
var tab = ["ala", "monika", "piotrek"];

for (var i=0; i<tab.length; i++) {
    //i bedzie sie zwiekszac
    //czyli bedziemy mieli
    //tab[0] === "ala"
    //tab[1] === "monika"
    //tab[2] === "piotrek"
    //czyli
    //tab[i] === za każdym przejściem pętli to kolejny element w tablicy
    //czyli wypisze "ala", "monika", "piotrek"
}
*/

/* 1) ----------------------------------------------
Stwórz pustą tablicę
Za pomocą pętli dodaj do niej 10 kolejnych liczb od 0 do 9
Wypisz tablicę w konsoli
---------------------------------------------- */



/* 2) ----------------------------------------------
Stwórz pustą tablicę
Za pomocą pętli dodaj do niej 10 randomowych liczb z przedzialu 1-10
---------------------------------------------- */


/* 3) ----------------------------------------------
Stwórz tablicę z 10 ramdomowymi liczbami z przedziału 1-10.
Wypisz w konsoli liczby większe od 5
---------------------------------------------- */



/* 4) ----------------------------------------------
Stwórz tablicę z 10 randomowymi liczbami
Wypisz w konsoli największą liczbę w tablicy
Przemyśl wcześniej jak znaleźć taką liczbę
---------------------------------------------- */



/* 5) ----------------------------------------------
Stwórz 2 proste tablice z 5 elementami (możesz z palca)
Połącz te 2 tablice w jedną NOWĄ tablicę, a następnie w konsoli wypisz nową tablicę oraz jej długość
---------------------------------------------- */



/* 6) ----------------------------------------------
Stwórz 2 tablice z 4 rożnymi słowami każda.
Sprawdź w której tablicy suma liter imion jest większa
Wynik wypisz w konsoli
---------------------------------------------- */



/* 7) ----------------------------------------------
Stwórz tablicę 10 randomowych liczb z przedziału 1-10
Wypisz w konsoli tekst:
"[ liczba1 ][ liczba2 ][ liczba3 ]" i tak dalej
Spróbuj użyć odpowiedniej metody do połączenia elementów tablic w jeden tekst
---------------------------------------------- */




/* 8) ----------------------------------------------
Stwórz tablicę 5 imion.
Wypisz w konsoli pierwsze i ostatnie imie w tablicy
Za pomocą odpowiednich metod zamień w tablicy:
Pierwsze imię na "Andrzej"
Ostatnie imię zamień na "Zenon"
---------------------------------------------- */



/* 9) ----------------------------------------------
Masz tablicę buttons z przyciskami:

var buttons = [...document.querySelectorAll('button')];

Wypisz ją w konsoli. Zrób po niej pętlę na następnie
dla każdego elementu ustaw właściwość innerText na
"Przycisk numer X" gdzie X to kolejny numer np.
buttons[0].innerText = "Przycisk numer 1"
---------------------------------------------- */
var buttons = [...document.querySelectorAll('button')];



/* 10) ----------------------------------------------
Stwórz tablicę z 5 randomowymi kolorami (z palca) - np. red, blue, yellow itp.
Za pomocą math random wylosuj losowy kolor z tej tablicy i ustaw tlo strony na ten kolor.
Ustawienie takie zrobisz poprzez linijkę:
document.body.style.backgroundColor = "twojKolor"
---------------------------------------------- */