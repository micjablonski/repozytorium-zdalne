function liczba() {
    let n = prompt("Wprowadź dowolną liczbę: ");
    if ((n >= 100) && (n <= 200))
        console.log("Liczba znajduje się w przedziale");
    else
        console.log("Liczba nie znajduje się w przedziale");
}
liczba();
