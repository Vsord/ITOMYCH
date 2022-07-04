import '../styles/main.scss';


// Функция конструктор //////////////////////

// function Car(carBrand, publishYear, hasPowerfullEngine , color, isAbleToRun,) {
//     this.carBrand = carBrand;
//     this.publishYear = publishYear;
//     this.hasPowerfullEngine = hasPowerfullEngine ;
//     this.color = color
//     this.isAbleToRun = isAbleToRun;

//     this.start = function() {
//           return `This ${this.carBrand} is able to run: ${this.isAbleToRun}`;
//     };

//     this.stop = function() {
//           return 'Car has been stopped!';
//     };

//     this.changeColor = function() {
//           this.color = 'red';
//           return this.color;
//     };

// };

// let newCar = new Car('Toyota', 2001, false, 'green', true,);
// console.log(newCar);



/////////////////////////////////////////////////////////

// Находит элемент в html,добавляет ему ширину,высоту и меняет цвет ///

function Component(object) {
     this.element = document.querySelector(object.selector)
     this.width = object.width;
     this.height = object.height;
     this.color = object.color;
     
     this.addWidth = () => {
         return this.element.style.width = this.width + 'px';
     };

     this.addHeight = () => {
          return this.element.style.height = this.height + 'px';
      };

     this.changeColor = () => {
         return this.element.style.backgroundColor = this.color;
     };

 };
 
 let newComponent = new Component({
     selector: '#block',
     width: 100,
     height: 100,
     color: 'red',
 });

 console.log(newComponent.addWidth());
 console.log(newComponent.changeColor());
 console.log(newComponent.addHeight());


/////////////////////////////////////////////////////////////////

