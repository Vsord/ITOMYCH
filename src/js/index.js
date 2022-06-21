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

let newDrummer = car;
console.log(newDrummer);

////////////////////////////////////////////////////////////

// Второй способ получения копии объекта ///////////////////

let a = {...car};
console.log(a);

////////////////////////////////////////////////////////////


// Третий способ получения копии объекта ///////////////////

let assingment = Object.assign({}, car);
console.log(assingment);


///////////////////////////////////////////////////////////

// Функция конструктор 1 /////////////////////
// Кажется мне,что это выглядит ужасно!////////

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

let g = new SecondCar();
console.log(g);

///////////////////////////////////////////////

// Функция конструктор 2 //////////////////////

function ThirdCar(
    name, 
    year, 
    hasKey,
    hasWheels,
    isAbleToRun,
    ) {
    this.name = name;
    this.year = year;
    this.hasKey = hasKey;
    this.hasWheels = hasWheels;
    this.isAbleToRun = isAbleToRun;

    this.start = function() {
        console.log('always use!');
    };

    this.stop = function() {
        console.log('get the fuck out with your 300bpm!');
    };

    this.turnOnMusic = function() {
        console.log(this.isAbleToPlayFast);
    };

};

let f = new ThirdCar(
    'Toyota',
    2001,
    true,
    false,
    undefined,
    );

console.log(f);

