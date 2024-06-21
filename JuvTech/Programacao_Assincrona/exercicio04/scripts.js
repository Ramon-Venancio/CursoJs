const formulario = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password confirmation');

formulario.addEventListener('submit', (event) => {
     event.preventDefault();

     checkForm();
})

async function errorInput(input, message) {
     new Promise((resolve, reject) => {
          setTimeout(() => {
               const formItem = input.parentElement;
               const textMensage = formItem.querySelector("a")

               textMensage.innerText = message;

               formItem.className = "form-content error"
          },5000)
     })
     
}

async function username() {
     const usernameValue = username.value

     if (usernameValue === "") {
          await errorInput(username, "Preencha um username")
     }
     else {
          const formItem = username.parentElement;
          formItem.classname = "form-content"
     }
}



function checkForm() {

}