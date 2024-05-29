alert("Bem-vindo!"); 
let valor1 = parseInt(prompt("informe um número"));
let valor2 = parseInt(prompt("informe um número"));
let valor3 = parseInt(prompt("informe um número"));
let valor4 = parseInt(prompt("informe um número"));
let valor5 = parseInt(prompt("informe um número"));

let maior = valor1;
let menor = valor1;
if(valor2 > maior){
   maior = valor2;
}
if (valor3 > maior){
   maior = valor3;
}
if (valor4 > maior){
   maior = valor4;
}
if (valor5 > maior){
   maior = valor5;
}
if (valor2 < menor){
   menor = valor2;
}
if (valor3 < menor){
   menor = valor3;
}
if (valor4 < menor){
   menor = valor4;
}
if (valor5 < menor){
   menor = valor5;
}
alert(`O maior valor é: ${maior} e o menor valor é: ${menor}`);