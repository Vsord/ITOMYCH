import '../styles/main.scss';


class Component {
    constructor(options) {
        this.element = document.getElementById(options.selector);
    };

    get showID() {
        return this.element;
    }

    set changeID(value) {
        this.element = document.getElementById(value);
    };
};

class Block extends Component {

    constructor(options) {
        super(options)
        this.element.style.width = options.width + 'px';
        this.element.style.height = options.height + 'px';
        this.element.style.backgroundColor = options.color;
        this.element.style.display = options.visible;
    };

    showElem() {
        return this.element.style.display = 'block';
    };

    hideElem() {
        return this.element.style.display = 'none';
    };

    changeWidth = (newWidth) => {
        return this.element.style.width = newWidth + 'px';
    };

    changeHeight = (newHeight) => {
        return this.element.style.height = newHeight + 'px';
     };

    changeColor = (color) => {
        return this.element.style.backgroundColor = color;
    };

};

var box = new Block({
    selector: 'block',
    width: 100,
    height: 100,
    color: 'green',
    visible: 'none',
});












