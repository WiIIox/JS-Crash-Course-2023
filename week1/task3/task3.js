function charByNumber() {
    let num = +prompt("Enter a number from 0 to 9: ");

    switch(num) {
    case 0: alert(")"); break;
    case 1: alert("!"); break;
    case 2: alert("@"); break;
    case 3: alert("#"); break;
    case 4: alert("$"); break;
    case 5: alert("%"); break;
    case 6: alert("^"); break;
    case 7: alert("&"); break;
    case 8: alert("*"); break;
    case 9: alert("("); break;
    default: alert("Invalid input");
    }
}

function isLeapYear() {
    let year = +prompt("Enter a year: ");
    alert(`${year} is ${(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) ? '':'not '}a leap year.`);
}

function getNextDate() {
    let day = +prompt("Enter day (1-31): ");
    let month = +prompt("Enter month (1-12): ");
    let year = +prompt("Enter year: ");
    let maxDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month-1];

    if (day < maxDays) {
        day++;
    } else {
        day = 1;
        if (month < 12) {
            month++;
        } else {
            month = 1;
            year++;
        }
    }

    alert(`The next date is ${day}.${month}.${year}`)
}

function calculateSum() {
    range_start = +prompt("Enter the first number of range:");
    range_end = +prompt("Enter the last number of range:")
    let result = 0;
    for (let i = range_start; i <= range_end; i++) {
        result += i;
    }
    alert(`The sum of the numbers from ${range_start} to ${range_end} is ${result}.`)
}

function countDigits() {
    let number = +prompt("Enter your number:")
    let counter = 0;
    while (number !== 0) {
        counter++;
        number = Math.floor(number / 10);
    }
    alert(`The number contains ${counter} digits.`)
}

function getNumbersInfo() {
    let info = {
        positive: 0,
        negative: 0,
        zeroes: 0,
        even: 0,
        odd: 0,
    };

    for (let i = 1; i <= 10; i++) {
        let number = +prompt(`Enter number #${i}:`)
        number % 2 === 0 ? info.even++ : info.odd++;
        if (number === 0) {
            info.zeroes++;
        } else {
            number < 0 ? info.negative++ : info.positive++; 
        }
    }

    alert(`
    Even numbers: ${info.even}
    Odd numbers: ${info.odd}
    Positive numbers: ${info.positive}
    Negative numbers: ${info.negative}
    Zeroes: ${info.zeroes}`);
}

function getNextWeekday() {
    let dayOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let i = 0;
    let next = true;

    do {
        next = confirm(`${dayOfWeek[i]}. Do you want to see the next day?`)
        i = (i + 1) % 7
    } while (next);
}