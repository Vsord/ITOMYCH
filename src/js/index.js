import '../styles/main.scss';


// Function 1 //////////////////////////////////////////////////////

let sortedArray = arr => arr.sort();

console.log(sortedArray(["b","c","d","a"]));
console.log(sortedArray(["z", "c", "d", "a", "y", "a", "w"]));

////////////////////////////////////////////////////////////////////


// Function 2 //////////////////////////////////////////////////////

var initialValue = 0;

function argumentsSum(a, b) {
    var reducer = a.reduce((sum, currentValue) => {
            if (currentValue > b) {
                return sum + currentValue 
            } else {
                return sum
            }
    }, initialValue);
    console.log(reducer);
};

argumentsSum([1, 2, 3, 4, 5, 6, 7], 2);
argumentsSum([-10, -11, -3, 1, -4], -3);
argumentsSum([78, 99, 100, 101, 401], 99);

////////////////////////////////////////////////////////////////////

// Function 3 //////////////////////////////////////////////////////

function getUnique(a, b) {
    let newArray = [];
    var merged = a.concat(b);
    merged.map((item, index, merged) => {
        if (merged.indexOf(item) == index) {
            newArray.push(item)
        }
    });
    console.log(newArray.sort((a, b) => {
        return a - b
    }));
};

getUnique([1, 2, 3], [3, 4, 5]);
getUnique([-10, 22, 333, 42], [-11, 5, 22, 41, 42]);

////////////////////////////////////////////////////////////////////

