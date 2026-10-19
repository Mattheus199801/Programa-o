function myf(){
    var x = 2;

    {
        var x = 10;
    }
    document.getElementById('d0').innerHTML = x;
}myf();

function Myf(){
    let xp = 10;

    {
        let xp = 20;
    }
    document.getElementById('d1').innerHTML = xp;
}Myf();