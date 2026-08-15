function myF(){
    let x = 5;
    let y = 6;
    let z = x + y;
    document.getElementById('sombra'). innerHTML = "O valor é " + z;
}
myF();
function myFS(){
    let xa  = 10;
    {
        let xa = 2;
    }

    document.getElementById('sombra1').innerHTML = "O valor de X é  " + xa;
}
myFS();
function myFD(){
    var xb = 5;
    {
        var xb = 6;
    }
    document.getElementById('sombra2').innerHTML = "O valor de x é " + xb;
}
myFD();