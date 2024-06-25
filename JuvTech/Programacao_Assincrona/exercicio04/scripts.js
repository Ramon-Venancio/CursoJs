const formulario = document.getElementById('form');
const inputs = document.querySelectorAll('input');
const validarNomeUsuario = /^(?=.{3,16}$)[a-zA-Z0-9_-]/
const validarEmail = /\w+@\w+\.com/

formulario.addEventListener('submit', (event) => {
     event.preventDefault();
     checkForm()
     alert("Formulario enviado com sucesso!");
})

for (const input of inputs) {
     input.addEventListener('input', () => {
          setTimeout(()=>{
               if (input.id === "username") {
                    checkUsername(input,validarNomeUsuario)
               }
               else if (input.id === "email") {
                    checkEmail(input,validarEmail)
               }
               else if (input.id === "password") {
                    checkPassword(input)
               }
               else if (input.id === "password confirmation") {
                    const password = document.getElementById('password')
                    checkPasswordConfirmation(input,password)
               }
          },3500)
     })
}

for (const input of inputs) {
     input.addEventListener('blur', () => {
          if (input.id == "username") {
               checkUsername(input)
          }
          else if (input.id == "email") {
               checkEmail(input)
          }
          else if (input.id == "password") {
               checkPassword(input)
          }
          else if (input.id == "password confirmation") {
               const password = document.getElementById('password')
               checkPasswordConfirmation(input,password)
          }
     })
}

function errorInput(input, message) {
     const formItem = input.parentElement;
     const textMensage = formItem.querySelector("a")

     textMensage.innerText = message;

     formItem.className = "form-content error"
}

async function checkUsername(username,validarNomeUsuario) {
     const usernameValue = username.value
     console.log("123")

     if (usernameValue === "") {
          errorInput(username, "Preencha um username")
     }
     else if (!validarNomeUsuario.test(usernameValue)) {
          errorInput(username, "Nome de usuario invalido")
     }
     else {
          const formItem = username.parentElement;
          formItem.className = "form-content"
     }
}

async function checkEmail(email,validarEmail) {
     const emailValue = email.value

     if(emailValue === "") {
          errorInput(email,"Email vazio")
     }
     else if(!validarEmail.test(emailValue)) {
          
          errorInput(email,"Email invalido")
     }
     else {
          const formItem = email.parentElement;
          formItem.className = "form-content"
     }
}

async function checkPassword(password) {
     const passwordValue = password.value;

     if(passwordValue === ""){
          errorInput(password, "A senha é obrigatória.")
     }
     else if(passwordValue.length < 8){
          errorInput(password, "A senha precisa ter no mínimo 8 caracteres.")
     }else{
          const formItem = password.parentElement;
          formItem.className = "form-content"
     }
}

async function checkPasswordConfirmation(passwordConfirm,password) {
     const passwordConfirmValue = passwordConfirm.value;
     const passwordValue = password.value;
     

     if(passwordConfirmValue === ""){
          errorInput(passwordConfirm, "A senha é obrigatória.")
     }
     else if(!(passwordConfirmValue === passwordValue)){
          errorInput(passwordConfirm, "A senha precisa ser igual.")
     }else{
          const formItem = passwordConfirm.parentElement;
          formItem.className = "form-content"
     }
}

function checkForm() {
     checkUsername()
     checkEmail()
     checkPassword()
     checkPasswordConfirmation()
}