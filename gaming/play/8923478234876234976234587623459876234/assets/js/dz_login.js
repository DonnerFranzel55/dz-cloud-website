function login() {
    const buttonContainer = document.querySelector(".dz-button-container")

    const button = document.createElement("button");
    button.classList.add("btn", "btn-dark", "w-100", "border-primary", "border-2", "text-center")

    const buttontext = document.createElement("span");
    buttontext.textContent = "Log in with DZ CLOUD";
    buttontext.classList.add("fs-5")
    buttontext.id = "dz-login-button-inner-text"
    button.appendChild(buttontext);
    buttonContainer.appendChild(button)
}

function register() {
    const buttonContainer = document.querySelector(".dz-button-container")

    const button = document.createElement("button");
    button.classList.add("btn", "btn-dark", "w-100", "border-primary", "border-2", "text-center")

    const buttontext = document.createElement("span");
    buttontext.textContent = "Sign up with DZ CLOUD";
    buttontext.classList.add("fs-4")
    buttontext.id = "dz-login-button-inner-text"
    button.appendChild(buttontext);
    buttonContainer.appendChild(button)
}