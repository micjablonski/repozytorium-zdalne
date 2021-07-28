let zmienna = document.getElementById('opis');
let przycisk = document.querySelector('button');
przycisk.onclick = function () {
    document.getElementById('opis').innerHTML = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.';
}