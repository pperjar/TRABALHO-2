alert("Bem-vindo!"); 
let valor1 = parseInt (prompt ("Qual valor1"));
let valor2 = parseInt (prompt ("Qual valor2"));
let maior,menor,resultado;

if (valor1 > valor2){
maior = valor1;
menor = valor2;
} else {
maior = valor2;
menor = valor1;
}
resultado = maior - menor;
alert(`${resultado}`);