function atribuicao(){
    let a = 5;
    let b = 6;
    let c = a + b;
    document.getElementById('d0').innerHTML = 'A atribuição de num1 = num2 é: ' + c;
}atribuicao();

function soma(){
    let d = 7;
    let f = 8;
    let h = d + f;
    document.getElementById('d1').innerHTML = 'A soma de num1 + num2 é: ' + h;
}soma();

function multiplicacao(){
    let k = 8;
    let l = 4;
    let kl = k * l;
    document.getElementById('d2').innerHTML = "A multiplicação de num1 * num2 é:  " + kl;
}multiplicacao();

function comparacao(){
    let g = 5;
    document.getElementById('d3').innerHTML = 'A comparação de num1 é: ' + (g > 8);
}comparacao();