import '../styles/main.scss';


// Promise //////////////////////////////////////////////////////////////////

function requestData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(res => { return res.json(); })
            .then(data => { console.log(data.filter(obj => obj.id <= 10)); })
            resolve();
    })
    .then(() => {
        console.log('Data received');
    })
};
requestData('https://jsonplaceholder.typicode.com/posts');

/////////////////////////////////////////////////////////////////////////////

// Async / Await ////////////////////////////////////////////////////////////

async function filterData(url) {
    try {
        const response = await fetch(url);
        const getData = await response.json();
        console.log(getData.filter(obj => obj.id <= 10));
    } catch(err) {
        console.error(err);
    }
};
filterData('https://jsonplaceholder.typicode.com/posts');


/////////////////////////////////////////////////////////////////////////////



// Чисто ради прикола ///////////////////////////////////////////////////////

const url = 'https://jsonplaceholder.typicode.com/posts';
const xhr = new XMLHttpRequest();

const paragraph = document.getElementById('paragraph');
const title = document.getElementById('title');



xhr.open('GET', url);
xhr.responseType = 'json';

xhr.onload = () => {

    title.style.color = 'red';
    let titles = xhr.response[0].title;
    title.innerHTML = titles;


    let elems = xhr.response[0].body;
    paragraph.innerHTML = elems;

};

xhr.send();

/////////////////////////////////////////////////////////////////////////////











