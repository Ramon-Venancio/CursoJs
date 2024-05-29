let onibus = {
     rodas:8,
     limitePassageiros:40,
     portas:2
}

for (key in onibus) {
     document.write(`${key}: ${onibus[key]}<br>`)
}