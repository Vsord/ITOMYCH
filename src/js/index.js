import '../styles/main.scss';


// Function 1 ///////////////////////////////

const typeOfValues = (a, b) => a === b;
console.log(typeOfValues());

/////////////////////////////////////////////


// Function 2 //////////////////////////////

function higherValue(x, y) {
    if (x % y == 0) {
        return x
    } else {
       return (x + y) - (x % y)
    }

};

console.log(higherValue());

/////////////////////////////////////////////