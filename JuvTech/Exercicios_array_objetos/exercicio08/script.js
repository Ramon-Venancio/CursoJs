let onibus = {
     rodas:8,
     limitePassageiros:40,
     portas:2
}

onibus.janelas = 20;
delete onibus.rodas;

document.write(`Número de janelas: ${onibus.janelas}`);