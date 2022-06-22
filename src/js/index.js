import '../styles/main.scss';


// Function 1 ///////////////////////////////

// const typeOfValues = (a, b) => a === b;
// console.log(typeOfValues());

/////////////////////////////////////////////


// Function 2 //////////////////////////////

function higherValue(x, y) {
    if (x % y == 0) {
        console.log(x);
    } else {
        for (let i = x; i <= y || i >= y; i++) {
            if (i % y == 0) {
                console.log(i);
                break;
            }
        } 
    }

};

higherValue(11, 3);

/////////////////////////////////////////////