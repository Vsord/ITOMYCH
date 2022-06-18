import '../styles/main.scss';


// Function 1 ///////////////////////////////

const typeOfValues = (a, b) => a === b ? console.log(true) : console.log(false);

typeOfValues();

/////////////////////////////////////////////

// Function 2 //////////////////////////////

function a(x, y) {
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

a();

/////////////////////////////////////////////