function getPromise(message, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message);
        }, delay);
    });
}

function calcArrProduct(arr) {
    return new Promise((resolve, reject) => {
        const product = arr.reduce((acc, cur) => {
            if (typeof cur === 'number' && !isNaN(cur)) {
                return acc * cur;
            } else {
                reject("Error! Incorrect array!");
            }
        }, 1);
      
        if (!isNaN(product)) {
            resolve(product);
        }
    });
}
  
getPromise("test promise", 2000).then(function(data) {
    console.log(data);
});

calcArrProduct([3, 4, 5]).then(result => console.log(result)); // 60
calcArrProduct([5, "user2", 7, 12]).then(result =>
console.log(result));  // "Error! Incorrect array!"