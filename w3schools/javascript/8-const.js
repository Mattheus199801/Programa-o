function myF(){
    try {
        const PI = 3.1415922653589793;
        PI = 3.14
    }
    catch (err){
        document.getElementById('sombra0').innerHTML = err;
    }
}
myF();
function myFS(){
    const cars = [" Saab ", " Volvo ", " BMW "];
    cars[0] = " Toyota ";
    cars.push(" Audio ");
    document.getElementById('sombra1').innerHTML = "As marcas de carros é " + cars;
}
myFS();

function myFD(){
    const car = {type:" Fiat ", model:" 500 ", color:" blue"};
    car.color = "red";
    car.owner = " Nunez ";
    document.getElementById("sombra2"). innerHTML = "O dono desse carro é " + car.owner;
}
myFD();
