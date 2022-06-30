import '../styles/main.scss';

// Объект /////////////////////////////////

let car = {
    name: 'Toyota',
    year: 2001,
    hasKey: true,
    hasWheels: false,
    isAbleToRun: undefined,

    start() {
        console.log('Started');
    },

    stop() {
        console.log('Stopped');
    },

    turnOnMusic() {
        console.log(this.hasWheels);
    },
};

console.log(car);


///////////////////////////////////////////

//////////////////////////////////////////////////////////////

// Первый способ получения копии объекта ///////////////////

let objCopy = car;
console.log(objCopy);

////////////////////////////////////////////////////////////

// Второй способ получения копии объекта ///////////////////

let secondCopy = {...car};
console.log(secondCopy);

////////////////////////////////////////////////////////////


// Третий способ получения копии объекта ///////////////////

let assingment = Object.assign({}, car);
console.log(assingment);


///////////////////////////////////////////////////////////

// Функция конструктор 1 /////////////////////
// Возможен ли такой вариант вообще??? //////
function SecondCar() {
    let a = {...car};
    this.name = a.name;
    this.year = a.year;
    this.hasKey = a.hasKey;
    this.hasWheels = a.hasWheels;
    this.isAbleToRun = a.isAbleToRun;
    this.start = a.start;
    this.stop = a.stop;
    this.turnOnMusic = a.turnOnMusic;
};

let secondModel = new SecondCar();
console.log(secondModel);

///////////////////////////////////////////////

// Функция конструктор 2 //////////////////////

function ThirdCar(name, year, hasKey, hasWheels, isAbleToRun,) {
    this.name = name;
    this.year = year;
    this.hasKey = hasKey;
    this.hasWheels = hasWheels;
    this.isAbleToRun = isAbleToRun;

    this.start = function() {
        console.log('Started');
    };

    this.stop = function() {
        console.log('Stopped');
    };

    this.turnOnMusic = function() {
        console.log(this.isAbleToRun);
    };

};

let thirdModel = new ThirdCar('Toyota', 2001, true, false, undefined,);
console.log(thirdModel);

