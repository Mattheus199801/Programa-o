//Exemplo de let
function myF(){
    let _x = 5;
    let y = 6;
    let z = _x + y;
    document.getElementById('demo0').innerHTML = 'O valor de TU é ' + z;
}
myF()

function sombra(){
    let carName = 'Volvo'
    document.getElementById('sombra').innerHTML = carName;
}
sombra()


//Exemplo de const
function myFu(){
    const $a = 5;
    const b = 5;
    const c = $a + b;
    document.getElementById('demo1').innerHTML = 'O valor de TU é ' + c;
}
myFu()

function sombra1(){
    const carName = 'BMW'
    document.getElementById('sombra1').innerHTML = carName;
}
sombra1()

//Um exemplo misto
function misto(){
    const car0 = 'BMW '
    const car1 = ' turbo'
    let top = car0 + car1;
    document.getElementById('misto').innerHTML = top;
}
misto()

function misto0(){
    const pi = 3.14;
    let person = 'John Doe';
    let answer = 'Yes I am!';
    document.getElementById('mista0').innerHTML = pi + '<br>' + person + '<br>' + answer;
}
misto0()

//Exemplo de var
function antiga(){
    var w = 7;
    var j = 8;
    var f = w * j;
    document.getElementById('antiga').innerHTML = 'O valor de var é ' + f;
}
antiga()