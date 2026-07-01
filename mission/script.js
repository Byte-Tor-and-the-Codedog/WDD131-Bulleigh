
let selectElem = document.querySelector('#theme-select');
let pageContent = document.querySelector('body');
let subtitle = document.querySelector("#subtitle");

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'light') {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        document.subtitle.style.color = "blue";
    } else if (current === 'dark') {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        document.subtitle.style.color = "blue";
    } else if (current === 'desert-mcdonalds') {
        document.body.style.backgroundColor = "ivory";
        document.body.style.color = "gray";
        document.subtitle.style.color = "teal";
    }
}
          