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
        for (x; x <= y || x >= y; x++) {
            if (x % y == 0) {
                return x;
            }
        }
    }

};

console.log(higherValue());

/////////////////////////////////////////////

