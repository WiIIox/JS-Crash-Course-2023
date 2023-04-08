const formatNum = num => String(num).padStart(2, '0');

function timeObject() {
    let timeObj = { 
        hours: 0,
        minutes: 0, 
        seconds: 0,

        displayTimeAlert() {
            alert(`Current time is ${formatNum(this.hours)}:${formatNum(this.minutes)}:${formatNum(this.seconds)}`);
        },

        addSecond() {
            this.seconds++;
            if (this.seconds >= 60) {
              this.seconds = 0;
              this.minutes++;
              if (this.minutes >= 60) {
                this.minutes = 0;
                this.hours++;
                if (this.hours >= 24) {
                  this.hours = 0;
                }
              }
            }
          },

          substractSecond() {
            this.seconds--;
            if (this.seconds < 0) {
              this.seconds = 59;
              this.minutes--;
              if (this.minutes < 0) {
                this.minutes = 59;
                this.hours--;
                if (this.hours < 0) {
                  this.hours = 23;
                }
              }
            }
          },
    };

    timeObj.displayTimeAlert();
    alert("Now, lets add 62 seconds :)");
    for (let i = 0; i < 62; i++) {timeObj.addSecond()};
    timeObj.displayTimeAlert();
    alert("Lets substract 3 seconds :)");
    for (let i = 0; i < 3; i++) {timeObj.substractSecond()};
    timeObj.displayTimeAlert();
};

function writeCurrentTime() {
    document.write('<button onclick="location.reload()">Go back</button><br><br>');
    let curTime = new Date();
    document.write(`Current time is ${formatNum(curTime.getHours())}:${formatNum(curTime.getMinutes())}:${formatNum(curTime.getSeconds())}`);
};

function carObject() {
    let carObj = {
        manufacturer: "Toyota", 
        model: "Corolla", 
        year: 2001, 
        avSpeed: 50,

        displayInfo() {
            alert(`The best car in the world is ${this.manufacturer} ${this.model} ${this.year}.\n It's avarege speed is ${this.avSpeed} km/h!`)
        },

        calcTime(distance) {
            let hours = distance / carObj.avSpeed;
            let hoursWithBreaks = hours + Math.floor(hours / 4);
            let hh = Math.floor(hoursWithBreaks);
            let mm = Math.floor((hoursWithBreaks - hh) * 60);
            return `${hh}h ${mm}m`;
        }
    };

    carObj.displayInfo();
    let distance = +prompt("I bet you are interested in how much time it takes to travel a certain distance!\n Just give me the distance (km) and I'll provide you with the answer.");
    alert(`It takes ${carObj.calcTime(distance)} to travel ${distance} kilometers.`);

}