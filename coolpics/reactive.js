const pics = document.querySelector('.Pics');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');
const navBoard = document.querySelector('#navBoard');
const menuButton = document.querySelector('#menu');

// Event listener for opening the modal
pics.addEventListener('click', openModal);

window.addEventListener('resize', event => {
    let width = window.innerWidth;

    if (width < 1350) {
        navBoard.classList.add("hidden");
    }
    else {
        navBoard.classList.remove('hidden');
    }
})

function openModal(e) {
    modalImage.src = e.target.src.replace("sm", "full");
    modal.showModal();
// Code to show modal  - Use event parameter 'e'   
    
}
// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});

modal.addEventListener("keydown", event => {
    if (event.key === 'Escape') {
        modal.close();
    }
})

menuButton.addEventListener("click", event => {
    navBoard.classList.toggle("hidden");
}) ;