function convertUnits() {
    const ratio = 0.621371;
    let km = prompt("Enter the number of kilometers you want to convert to miles:");
    alert(`${km} km = ${(km * ratio).toFixed(2)} miles`);
}

function calculateTime() {
    let hours = +prompt("Enter the current hour (0-23):");
    let minutes = +prompt("Enter the current minute (0-59):")
    // It might not be the best solution, but it is less likely to contain bugs.
    let minutesTotal = hours * 60 + minutes
    const minutesInDay = 24 * 60
    let hoursLeft = Math.floor((minutesInDay - minutesTotal) / 60)
    let minutesLeft = minutesInDay - hours * 60 - minutes - hoursLeft * 60
    alert(`There are ${hoursLeft} hours and ${minutesLeft} minutes left until the end of the day.`)
}

function flipNumber() {
    let num = prompt("Enter a 3-digit number:");
    let ones = num % 10;
    let tens = Math.floor(num % 100 / 10);
    let hundreds = Math.floor(num / 100);
    alert(`Backward representation of ${num} is ${ones * 100 + tens * 10 + hundreds}`);
}
