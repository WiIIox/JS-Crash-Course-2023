# ТЕМА: Асинхронний JS. Promises

## Завдання 1:

Реалізуйте функцію `getPromise(message, delay)`, яка приймає текстове повідомлення message і цілочисельне значення затримки `delay` (в мс) і повертає `Promise`, який чекає задану кількість часу (використовуючи аргумент `delay`) і завершується повідомленням `message`.

Приклад застосування функції:
```
getPromise("test promise", 2000).then(function(data) {
    console.log(data);
});
```
Результат: через 2 сек в консолі виводиться "test promise".

## Завдання 2:

Реалізуйте функцію `calcArrProduct(arr)`, яка приймає масив чисел. Функція повинна повернути `Promise`, робота якого завершується поверненням добутку елементів масиву, якщо вони є типу `Numbers`, або повідомленням "Error! Incorrect array!" у випадку, якщо хоча б 1 елемент масиву нечисловий.

Приклад застосування функції:
```
calcArrProduct([3, 4, 5]).then(result => console.log(result)); // 60
calcArrProduct([5, "user2", 7, 12]).then(result =>
console.log(result)); 
// "Error! Incorrect array!"
```

#### [Solution for this task might be found here.](https://wiiiox.github.io/JS-Crash-Course-2023/week5/topic1/task1/)