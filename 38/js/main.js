function liczba() {
    let liczba1 = prompt("Wprowadź dowolną pierwszą liczbę: ");
    let liczba2 = prompt("Wprowadź dowolną drugą liczbę: ");
    let n1 = parseFloat(liczba1);
    let n2 = parseFloat(liczba2);
    let suma = n1 + n2;
    let roznica = n1 - n2;
    let mnozenie = n1 * n2;
    if ((suma < 0) || (roznica < 0) || (mnozenie < 0)) {
        alert("Wynik jest nieprawidłowy");
        console.log("Wynik jest nieprawidłowy");
    }
    else {
        let komunikat1 = " Wynik dodawania wynosi: " + suma;
        let komunikat2 = " Wynik odejmowania wynosi: " + roznica;
        let komunikat3 = " Wynik mnożenia wynosi: " + mnozenie;
        alert(komunikat1);
        console.log(komunikat1);
        alert(komunikat2);
        console.log(komunikat2);
        alert(komunikat3);
        console.log(komunikat3);
    }
}
liczba();