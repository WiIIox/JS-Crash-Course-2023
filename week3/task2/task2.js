class CssClass {

    constructor(name) {
      this.name = name;
      this.styles = [];
    }
  
    setStyle(property, value) {
      this.styles.push(`${property}: ${value};`);
    }
  
    removeStyle(property) {
      this.styles = this.styles.filter(style => !style.startsWith(property));
    }
  
    getCSS() {
        let result = `.${this.name} {`;
        for (let style in this.styles) {
            result += `\n   ${this.styles[style]}`;
        }
        return result + '\n}';
    }
}

class Button {
        
    constructor(width, height, text) {
      this.width = width;
      this.height = height;
      this.text = text;
      this.onclick = 'location.reload()'; 
    }
  
    showBtn() {
      document.write(`<button onclick=${this.onclick}; style="width:${this.width}px; height:${this.height}px">${this.text}</button>`);
    }
  }

class BootstrapButton extends Button {
    
    constructor(width, height, text, color) {
      super(width, height, text);
      this.color = color;
    }
  
    showBtn() {
      let cssClass = new CssClass('btn');
      cssClass.setStyle('background-color', this.color);
      cssClass.setStyle('cursor', 'pointer');
      cssClass.setStyle('color', 'white');
      cssClass.setStyle('border-radius', '5px');
      document.write(`<button onclick=${this.onclick}; class="${cssClass.name}" style="width:${this.width}px;height:${this.height}px">${this.text}</button>`);
      document.write(`<style>${cssClass.getCSS()}</style>`);
    }
}

class ExtendedDate extends Date {
    constructor(dateString) {
      super(dateString);
    }
  
    getDateText() {
      let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      return `${this.getDate()} ${months[this.getMonth()]}`;
    }
  
    isFuture() {
        let now = new Date();
        return this.getTime() > now.getTime();
      }
    
      isLeapYear() {
        let year = this.getFullYear();
        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
      }
    
      getNextDate() {
        let nextDay = new Date(this);
        nextDay.setDate(this.getDate() + 1);
        return nextDay;
      }
}  

function task1() {
    myStyle = new CssClass('TestStyle');
    myStyle.setStyle('color', 'blue');
    myStyle.setStyle('font-family', 'verdana');
    myStyle.setStyle('font-size', '300%');
    myStyle.setStyle('background-color', 'red');
    myStyle.removeStyle('background-color');
    alert(myStyle.getCSS());
}

function task2p1() {
    let myButton = new Button(200, 50, 'Reload');
    myButton.showBtn();
}

function task2p2() {
    let myBButton = new BootstrapButton(200, 50, 'Reload', '#f44336');
    myBButton.showBtn();
}

function task3 () {
    let myDate = new ExtendedDate(new Date("2025-11-12"));
    alert(`We are working with 2025-11-12.

    Current date is: ${myDate.getDateText()}
    Future date? ${myDate.isFuture()}
    Leap year? ${myDate.isLeapYear()}
    Next date is ${myDate.getNextDate()}`)
}