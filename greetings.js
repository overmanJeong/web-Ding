const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
//login btn
const loginButton = document.querySelector("#loginButton");

const HIDDEN_KEY = "hidden";
const USERNAME_KEY = "username";
//fade 
const FADE_IN = "fade-in";
const FADE_OUT = "fade-out";

//fade
function showTodoInput() {
  todoInput.classList.remove(HIDDEN_KEY);
}

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_KEY);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
    //fade
    loginInput.classList.add(FADE_OUT);
        loginButton.classList.add(FADE_OUT);
        setTimeout(() => {
            loginInput.classList.add(HIDDEN_KEY);
            loginButton.classList.add(HIDDEN_KEY);
            greeting.classList.add(FADE_IN);
            todoInput.classList.add(FADE_IN);
            paintGreetings(username);
            showTodoInput();
        }, 300);
}

function paintGreetings(username) {
  greeting.innerHTML = `Hello, ${username}`;
  greeting.classList.remove(HIDDEN_KEY);
  //fade
  showTodoInput();
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

if (saveUsername === null) {
  loginForm.classList.remove(HIDDEN_KEY);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  //fade 
  loginInput.classList.add(HIDDEN_KEY);
  loginButton.classList.add(HIDDEN_KEY);
  //
  paintGreetings(saveUsername);
}