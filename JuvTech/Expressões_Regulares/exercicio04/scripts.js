const validarIP = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/

console.log(validarIP.test("123.123.123.123"))
console.log(validarIP.test("12.123.1.12"))
console.log(validarIP.test("1234.123.1.12"))
console.log(validarIP.test("123.1234.123.123"))