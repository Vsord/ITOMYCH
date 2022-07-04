import '../styles/main.scss';


//////////////////////////////////////////////////
// isPrototypeOf Function

const obj1 = {
     a: 2.
};

const obj2 = {
     a: 2.
};

const obj3 = Object.create(obj1);

function isPrototype(a, b) {
     return a.isPrototypeOf(b);
};

console.log(isPrototype(obj1, obj2));
console.log(isPrototype(obj3, obj1));
console.log(isPrototype(obj1, obj3)); 

///////////////////////////////////////////////////


///////////////////////////////////////////////////
// Singleton

function Singleton(data) {
     if (Singleton.exists) {
          return Singleton.instance
     }

     this.data = data;
     Singleton.instance = this;
     Singleton.exists = true;

     this.getData = () => {
          return this.data
     }
          
};

let newObj = new Singleton('Singleton!');
console.log(newObj.getData());

let newObj2 = new Singleton('Not Singleton!');
console.log(newObj2.getData());

////////////////////////////////////////////////////