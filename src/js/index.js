import '../styles/main.scss';


class Car {
    constructor(options) {
        this.carBrand = options.carBrand;
        this.publishYear = options.publishYear;
        this.hasPowerfullEngine = options.hasPowerfullEngine;
        this.color = options.color
        this.isAbleToRun = options.isAbleToRun;
    };

    get showBrand() {
        return this.carBrand;
    }

    set changeBrand(value) {
        this.carBrand = value;
    };

    start() {
        return `${this.carBrand} has been started`;
    };

    stop() {
        return  `${this.carBrand} has been stopped!`;
    };

    changeColor(newColor) {
        if (newColor) {
            return this.color = newColor
        } else if (!newColor) {
            return this.color
        }
    };
};

class Engine extends Car {
    constructor(options) {
        super(options);
    }

    changeEngine(engine) {
        if (engine) {
            this.hasPowerfullEngine = engine;
            return `You have set a new engine: ${engine}`;
        } else {
            return this.hasPowerfullEngine;
        }
    }
    
};

var newEngine = new Engine({
    carBrand: 'Toyota',
    publishYear: 2001,
    hasPowerfullEngine: false,
    color: 'green',
    isAbleToRun: true,
});
console.log(newEngine.stop());













