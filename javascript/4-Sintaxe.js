document.getElementById('demo0').innerHTML =  10.50;

document.getElementById('demo1').innerText = 'José ' + 'da ' + 'Silva';

function myFun(){
    let x = 18;
    const fname = 'José';
    document.getElementById('demo2').innerHTML = fname + 'tem ' + x + ' anos';
}
myFun();

function myFuns(){
    let x;
    x = 6;
    document.getElementById('demo3').innerHTML = 'O valor de X é ' + x;
}
myFuns();

function myfuns(){
let x = 5;
let y = 11;
let sum = x + y;
document.getElementById('demo4').innerHTML = 'A soma entre 5 e 11  é ' + sum;
}
myfuns()

document.getElementById('demo5').innerHTML = '5 multiplicado por 10 é ' + 5 * 10;

document.getElementById('demo6').innerHTML = 'o resultadfo de (5 + 6) * 10 é ' + (5 + 6) * 10;

function myfunF(){
    var x;
    x = 5;
    document.getElementById('demo7').innerHTML = x * 10;
}
myfunF()
 /*JavaScript diferencia maiúsculas de minúsculas. */
/* Os identificadores em JavaScript diferenciam maiúsculas de minúsculas .*/
/*Em JavaScript, não são permitidos hífenes. Eles são reservados para subtrações.*/
