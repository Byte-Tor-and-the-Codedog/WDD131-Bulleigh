const loginForm = document.querySelector("#login");
const loginBtn = document.querySelector(".sign-in-btn");
const userBox = document.querySelector("#username");
const passBox = document.querySelector("#passy");


function sendover(credentials) {
    //placeholder to see show how it sends over the json so the backend can verify and grant access.
    console.log(credentials);
}

loginBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const loginInfo = {
        username: userBox.value,
        password: passBox.value
    }
    sendover(JSON.stringify(loginInfo));
});

document.addEventListener("keydown", (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        const loginInfo = {
            username: userBox.value,
            password: passBox.value
        }   
        sendover(JSON.stringify(loginInfo));
    }
});


