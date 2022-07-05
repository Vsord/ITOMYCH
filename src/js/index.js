import '../styles/main.scss';


var person1 = { fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67 };
var person2 = { fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102 };
var person3 = { fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71 };
var person4 = { fn: 'Matthew', ln: 'Müller', age: 19, email: 'matthew@mueller.de' };


function changeObj() {
    delete this.age
    delete this.email

    if (this.size) {
        this.size += 'cm'
    }
    if (this.weight) {
        this.weight += 'kg'
    }
    return this;
};

console.log(changeObj.call(person1));
console.log(changeObj.call(person2));
console.log(changeObj.call(person3));
console.log(changeObj.call(person4));
