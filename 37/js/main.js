let paragraf = document.getElementById('tekst');
let dodaj = document.getElementById('dodaj');
dodaj.onclick = function () {
    document.getElementById('tekst').innerHTML = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.';
}

let usun = document.getElementById('usun');
usun.onclick = function () {
    document.getElementById('tekst').innerHTML = '';
}