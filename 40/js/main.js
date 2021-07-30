var przycisk = document.getElementById('przycisk');
przycisk.onclick = function () {
    var imie = document.getElementById("imie").value;
    var nazwisko = document.getElementById("nazwisko").value;
    var telefon = document.getElementById("telefon").value;

    document.getElementById('name').innerHTML = imie;
    document.getElementById('surname').innerHTML = nazwisko;
    document.getElementById('phone').innerHTML = telefon;
}
