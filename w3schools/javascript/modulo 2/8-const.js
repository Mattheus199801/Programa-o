function myf(){
    try{
        const PI = 3.141592653589793;
        PI =3.14;
    }
    catch (err){
        document.getElementById('d0').innerHTML = err;
    }
}myf();

function UP(){
    const cars = [' Saab', ' Volvo', ' BMW'];
    cars [0] = ' Toyota';
    cars.push(' Audi');

    document.getElementById('d1'). innerHTML = cars;
}UP();

function sdf(){
    const car = {type:'Fiat ', model:'500 ', color:'white'};

    car.color = 'red';

    car.owner = 'johnson';

    document.getElementById('d2').innerHTML = 'O carro de ' + car.owner;
}sdf();
