let counter = 0

function count () {
    counter ++;
    document.querySelector('h1').innerHTML = counter;

    if (counter % 10 === 0) {
        alert(`O contador chegou num multiplo de 10: ${counter}`);      
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').onclick = count
})