class MultiNewElement {
  elements: HTMLElement[];

  constructor(elements: HTMLElement[]) { this.elements = elements;}
    build(){
      for (const element of this.elements) {
        document.body.appendChild(element)
      }
    }
}

class NewElement {
  content: string; // параметр, котрий існує в класі

  constructor(outerContent: string) { // аргумент
    this.content = outerContent;
  }
  addElement(){
    let htmlDivElement = document.createElement('div');
    htmlDivElement.innerText = this.content;
    document.body.appendChild(htmlDivElement);
  }
}

let newElement= new NewElement('hello');
// NewElement
newElement.addElement();

let htmlElement1 = document.createElement('div');
htmlElement1.innerText = 'element 1';

let htmlElement2 = document.createElement('div');
htmlElement2.innerText = 'element 2';

let htmlElementsArr = [htmlElement1, htmlElement2];

let multiNewElement = new MultiNewElement(htmlElementsArr);
multiNewElement.build();
