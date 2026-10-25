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


function testeCommais(){
    var soma = 100 + 50;
    document.getElementById('d4').innerHTML = soma;
    var menos = 5 -2;
    document.getElementById('d5').innerHTML = menos;
    var multi = 5 * 6;
    document.getElementById('d6').innerHTML = multi;
    var divid = 4 / 2;
    document.getElementById('d7').innerHTML = divid;
    var rest = 7 % 2;
    document.getElementById('d8').innerHTML = rest;
    var incrw = 5;
    incrw++;
    document.getElementById('d9').innerHTML = incrw;
    var descrew = 5;
    descrew--;
    document.getElementById('d10').innerHTML = descrew;
    var expo = 5;
    document.getElementById('d11').innerHTML = expo **2;
}testeCommais();