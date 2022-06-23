import '../styles/main.scss';


function filterArray(arr) {
    // let a = [];
    arr.filter((item, index) => {
        if (index >= 0) {
            arr.unshift(item)
        }
    })
    // console.log(a);
};

filterArray(["b","c","d","a"]);