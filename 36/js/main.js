function liczba() {
    let liczba1 = prompt("Wprowadź dowolną pierwszą liczbę: ");
    let liczba2 = prompt("Wprowadź dowolną drugą liczbę: ");
    let n1 = parseFloat(liczba1);
    let n2 = parseFloat(liczba2);
    if ((n1 == 20) || (n2 == 20) || (n1 + n2 <= 20))
        alert("True");
    else
        alert("Jedna z liczb nie jest równa 20 lub suma tych dwóch liczb nie jest mniejsza lub równa 20.");
}
liczba();
