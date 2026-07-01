const menuButton = document.querySelector(".menu-btn");
const navBoard = document.querySelector("#navBoard");
window.addEventListener('resize', event => {
    let width =window.innerWidth;

    if (width < 700) {
        navBoard.classList.add("hidden");
    }
    else {
        navBoard.classList.remove('hidden');
    }
})

menuButton.addEventListener("click", event => {
    menuButton.classList.toggle("change");
    navBoard.classList.toggle("hidden");
}) ;

