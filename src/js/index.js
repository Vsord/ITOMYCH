import '../styles/main.scss';


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