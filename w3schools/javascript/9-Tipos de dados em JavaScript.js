function myF(){
    document.getElementById('sombra0').innerHTML = typeof "" + "<br>" + 
    typeof "Nunez" + "<br>" +
    typeof " Sombra" + "<br>" +
    typeof 0 + "<br>" +
    typeof 314 + "<br>" +
    typeof 3.14 + "<br>" +
    typeof ( 3 ) + "<br>" +
    typeof ( 3 + 4 ) + "<br>" +
    typeof  123e5; + "<br>" +
    typeof 123e-5
    ;
}
myF();
function myFS(){
    let x = 123e5;
    let y = 123e-5;
    let z = 5;
    document.getElementById('sombra1').innerHTML = x + "<br>" + y + "<br>" + (z == 8);
}
myFS();
