function calculateAge() {
    const currentYear = new Date().getFullYear();
    let birthYear = prompt("Please enter your birth year:");
    alert(`Your age should be ${currentYear - birthYear}.`);
}

function calculateCircleArea() {
    let radius = prompt("Please enter the radius of the circle:");
    alert(`The area of the circle is ${(Math.PI * radius**2).toFixed(2)} square units.`);
}

function calculateSpeed() {
    let distance = prompt("What is the distance between the two cities? (km)");
    let time = prompt("How much time do you need to reach one city from another? (hours)");
    alert(`You need to move at a speed of ${(distance / time).toFixed(2)} km/h to arrive on time.`);
}

function convertCurrency() {
    const ratio = 0.94;
    let dollars = prompt("How many dollars do you want to convert to euros?");
    alert(`You will get ${(dollars * ratio).toFixed(2)} euros after conversion.`);
}

function calculateFiles() {
    const fileSize = 820;
    let capacity = prompt("What is the capacity of your flash drive? (GB)");
    alert(`Your flash drive might store up to ${Math.floor(capacity * 1024 / fileSize)} files of ${fileSize} MB each.`);
}