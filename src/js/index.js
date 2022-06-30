import '../styles/main.scss';


function changeObj(obj) {

    delete obj.age
    delete obj.email

    if (obj.size) {
     obj.size += 'cm'
    }  
    if (obj.weight) {
     obj.weight += 'kg'
    }
    console.log(obj);
};

changeObj({fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67});
changeObj({fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102});
changeObj({fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71});
changeObj({fn: 'Matthew', ln: 'Müller', age: 19, email: 'matthew@mueller.de'});








