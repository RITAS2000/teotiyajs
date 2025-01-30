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
// - об'єднаннує всі елементи масиву в один рядок, вставляючи між ними вказаний роздільник;
// - array.join(separator) За замовчуванням використовується кома (,);

const words4 = ["Hello", "world", "!"];

// console.log(words4.join());       // "Hello,world,!"
// console.log(words4.join(" "));    // "Hello world !"
// console.log(words4.join("-"));    // "Hello-world-!"
// console.log(words4.join(""));     // "Helloworld!"

const numbers10 = [1, 2, 3, 4, 5];

// console.log(numbers10.join(" + ")); // "1 + 2 + 3 + 4 + 5"
// console.log(numbers10.join(" → ")); // "1 → 2 → 3 → 4 → 5"10

const items = ["<li>Apple</li>", "<li>Banana</li>", "<li>Cherry</li>"];
const listHTML = "<ul>" + items.join("") + "</ul>";

// console.log(listHTML);
// "<ul><li>Apple</li><li>Banana</li><li>Cherry</li></ul>"

const emptyArray = [];

// console.log(emptyArray.join("-")); // ""
// console.log(emptyArray.join()); // "" Якщо масив порожній, результат буде порожнім рядком ("")

const board = [
  ["R", "N", "B", "Q", "K", "B", "N", "R"],
  ["P", "P", "P", "P", "P", "P", "P", "P"],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  ["p", "p", "p", "p", "p", "p", "p", "p"],
  ["r", "n", "b", "q", "k", "b", "n", "r"],
];

// console.log(board.map(row => row.join(" ")).join("\n"));

// ==============================================================================
// ? keys
// - повертає ітератор, який містить ключі (індекси) елементів масиву;
// TODO keys() з forEach() (⚠️ НЕ працює напряму!) треба пертворити у масив
const fruits7 = ["apple", "banana", "cherry"];
const iterator2 = fruits7.keys(); // треба перебрати ітератор або зробити масив

for (let key of iterator2) {
  //   console.log(key);
}

const numbers11 = [10, 20, 30, 40];
const keysArray = Array.from(numbers11.keys());

// console.log(keysArray); // [0, 1, 2, 3]

const emptyArray1 = new Array(5); // Навіть якщо масив пустий (але має довжину), keys() повертає індекси.
const keysIterator = emptyArray1.keys();

for (let key of keysIterator) {
  //   console.log(key);
}
const letters2 = ["a", "b", "c"];
Array.from(letters2.keys()).forEach(key => {
  //   console.log(key);
});

const tableData = ["John", "Doe", 25, "Developer"];

const keys = tableData.keys();
for (let key of keys) {
  //   console.log(`Column ${key}: ${tableData[key]}`);
}
// Column 0: John
// Column 1: Doe
// Column 2: 25
// Column 3: Developer
// TODO Щоб побачити всі значення, треба розгорнути ітератор у масив: console.log([...iterator]);

// ==============================================================================
// ? lastIndexOf()
// - шукає в масиві останнє входження заданого значення і повертає його індекс. Якщо значення не знайдено, повертає -1
// - array.lastIndexOf(searchElement, fromIndex);

const numbers12 = [2, 5, 9, 2, 5, 7, 2, 4];
// console.log(numbers12.lastIndexOf(2)); // 6 (останній "2" на індексі 6)
// console.log(numbers12.lastIndexOf(5)); // 4 (останній "5" на індексі 4)
// console.log(numbers12.lastIndexOf(10)); // -1 (немає такого числа)

const letters3 = ["a", "b", "c", "a", "b", "c"];
// console.log(letters3.lastIndexOf('b', 3));  // 1 (останній "b" до індексу 3)
// console.log(letters3.lastIndexOf('c', 4));  // 2 (останній "c" до індексу 4)

// ==============================================================================
// ? map()
// - створює новий масив, виконуючи задану функцію для кожного елемента вихідного масиву;
// - array.map(callback(element, index, array), thisArg)

const numbers13 = [1, 2, 3, 4, 5];
const squared = numbers13.map(num => num ** 2);
// console.log(squared);  // Виведе: [1, 4, 9, 16, 25]13

const words = ["hello", "world", "javascript"];
const upperCaseWords = words.map(word => word.toUpperCase());
// console.log(upperCaseWords); // Виведе: ["HELLO", "WORLD", "JAVASCRIPT"]

const users2 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 },
];

const names1 = users2.map(user => user.name);
// console.log(names1); // Виведе: ["Alice", "Bob", "Charlie"]
// TODO Без {} функція автоматично повертає результат виразу.
// TODO З {} треба обов’язково писати return, інакше буде undefined.

// ==============================================================================
// ? pop()
// – видаляє останній елемент масиву і повертає його.
// - Якщо масив порожній – повертає undefined;
// - змінює оригінальний масив.
// - Якщо масив порожній – повертає undefined

const fruits4 = ["apple", "banana", "cherry"];

const lastFruit = fruits4.pop(); // Видаляємо останній елемент

// console.log(lastFruit); // "cherry"
// console.log(fruits4);    // ["apple", "banana"] (масив змінився)

const emptyArr = [];

const removed = emptyArr.pop();

// console.log(removed);  // undefined
// console.log(emptyArr); // [] (масив залишається порожнім)

// ==============================================================================
// ? push()
// – додає один або кілька елементів у кінець масиву.
// - змінює оригінальний масив;
// - array.push(element1, element2, ...);
// - Повертає довжина масиву;

const fruits14 = ["apple", "banana"];
const newLength = fruits14.push("cherry"); // Додаємо "cherry"
// console.log(fruits14); // ["apple", "banana", "cherry"]
// console.log(newLength); // 3 (нова довжина масиву)

const numbers = [1, 2, 3];
numbers.push(4, 5, 6);
// console.log(numbers);  // [1, 2, 3, 4, 5, 6]

const emptyArr2 = [];
emptyArr2.push("first item");
// console.log(emptyArr2); // ["first item"]
// TODO працює з порожнім масивом.

// ==============================================================================
// ? reduce()
// – метод масиву, який зводить його до одного значення;
// - виконує функцію-колбек на кожному елементі масиву, накопичуючи результат;
// - array.reduce((accumulator, currentValue, index, array) => {Логіка обробки}, initialValue);

const numbers14 = [1, 2, 3, 4, 5];
const sum1 = numbers14.reduce((acc, num) => acc + num, 0);
// console.log(sum1);  // 15

const nums = [10, 5, 8, 20, 3];
const maxNum = nums.reduce((max, num) => (num > max ? num : max), nums[0]);
// console.log(maxNum);  // 20

const fruits15 = ["apple", "banana", "apple", "orange", "banana", "apple"];
const count = fruits15.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
// console.log(count); // { apple: 3, banana: 2, orange: 1 }
// - створює об'єкт, де рахує, скільки разів зустрічається кожен фрукт.

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];
const totalAge = people.reduce((acc, person) => acc + person.age, 0);
// console.log(totalAge); // 90
// - підсумовує значення властивості age всіх об'єктів у масиві.
// TODO Без initialValue метод візьме перший елемент масиву як стартове значення.

// ==============================================================================
// ? reduceRight()
// - працює так само, як reduce(), але проходить масив справа наліво (з кінця до початку)

const words5 = ["world", "the", "to", "Welcome"];
const sentence2 = words5.reduceRight((acc, word) => acc + " " + word);
// console.log(sentence2); // "Welcome to the world"

const numbers15 = [3, 4, 7];
const result4 = numbers15.reduceRight((acc, num) => acc / num);
// console.log(result4); // 7 / 4 / 3 = 0.583....

const nestedArrays = [
  [3, 4],
  [1, 2],
  [5, 6],
];
const flattened3 = nestedArrays.reduceRight((acc, arr) => acc.concat(arr), []);
// console.log(flattened3); // [5, 6, 1, 2, 3, 4]
// - об'єднує вкладені масиви в один, починаючи з кінця масиву. Це змінює порядок елементів у порівнянні з reduce();

// ==============================================================================
// ? reverse()
// -  змінює порядок елементів у масиві на протилежний. Він мутує (змінює) сам масив і повертає його;
// щоб отримати новий масив, не змінюючи старий, можна використовувати .slice()

const numbers16 = [1, 2, 3, 4, 5];
numbers16.reverse();
// console.log(numbers16); // [5, 4, 3, 2, 1]

const numbers17 = [1, 2, 3, 4, 5];
const reversedNumbers = numbers17.slice().reverse();
// console.log(reversedNumbers); // [5, 4, 3, 2, 1]
// console.log(numbers17); // [1, 2, 3, 4, 5] (НЕ змінився)

const users3 = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

users3.reverse();
// console.log(users3);
// Виведе:
// [
//   { id: 3, name: "Charlie" },
//   { id: 2, name: "Bob" },
//   { id: 1, name: "Alice" }
// ]

// ==============================================================================
// ? shift()
// - використовується для видалення першого елемента з масиву та повертає його значення. Після видалення елемента індекси решти елементів зсуваються на один вліво.
// - Повертає значення елемента, який був видалений (перший елемент масиву).
// - Якщо масив порожній, повертає undefined.

let fruits5 = ["apple", "banana", "cherry"];
let firstFruit = fruits5.shift();
// console.log(firstFruit); // "apple"
// console.log(fruits5); // ['banana', 'cherry']

// ==============================================================================
// ? slice()
// - використовується для створення нової копії частини масиву, не змінюючи оригінальний масив. Він приймає два параметри: початковий індекс і кінцевий індекс (не включаючи його), і повертає новий масив, що містить елементи між цими індексами.
// - array.slice(start, end);
// start (необов'язковий): Індекс, з якого починається копіювання елементів (включаючи цей індекс). Якщо значення від'ємне, воно вказує на кількість елементів з кінця масиву.
// end (необов'язковий): Індекс, на якому копіювання завершується (не включаючи цей індекс). Якщо не вказано, копіювання буде йти до кінця масиву.
// - повертає новий масив, що містить копію елементів з масиву (або символів з рядка), починаючи з індексу start і закінчуючи індексом end.

let fruits6 = ["apple", "banana", "cherry", "date", "elderberry"];

let slicedFruits1 = fruits6.slice(1, 4);

// console.log(slicedFruits1); // ['banana', 'cherry', 'date']
// console.log(fruits6); // ['apple', 'banana', 'cherry', 'date', 'elderberry'] (масив оригінальний не змінено)
let slicedFruits2 = fruits6.slice(-3, -1);
// console.log(slicedFruits2); // ['cherry', 'date']

// ==============================================================================
// ? some()
// - перевіряє, чи хоча б один елемент масиву задовольняє умові, яку вказує передана функція. Він повертає булеве значення: true, якщо хоча б один елемент проходить перевірку, і false, якщо жоден не проходить
// - array.some(callback(currentValue, index, array), thisArg);

const numbers18 = [2, 4, 6, 7, 10];
const hasOddNumber = numbers18.some(num => num % 2 !== 0);
// console.log(hasOddNumber); // true (є непарне число 7)

const words6 = ["apple", "banana", "cherry", "avocado"];
const startsWithA = words6.some(word => word.startsWith("a"));
// console.log(startsWithA); // true (є слово, яке починається на 'a')
// TODO Якщо масив порожній, метод завжди повертає false, оскільки немає елементів для перевірки

// ==============================================================================
// ? sort()
// - використовується для сортування елементів масиву на місці (рядки сортуться за алфавітом)
// - змінює поточний масив
// - може призводити до неочікуваних результатів при сортуванні чисел. Тому часто застосовують власні функції порівняння для точнішого сортування.
// - array.sort([compareFunction]);

const numbers19 = [10, 5, 8, 1, 7];
numbers19.sort((a, b) => a - b);
// console.log(numbers19); // [1, 5, 7, 8, 10]

const users4 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 30 },
];
// Сортуємо за віком (зростання)
users4.sort((a, b) => a.age - b.age);
// console.log(users4);
// [
//   { name: "Bob", age: 20 },
//   { name: "Alice", age: 25 },
//   { name: "Charlie", age: 30 },
// ];

// ==============================================================================
// ? splice()
// - змінює масив
// - Використовується для видалення, додавання або заміни елементів;
// - Повертає масив видалених елементів
// - array.splice(start, deleteCount, item1, item2, ...);
// start – індекс, з якого починається зміна масиву.
// deleteCount – скільки елементів потрібно видалити (якщо 0, видалення не відбувається).
// item1, item2, ... – елементи, які потрібно вставити (необов'язково).

const array24 = [1, 2, 3, 4, 5];
array24.splice(2, 2); // Видаляє 2 елементи, починаючи з індексу 2
// console.log(array24); // [1, 2, 5]

let array25 = [1, 2, 5];
array25.splice(2, 0, 3, 4); // Додає 3 і 4 на місце індексу 2
// console.log(array25); // [1, 2, 3, 4, 5]

let array26 = [1, 2, 3, 4, 5];
array26.splice(1, 2, "a", "b"); // Видаляє 2 елементи з індексу 1 та вставляє 'a', 'b'
// console.log(array26); // [1, 'a', 'b', 4, 5]

let array27 = [10, 20, 30, 40];
let removed1 = array27.splice(1, 2); // Видаляє [20, 30]
// console.log(array27); // [10, 40]
// console.log(removed1); // [20, 30] повертає видалені елементи

let array28 = [10, 20, 30, 40, 50];
array28.splice(2); // Видаляє всі елементи, починаючи з індексу 2
// console.log(array28); // [10, 20]
// Якщо передати тільки start, то видаляється все з цього індексу до кінця масиву.

// ==============================================================================
// ? toLocaleString()
// - використовується для форматування дат, чисел або валют згідно з локаллю користувача або заданими параметрами. Він дозволяє вивести значення у вигляді рядка в залежності від мовних та регіональних налаштувань.
// - автоматично викликає toString() на кожному елементі масиву перед форматуванням
// - value.toLocaleString([locales[, options]])
// locales (необов'язковий): Мова або локаль для форматування. Якщо не вказано, використовується стандартна локаль браузера.
// options (необов'язковий): Об'єкт з параметрами для налаштування форматування.

const numbers20 = [1000, 2000, 3000, 4000];

// console.log(numbers20.toLocaleString("en-US")); // "1,000,2,000,3,000,4,000" (для США)
// console.log(numbers20.toLocaleString("de-DE")); // "1.000,2.000,3.000,4.000" (для Німеччини)
// console.log(numbers20.toLocaleString("uk-UA")); // "1 000,2 000,3 000,4 000" (для України)

let dates = [new Date(2025, 0, 1), new Date(2025, 1, 1)];
// console.log(dates.toLocaleString('en-US')); // "1/1/2025, 2/1/2025"
// console.log(dates.toLocaleString('uk-UA')); // "01.01.2025, 01.02.2025"

let amounts = [1000.123, 2000.456, 3000.789];
// console.log(amounts.toLocaleString('en-US', { style: 'currency', currency: 'USD' }));
// "$1,000.12, $2,000.46, $3,000.79"
// console.log(amounts.toLocaleString('uk-UA', { style: 'currency', currency: 'UAH' }));
// "1 000,12 грн, 2 000,46 грн, 3 000,79 грн"

let mixedArray = [1000, new Date(2025, 0, 1), "hello", 5000];
// console.log(mixedArray.toLocaleString("en-US")); // "1,000,1/1/2025, 12:00:00 AM, hello, 5,000
// TODO зручно для виведення даних в інтерфейсі користувача, де важливо враховувати мову і регіональні налаштування.

// ==============================================================================
// ? toReversed()
// - створити новий масив, у якому елементи розташовані в зворотному порядку відносно оригінального масиву

let numbers21 = [1, 2, 3, 4, 5];
let reversedNumbers1 = numbers21.toReversed();
// console.log(reversedNumbers1); // [5, 4, 3, 2, 1]
// console.log(numbers21);        // [1, 2, 3, 4, 5] (оригінальний масив не змінено)

let words7 = ["apple", "banana", "cherry"];
let reversedWords = words7.toReversed();
// console.log(reversedWords); // ['cherry', 'banana', 'apple']
// console.log(words7); // ['apple', 'banana', 'cherry'] (оригінальний масив не змінено)

// ==============================================================================
// ? toSorted()
// - дозволяє створити новий масив, який є відсортованим за вказаним порядком, при цьому не змінюючи оригінальний масив
// - let sortedArray = array.toSorted([compareFunction]);
// - compareFunction (необов'язковий) — функція, яка визначає порядок сортування. Якщо її не вказати, масив буде відсортовано за замовчуванням (для чисел - за зростанням, для рядків - в лексикографічному порядку).

let numbers22 = [5, 3, 8, 1, 2];
let sortedNumbers1 = numbers22.toSorted();
// console.log(sortedNumbers1); // [1, 2, 3, 5, 8]
// console.log(numbers22);     // [5, 3, 8, 1, 2] (оригінальний масив не змінено)

let sortedNumbers2 = numbers22.toSorted((a, b) => b - a);
// console.log(sortedNumbers2); // [8, 5, 3, 2, 1]
// console.log(numbers22); // [5, 3, 8, 1, 2] (оригінальний масив не змінено)

let words8 = ["banana", "apple", "cherry", "date"];
let sortedWords = words8.toSorted();
// console.log(sortedWords); // ['apple', 'banana', 'cherry', 'date']
// console.log(words8); // ['banana', 'apple', 'cherry', 'date'] (оригінальний масив не змінено)

let people1 = [
  { name: "John", age: 25 },
  { name: "Alice", age: 30 },
  { name: "Bob", age: 20 },
];

let sortedPeople = people1.toSorted((a, b) => a.age - b.age);
// console.log(sortedPeople); // [{ name: 'Bob', age: 20 }, { name: 'John', age: 25 }, { name: 'Alice', age: 30 }]
// console.log(people1);       // [{ name: 'John', age: 25 }, { name: 'Alice', age: 30 }, { name: 'Bob', age: 20 }]

// ==============================================================================
// ? toSpliced()
// - дозволяє створити новий масив, який є копією вихідного, але з видаленими елементами і/або вставленими новими елементами
// - const newArray = array.toSpliced(start, deleteCount, ...items);

const numbers23 = [1, 2, 3, 4, 5];
const newNumbers1 = numbers23.toSpliced(2, 2);
// console.log(newNumbers1); // [1, 2, 5]
// console.log(numbers23); // [1, 2, 3, 4, 5] (оригінальний масив не змінено)

const numbers24 = [1, 2, 5];
const newNumbers2 = numbers24.toSpliced(2, 0, 3, 4);
// console.log(newNumbers2); // [1, 2, 3, 4, 5]
// console.log(numbers24);   // [1, 2, 5] (оригінальний масив не змінено)

// ==============================================================================
// ? toString()
// - Перетворює масив на рядок, розділений комами.

const numbers25 = [1, 2, 3, 4];
// console.log(numbers25.toString()); // "1,2,3,4"

const fruits8 = ["apple", "banana", "cherry"];
// console.log(fruits8.toString()); // "apple,banana,cherry"

const mixedArray1 = [1, "apple", true, null]; // для null не має методу toString і повертається порожній рядок.
// console.log(mixedArray1.toString()); // "1,apple,true,"

// ==============================================================================
// ? unshift()
// - змінює оригінальний масив і повертає нову довжину масиву.
// - може додавати декілька елементів відразу;
// - Якщо масив порожній, метод додасть елементи в порожній масив
// - array.unshift(element1, element2, ..., elementN);

const fruits9 = ["banana", "orange"];
fruits9.unshift("apple");
// console.log(fruits9); // ["apple", "banana", "orange"]

const animals = ["dog", "cat"];
const length = animals.unshift("rabbit", "hamster");
// console.log(animals); // ["rabbit", "hamster", "dog", "cat"]
// console.log(length); // 4 (новий розмір масиву)

// ==============================================================================
// ? values()
// -  повертає новий ітератор для масиву, який дозволяє пройти по його значеннях.
// - const iterator = array.values();
// - зручний для ітерацій через значення масиву без індексів.
// - не змінює оригінальний масив.

const fruits10 = ["apple", "banana", "cherry"];
const iterator3 = fruits10.values();

// console.log(iterator3.next().value); // "apple"
// console.log(iterator3.next().value); // "banana"
// console.log(iterator3.next().value); // "cherry"
// console.log(iterator3.next().value); // undefined
// Метод next() повертає об'єкт, який містить два властивості:
// value — значення поточного елемента.
// done — булевий прапор, що вказує, чи є ще елементи в колекції (коли колекція завершується, done стає true).

const numbers26 = [10, 20, 30, 40];
const iterator4 = numbers26.values();

for (const value of iterator4) {
  console.log(value);
}
// Виведе:
// 10
// 20
// 30
// 40

// ==============================================================================
