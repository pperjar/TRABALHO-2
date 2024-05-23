alert("Bem-vindo!"); 
let Valor = parseInt(prompt("Informe um Valor"));
let Resultado;
if (Valor <= 0) {
Resultado = Valor * - 1;
} else {
Resultado = Valor;
}
alert (`Resultado é: ${Valor}`);
