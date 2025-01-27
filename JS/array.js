// ==============================================================================
// ? at()
// - повертає елемент массиву за вказаним індексом;
// - приймає від'ємні значення;
// - повертає indefined, якщо значення за таким індексом відсутнє.

const stores = ["Рукавичка", "Близенько", "АТБ", "Фокстрот", "МобіМанія"];
// console.log('🚀 ~ stores:', stores);

const store1 = stores.at(1);
// console.log('🚀 ~ store1:', store1);
// console.log(stores[1]); // також шукає за індексом

const store2 = stores.at(-1); // для пошуку з кінця масиву
// console.log('🚀 ~ store2:', store2);
// console.log(stores[-1]); // !не пиймає відємні значення поверитає undefined.

// console.log(stores.at(-1) === stores[stores.length - 1]); // TODO можно використовувати щоб скоротити запис.

// ==============================================================================
// ? concat()
// - об'єднує два або бильше масивів;
// - не змінює оригінальний масив;
// - створює новий масив;

const array1 = [1, 2, 3];
// console.log('🚀 ~ array1:', array1);

const array2 = [4, 5, 6];
// console.log('🚀 ~ array2:', array2);

const newArray1 = array1.concat(array2);
// console.log('🚀 ~ newArray1:', newArray1);

const array3 = [7, 8, 9];
// console.log('🚀 ~ array3:', array3);

const newArray2 = array1.concat(array2, array3); // через кому довільна кількість масивів;
// console.log('🚀 ~ newArray2:', newArray2);

// ==============================================================================
// ? Array()  //constructor
// - створює масив;
const array4 = Array(1, 2, 3, "цукор", true);
// console.log("🚀 ~ array:", array4); // [1, 2, 3, 'цукор', true]

const str1 = "Привіт, як справи?";
const str2 = "Добре!";
const array5 = Array(str1, str2);
// console.log("🚀 ~ array5:", array5); // ['Привіт, як справи?', 'Добре!']

// ==============================================================================
// ? Array.from()  //constructor
// - створює массив (з ітерованих елементів)
// TODO Ітерабельні об'єкти — це об'єкти, які можна перебирати (ітерацію) за допомогою for...of або розгортати ...spread.

const str3 = "Супер!";
const array6 = Array.from(str3);
// console.log("🚀 ~ array6:", array6); // ['С', 'у', 'п', 'е', 'р', '!']
const sentence1 = "Сьогодні гарна погода";
const array7 = Array.from(sentence1);
// console.log("🚀 ~ array7:", array7); // ['С', 'ь', 'о', 'г', 'о', 'д', 'н', 'і', ' ', 'г', 'а', 'р', 'н', 'а', ' ', 'п', 'о', 'г', 'о', 'д', 'а']

const num1 = 7689;
// console.log("🚀 ~ num1:", typeof num1); // number
const array8 = Array.from(num1);
// console.log("🚀 ~ array8:", array8); // повертає пустий масив (Числа не мають методу Symbol.iterator)
const array9 = Array.from(String(num1), Number); // треба перетворити у рядки а рядки в числа (другий агрумент калбек функция Number())
// console.log(array9); //[7, 6, 8, 9]

function example() {
  const array10 = Array.from(arguments); //  масивоподібні об'єкти (arguments)
  //   console.log(array10);
}
example(1, 2, 3); // [1, 2, 3]
example("один", "два"); // ["один", "два"];
// const num = 98765;
// const array10 = Array.from(String(num)).map(Number);

// console.log(array10); // або викликати map()

const paragraphs = document.querySelectorAll("p");
const array11 = Array.from(paragraphs).map(p => p.textContent);
// console.log(array11); // ['Привіт!', 'Як справи?', 'Добре!']

// const paragraphs = document.querySelectorAll("p");
// const array11 = Array.from(paragraphs, p => p.textContent);// скорочено просто калбек функция другим параметром

// console.log(array11);

//!
// const mySet = new Set([1, 2, 3, 3, 4]);
// const arrayFromSet = Array.from(mySet);
// console.log(arrayFromSet); // [1, 2, 3, 4] (дублікати прибрані)
//!
// const myMap = new Map([
//   ["a", 1],
//   ["b", 2],
// ]);
// const keys = Array.from(myMap.keys());
// console.log(keys); // ['a', 'b']
//!
// const numbers = Array.from([1, 2, 3], x => x * 2);
// console.log(numbers);// [2, 4, 6]
// ! так теж можно але це зайве можно просто використати split(" ") з потрібним роздільником
//  const sentence = "This is a simple sentence";
// const wordsArray = Array.from(sentence.split(" "));
// console.log(wordsArray);
// TODO спосіб як зробити обєкт итерабільним
// const person = {
//   name: "Alice",
//   age: 25,
//   city: "New York",

//   [Symbol.iterator]() {
//     const entries = Object.entries(this);
//     let index = 0;

//     return {
//       next() {
//         if (index < entries.length) {
//           return { value: entries[index++], done: false };
//         } else {
//           return { done: true };
//         }
//       },
//     };
//   },
// };

// for (const [key, value] of person) {
//   console.log(key, value); // name Alice // age 25 // city New York
// }

// ==============================================================================
// ? Array.fromAsync() //constructor
// -  використовується для створення масиву з асинхронних даних.
// TODO Гнучкість: Підтримує використання асинхронних функцій або генераторів, що дозволяє працювати з великими наборами даних, отриманих з мережі або з інших асинхронних джерел.
//!
// const asyncIterable = {
//   async *[Symbol.asyncIterator]() {
//     yield 1;
//     yield 2;
//     yield 3;
//   }
// };
// Array.fromAsync(asyncIterable).then(arr => console.log(arr));  // [1, 2, 3]
//!
// async function* asyncGenerator() {
//   yield "apple";
//   yield "banana";
//   yield "cherry";
// }

// (async () => {
//   const fruits = await Array.fromAsync(asyncGenerator());
//   console.log(fruits); // ["apple", "banana", "cherry"]
// })();
//!
// async function fetchData(url) {
//   const response = await fetch(url);
//   return await response.json();
// }

// (async () => {
//   const urls = [
//     "https://jsonplaceholder.typicode.com/posts/1",
//     "https://jsonplaceholder.typicode.com/posts/2",
//   ];

//   const posts = await Array.fromAsync(urls, async url => {
//     const post = await fetchData(url);
//     return post.title; // Вибірка заголовків з кожного посту
//   });

//   console.log(posts); // ["Title 1", "Title 2"]
// })();

// ==============================================================================
// ? Array.isArray() //constructor
// - перевіряє чи є переданий об'єкт масивом.
// - повертає true або false

// console.log(Array.isArray(array4)); // true
// console.log(Array.isArray(sentence1)); // false

// ==============================================================================
// ? Array.of() //constructor
// - створює новий масив з переданих аргументів;
const array12 = Array.of(1, 2, 3);
// console.log("🚀 ~ array12:", array12); // [1, 2, 3]

// ==============================================================================
// ? copyWithin()
// - озволяє копіювати частину масиву в іншу частину цього ж масиву;
// - не створює новий массив, здийснює пернесення елементів в поточному массиві;
// TODO - array.copyWithin(target, start, end)
// target – індекс, в який потрібно скопіювати елементи. Якщо target є від'ємним, він вказує на індекс з кінця масиву. може бути відємним
// start (необов'язковий) – індекс елемента, з якого почнеться копіювання. За замовчуванням це 0. може бути відємним
// end (необов'язковий) – індекс, на якому копіювання завершиться. За замовчуванням це кінець масиву. може бути відємним

const array13 = [7, 13, 3, 98, 5];
array13.copyWithin(0, 2, 4); // не включає 4
// console.log(array13); // [3, 98, 3, 98, 5]

const array14 = ["о", "c", "і", "н", "ь"];
array14.copyWithin(-2, 1, -3);
// console.log(array14); // ['о', 'c', 'і', 'c', 'ь']

// ==============================================================================
// ? entries()
// - допомагає отримати пару індекс-значення для кожного елемента масиву

const array15 = ["apple", "banana", "cherry"];

const iterator = array15.entries(); // iterator значення можуть бути пердані тільки після ітерації
// console.log("🚀 ~ iterator:", iterator);

for (let [index, value] of iterator) {
  console.log(index, value);
}
// 0 'apple'
// 1 'banana'
// 2 'cherry'

const array16 = ["apple", "banana", "cherry"];
const entriesArray = Array.from(array16.entries()); // створює масив масивів
// console.log(entriesArray); // [[0, 'apple'], [1, 'banana'], [2, 'cherry']]

const array17 = ["apple", "banana", "cherry", "mango"];
const iterator1 = array17.entries(); // Створюємо ітератор з допомогою entries()

iterator1.forEach(([index, value]) => {
  console.log(index, value); // Використовуємо forEach для перебору елементів через ітератор
});

// ==============================================================================
// ? every()
// - використовується для перевірки, чи задовольняють всі елементи масиву певну умову
//  приймає функцію зворотного виклику (callback), яка буде виконуватись для кожного елемента масиву, і повертає true, якщо умова виконується для кожного елемента масиву, або false, якщо хоча б один елемент не відповідає умові.
// TODO - array.every(callback(currentValue, index, array), thisArg);

const numbers1 = [12, 34, 55, 23, 19];
const allGreaterThanTen = numbers1.every(num => num > 10);
// console.log(allGreaterThanTen); // true

const numbers2 = [2, 4, 6, 8, 10];
const allEven1 = numbers2.every(num => num % 2 === 0);
// console.log(allEven1); // true

const numbers3 = [2, 4, 5, 8, 10];
const allEven2 = numbers3.every(num => num % 2 === 0);
console.log(allEven2); // false (тому що 5 — непарне число)

const words1 = ["apple", "banana", "cherry"];
const allContainA = words1.every(word => word.includes("a"));
console.log(allContainA); // false (у черри немае бкуви "a")

// ==============================================================================
// ? fill()
// - змінює існуючий масив, заповнюючи його заданим значенням у певному діапазоні індексів.
// - arr.fill(value, start, end)
// value – значення, яким заповнюється масив.
// start (необов’язково) – індекс, з якого починається заповнення (за замовчуванням 0). може бути відємним
// end (необов’язково) – індекс, до якого триває заповнення (НЕ включно, за замовчуванням arr.length). може бути відємним
