/* 
Zadanie:
Uwaga: w poniższym zadaniu ani razu nie używaj var. Dla pętli po tablicach nie używaj for i while.

1) Zainstaluj i skonfiguruj webpacka tak by kompilowal z src/app.js do js/out.js

2) W pliku zadanie.js znajduje się tablica kolorów "colors" i zakodowana tablica "tab".
    Zaimportuj je do tego pliku.

3) Stworz dodatkowy plik functions.js w którym będziesz pisał funkcje. Funkcje te potem
    wyeksportuj, a następnie zaimportuj w tym pliku.

4) Tablica "tab" ma w sobie podtablice składające się z liter.
    Wśród liter znajdują się błędne litery 'x'. Napisz funkcję stripChar(), która przyjmie 2 paramery:
    tablicę i znak, który ma być usunięty z tablicy. Funkcja powinna odfiltrować przekazaną do niej 
    tablicę i zwrócić ją bez znaków z 2 parametru.
    Jak przyjżysz się tablicy "tab", już w pierwszej jej podtalibyc są znaki x. 
    Sprawdź więc w konsoli czy twoja funkcja dobrze działa np. console.log(   stripChar(tab[0], 'x')   );
5) Niestety to nie koniec dekodowania. Indeksy kolorów w tablicy "colors" są numerami (czyli jak w normalnej tablicy). W tablicy tab mamy natomiast zamiast liczb litery. Napisz funkcję changeLettersToNumbers, która przyjmie tylko jeden atrybut - tekst. Tekst ten uzyskaj z zamiany danej podtablicy na string (użyj odpowiedniej metody dla tablic).
Funkcja ta powinna sprawdzać każdą literę przekazanego tekstu i zamieniać ją na liczbę. Dla przykładu:
a = 0
b = 1
c = 2
d = 3
...
h = 7
Czy widzisz tutaj jakąś zależność? 
W wyniku funkcja powinna zwracać nową tablicę składającą się z numerów:
input: "aabbcd"
output: [0,0,1,1,2,3]
Dla tej funkcji też sprawdź jej działanie w konsoli. 

6) Po napisaniu powyższych funkcji zaimportuj je do tego pliku i wykorzystaj je do utworzenia nowej rozszyfrowanej tablicy tab2

7) Zrób pętlę po tablicy tab2 i jej podtalicach. Dla kazdej wartosci w tych podtablicach wstawiaj do elementu .canvas div, ktoremu ustawisz backgorund o kolorze pobranym z tablicy colors o indeksie ktory pobrales z oczyszczonej tablicy. Nie używaj do tego innerHTML, a odpowiednie metody i właściwości
Po każdej pętli po podtablicy, wstawiac do canvas <br>. Tutaj też nie korzystaj z innerHTML
*/


import { changeLettersToNumbers, stripChar } from './functions.js';
import { colors, tab } from './zadanie.js';


const tab2 = [];

tab.forEach(function(subTab) {
    let newSubTab = stripChar(subTab, 'x');
    newSubTab = changeLettersToNumbers(newSubTab.join(''));    
    tab2.push(  newSubTab  );
});


tab2.forEach(subTab => {
    subTab.forEach(i => {
        const div = document.createElement('div');
        div.style.setProperty('background', colors[i]);
        document.querySelector('.canvas').appendChild(div);
    })
    const br = document.createElement('br');
    document.querySelector('.canvas').appendChild(br);
});

