const validarNomeUsuario = /^(?=.{3,16}$)[a-zA-Z0-9_-]/


console.log(validarNomeUsuario.test("Joaozinho123"));
console.log(validarNomeUsuario.test("Jo"));
console.log(validarNomeUsuario.test("Joaozinho123Joaozinho123Joaozinho123Joaozinho123Joaozinho123Joaozinho123"));