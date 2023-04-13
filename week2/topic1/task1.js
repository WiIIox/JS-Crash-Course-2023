function arrOperations() {
    // An array of 20 elements from 1 to 100
    let arr = Array.from({length: 20}, () => Math.floor(Math.random() * 100) + 1);
    alert(`Generetad array:\n${arr.join(' ')}`);

    // Each element in another form
    let message = "All the elements in another representation:\n";
    arr.forEach((el, i) => message += `[${i + 1}] - ${el}\n`);
    alert(message);

    // Sorting array in descending order
    let descArr = arr.slice().sort((a, b) => b - a);
    alert(`Array in descending order:\n${descArr.join(' ')}`);

    // The second part of an array filled with zeroes
    let halfZero = arr.slice().fill(0, arr.length / 2);
    alert(`Half of an array filled with zeroes:\n${halfZero.join(' ')}`);

    // Is multiple of 7 in the array
    alert(`There is ${arr.some(num => num % 7 === 0)? '': 'no '}multiple of 7 in the array.`);

    // Removing first three elements from the array
    alert(`An array without the first three elements:\n${arr.slice(3).join(' ')}`);

    // Number of even elements
    alert(`There are ${arr.filter(num => num % 2 === 0).length} even numbers in the array.`);

    // Check for duplicates
    alert(`There are ${arr.length == new Set(arr).size? 'no ': ''}duplicates in the array.`);
}

function countSpaces() {
    let input = prompt("Give me some text");
    alert(`There are ${input.split(' ').length - 1} spaces in your text.`);
}

function upperCaseFirst() {
    let input = prompt("Give me some text");
    alert(input.charAt().toUpperCase() + input.slice(1));
}

function countWords() {
    let sent = prompt("Give me a few words");
    alert(`There are ${sent.split(' ').filter(word => word.trim() !== '').length} words in your sentence`);
}

function abbreviate() {
    let phrase = prompt("Enter your phrase:");
    alert(phrase.split(' ').map(word => word[0].toUpperCase()).join(''));
}

function isPalindrome() {
    let str = prompt("Enter a string:").toLowerCase();
    alert(`Your string is ${str == str.split('').reverse('').join('')? '': 'not '}a palindrome.`);
}

function displayInfo() {
    let url = prompt("Give some sort of url:");
    let a = document.createElement('a');
    a.href = url;
    alert(`url: ${url}\n\ninformation:\n\tprotocol: ${a.protocol.replace(':', '')}\n\tdomain: ${a.hostname}\n\tpath: ${a.pathname.slice(1)}`);
}