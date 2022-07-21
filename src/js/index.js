import '../styles/main.scss';


// Функция конструктор //////////////////////

function Car(options) {
    this.carBrand = options.carBrand;
    this.publishYear = options.publishYear;
    this.hasPowerfullEngine = options.hasPowerfullEngine;
    this.color = options.color
    this.isAbleToRun = options.isAbleToRun;

    this.start = function () {
        return `This ${this.carBrand} is able to run: ${this.isAbleToRun}`;
    };

    this.stop = function () {
        return 'Car has been stopped!';
    };

    this.changeColor = function (newColor) {
        if (newColor) {
            return this.color = newColor
        } else if (!newColor) {
            return this.color
        }
    };

};

let newCar = new Car({
    carBrand: 'Toyota',
    publishYear: 2001,
    hasPowerfullEngine: false,
    color: 'green',
    isAbleToRun: true,
});
console.log(newCar);



