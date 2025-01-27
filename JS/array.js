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
  //   console.log(index, value);
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
  //   console.log(index, value); // Використовуємо forEach для перебору елементів через ітератор
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
// console.log(allEven2); // false (тому що 5 — непарне число)

const words1 = ["apple", "banana", "cherry"];
const allContainA = words1.every(word => word.includes("a"));
// console.log(allContainA); // false (у черри немае бкуви "a")

// ==============================================================================
// ? fill()
// - змінює існуючий масив, заповнюючи його заданим значенням у певному діапазоні індексів.
// - arr.fill(value, start, end)
// value – значення, яким заповнюється масив.
// start (необов’язково) – індекс, з якого починається заповнення (за замовчуванням 0). може бути відємним
// end (необов’язково) – індекс, до якого триває заповнення (НЕ включно, за замовчуванням arr.length). може бути відємним
// TODO - зручний для швидкого заповнення масиву певним значенням або очищення даних.

const array18 = [7, 2, 10, 4, 5];
array18.fill(0);
// console.log(array18); // [0, 0, 0, 0, 0]
array18.fill(3, 2);
// console.log(array18); // [0, 0, 3, 3, 3]
array18.fill("hello", 3, -1);
// console.log(array18); // [0, 0, 3, 'hello', 3]

const newArr1 = new Array(5).fill(1); //Заповнення порожнього масиву
// console.log(newArr1); // [1, 1, 1, 1, 1]

// ==============================================================================
// ? filter()
// - створює новий масив, що містить тільки ті елементи, які відповідають заданій умові;
// TODO - оригінальний масив не змінюється; Якщо жоден елемент не відповідає умові – повертається порожній масив.
// - const newArray = array.filter(callback(element, index, array));

const numbers4 = [5, 12, 8, 130, 44];
const filteredNumbers = numbers4.filter(num => num > 10);
// console.log(filteredNumbers); // [12, 130, 44]

const numbers5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers5.filter(num => num % 2 === 0);
// console.log(evenNumbers); // [2, 4, 6, 8, 10]

const words2 = ["apple", "banana", "cherry", "kiwi", "grape"];
const wordsWithA = words2.filter(word => word.includes("a"));
// console.log(wordsWithA); // ["apple", "banana", "grape"]

const users = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 19 },
];

const adults = users.filter(user => user.age >= 18);
// console.log(adults);
// [{ name: "Bob", age: 22 }, { name: "Charlie", age: 19 }]

// ==============================================================================
// ? find()
// - шукає перший відповідний елемент та повертає його
// - array.find(callback(element, index, array), thisArg);
// - поверне undefined якшо жобен елемент не відповідає умові

const numbers6 = [1, 2, 3, 4, 5];
const found = numbers6.find(number => number > 3);
// console.log(found); // 4

const fruits = ["apple", "banana", "cherry", "blueberry", "peach"];
const result = fruits.find(fruit => fruit.startsWith("b"));
// console.log(result); // "banana"
const result1 = fruits.find(fruit => fruit.includes("r"));
// console.log("🚀 ~ result1:", result1);

// ==============================================================================
// ? findIndex()
// - знаходить індекс першого елемента, що задовольняє умову, вказану у функції зворотного виклику (callback). Якщо жоден елемент не задовольняє умову, метод повертає -1;
// - array.findIndex(callback(currentValue, index, array), thisArg);

const index = fruits.findIndex(fruit => fruit.startsWith("b"));
// console.log("🚀 ~ index:", index); // 1

// ==============================================================================
// ? findLast()
// - знаходить останній елемент масиву, що задовольняє умову, вказану у функції зворотного виклику (callback).
// - повертає undefined якщо жоден елемент не задовольняе умову;

const lastElement = fruits.findLast(fruit => fruit.startsWith("b"));
// console.log(lastElement); // "blueberry";

// ==============================================================================
// ? findLastIndex()
// - знаходить індекс останнього елемента, що задовольняє умову, вказану у функції зворотного виклику (callback). Якщо жоден елемент не задовольняє умову, метод повертає -1

const lastIndex = fruits.findLastIndex(fruit => fruit.startsWith("b"));
// console.log(lastIndex); // 3

// ==============================================================================
// ? flat()
// - створює новий масив, зменшуючи вкладені масиви на один рівень. За замовчуванням метод розгортає вкладені масиви на один рівень, але ви можете вказати рівень глибини для розгортання.
// TODO якщо вказати Infinity метод розгорне всі вкладені масиви на будь-яку кількість рівнів.

const array19 = [1, 2, [3, 4], 5, [6, 7]];
const flattened = array19.flat();
// console.log(flattened); // [1, 2, 3, 4, 5, 6, 7]

const array20 = [1, 2, [3, 4, [5, 6]], 7];
const flattened1 = array20.flat(2);
// console.log(flattened1); // [1, 2, 3, 4, 5, 6, 7]

const array21 = [1, 2, [3, [4, [5]]]];
const flattened2 = array21.flat(Infinity);
// console.log(flattened2); // [1, 2, 3, 4, 5]

// ==============================================================================
// ? flatMap()
// - спочатку застосовує функцію до кожного елемента масиву, а потім вирівнює результат на один рівень;
// - є поєднанням методів map() і flat(), де map() змінює елементи масиву, а flat() вирівнює вкладені масиви на один рівень
// - array.flatMap(callback(currentValue, index, array))

const array22 = [1, 2, 3, 4];
const result2 = array22.flatMap(x => [x, x * 2]);
// console.log(result2); // [1, 2, 2, 4, 3, 6, 4, 8] повертає новий масив, що складається з двох елементів: самого елемента і його подвоєної версії.

const words3 = ["hello", "world"];

const letters = words3.flatMap(word => word.split(""));

// console.log(letters); // ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd'] розбивається на окремі літери за допомогою методу split().
// flatMap() спочатку створює масиви літер для кожного слова, а потім зливає їх в один масив.

const array23 = [1, 2, 3, 4, 5];
const result3 = array23.flatMap(x => (x % 2 === 0 ? [x] : []));
// console.log(result3); // [2, 4] Для кожного непарного числа ми повертаємо порожній масив, тому вони не потрапляють у результат.

// ===============================================================================
// ? forEach()
// - використовується для перебору кожного елемента масиву та виконання певної функції для кожного з них. Він є альтернативою циклу for або for...of, але не повертає нового масиву, а просто виконує операцію над кожним елементом.
// - array.forEach(callback(currentValue, index, array))
// -  не повертає нічого (undefined), він лише виконує задану операцію.

const fruits1 = ["apple", "banana", "cherry"];

fruits1.forEach((fruit, index) => {
  //   console.log(`Фрукт №${index + 1}: ${fruit}`);
});
// Фрукт №1: apple
// Фрукт №2: banana
// Фрукт №3: cherry

const users1 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

users1.forEach(user => {
  user.age += 1; // Збільшуємо вік кожного користувача на 1
});
// console.log(users1);
// [
//   { name: "Alice", age: 26 },
//   { name: "Bob", age: 31 },
//   { name: "Charlie", age: 36 },
// ];

const numbers7 = [10, 20, 30, 40];
let sum = 0;

numbers7.forEach(num => {
  sum += num;
});
// console.log(`Сума чисел: ${sum}`); // Сума чисел: 100
//  не повертає новий масив.
// Якщо потрібно створити новий масив із зміненими значеннями, використовуйте map().
//
// Не можна використовувати break або return у forEach().
// Якщо треба достроково перервати виконання, краще використовувати for...of або some()
// TODO зручний для виконання дій над елементами масиву, наприклад, для виводу в консоль або зміни об'єктів у масиві. Але якщо потрібно створити новий масив на основі вихідного, краще використовувати map().

// ==============================================================================
// ? includes()
// - використовується для перевірки, чи містить масив або рядок певне значення.
// - Він повертає true, якщо значення знайдено, і false, якщо ні
// - array.includes(searchElement, fromIndex)

const fruits2 = ["apple", "banana", "cherry"];
// console.log(fruits2.includes("banana")); // true
// console.log(fruits2.includes("grape")); // false

const numbers8 = [1, 2, 3, 4, 5];
// console.log(numbers8.includes(3, 2)); // true (пошук з індексу 2)
// console.log(numbers8.includes(3, 4)); // false (пошук з індексу 4, 3 вже пропущено)

const sentence = "JavaScript is a powerful language";
// console.log(sentence.includes("powerful")); // true
// console.log(sentence.includes("Python")); // false

const email = "example@gmail.com";
// console.log(email.includes("@"));  // true
// console.log(email.includes(".com")); // true
// console.log(email.includes("hotmail")); // false
// TODO Метод includes() зручний для перевірки, чи є певний елемент у масиві або підрядок у рядку. Він працює простіше, ніж indexOf(), бо не потрібно перевіряти !== -1.

// ==============================================================================
// ? indexOf()
// - використовується для пошуку певного елемента в масиві або рядку та повертає індекс першого входження цього елемента. Якщо елемент не знайдено, метод повертає -1.
// - array.indexOf(searchElement, fromIndex)

const fruits3 = ["apple", "banana", "cherry", "banana"];
// console.log(fruits3.indexOf("banana")); // 1 (перше входження "banana" на індексі 1)
// console.log(fruits3.indexOf("grape")); // -1 (елемент не знайдено)

const numbers9 = [1, 2, 3, 4, 2, 5];

// console.log(numbers9.indexOf(2));    // 1 (перше входження 2)
// console.log(numbers9.indexOf(2, 2)); // 4 (починає пошук з індексу 2, знаходить наступну 2)

const letters1 = ["a", "b", "a", "c", "a", "d"];
let indices = [];
let ind = letters1.indexOf("a");

while (ind !== -1) {
  indices.push(ind);
  ind = letters1.indexOf("a", ind + 1); // Продовжуємо пошук після знайденого індексу
}
// console.log(indices); // [0, 2, 4]

const cars = ["BMW", "Audi", "Tesla"];
const carToRemove = "Audi";
const index1 = cars.indexOf(carToRemove);

if (index1 !== -1) {
  cars.splice(index1, 1); // Видаляє "Audi" з масиву
}
// console.log(cars); // ["BMW", "Tesla"]
// TODO Метод indexOf() корисний, коли потрібно знайти позицію елемента в масиві або рядку. Якщо потрібно лише перевірити наявність, краще використовувати includes(), бо він більш читабельний.

// ==============================================================================
// ? join()
// -
