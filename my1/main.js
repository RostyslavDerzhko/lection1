var MultiNewElement = /** @class */ (function () {
    function MultiNewElement(elements) {
        this.elements = elements;
    }
    MultiNewElement.prototype.build = function () {
        for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
            var element = _a[_i];
            document.body.appendChild(element);
        }
    };
    return MultiNewElement;
}());
var NewElement = /** @class */ (function () {
    function NewElement(outerContent) {
        this.content = outerContent;
    }
    NewElement.prototype.addElement = function () {
        var htmlDivElement = document.createElement('div');
        htmlDivElement.innerText = this.content;
        document.body.appendChild(htmlDivElement);
    };
    return NewElement;
}());
var newElement = new NewElement('hello');
// NewElement
newElement.addElement();
var htmlElement1 = document.createElement('div');
htmlElement1.innerText = 'element 1';
var htmlElement2 = document.createElement('div');
htmlElement2.innerText = 'element 2';
var htmlElementsArr = [htmlElement1, htmlElement2];
var multiNewElement = new MultiNewElement(htmlElementsArr);
multiNewElement.build();
