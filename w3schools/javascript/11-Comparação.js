
function myF(){
    let x = 5;
    document.getElementById('sombra0').innerHTML = (x == 8);
}
myF();

function myFS(){
    let d = 5;
    document.getElementById('sombra1').innerHTML = (d == 5);
}
myFS();

function myFSD(){
    let s = 5;
    document.getElementById('sombra2').innerHTML = (s == "5");
}
myFSD();

function igualdade_estrita(){
    let f = 5;
    document.getElementById('sombra3').innerHTML = (f === 5);
}
igualdade_estrita();

function igualdade_estrita1(){
    let a = 5;
    document.getElementById('sombra4').innerHTML = (a === "5");
}
igualdade_estrita1();

function diferente(){
    let h = 5;
    document.getElementById('sombra5').innerHTML = (h != 8);
}
diferente();

function estritamente_desigual(){
    let lt = 5
    document.getElementById('sombra6').innerHTML = (lt !== 5);
}
estritamente_desigual();

function estritamente_desigual1(){
    let lta = 5
    document.getElementById('sombra7').innerHTML = (lta !== "5");
}
estritamente_desigual1();

function estritamente_desigual8(){
    let lt = 5
    document.getElementById('sombra8').innerHTML = (lt !== 8);
}
estritamente_desigual8();

function maior_que(){
    let ltv = 5
    document.getElementById('sombra9').innerHTML = (ltv > 8);
}
maior_que();

function menor_que(){
    let ltva = 5
    document.getElementById('sombra10').innerHTML = (ltva < 8);
}
menor_que();

function maiorouigual(){
    let ltvq = 5
    document.getElementById('sombra11').innerHTML = (ltvq >= 8);
}
maiorouigual();

function menorouigual(){
    let ltvaq = 5
    document.getElementById('sombra12').innerHTML = (ltvaq <= 8);
}
menorouigual();

function sinal_menor(){
    document.getElementById('sombra14').innerHTML = 2 < 12;
}
sinal_menor();

function strings(){
    document.getElementById('sombra15').innerHTML = 2 < '12';
}
strings();
