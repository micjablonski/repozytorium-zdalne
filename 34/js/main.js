const n1 = "Uwielbiam JavaScript";
const n2 = "Jestem świetnym programistą";
function wypisz(n1, n2) {
    if (n1.length > n2.length)
        return n1;
    else
        return n2;
}
console.log(wypisz(n1, n2));