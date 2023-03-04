// _______________TASK1

// /**
//  *? Використовуючи функцію if...else,
//  *? напишіть код, який запитуватиме:
//  *? "Яка офіційна назва JavaScript?"
//  *? Якщо користувач вводить "ECMAScript",
//  *? то показати через alert: "Вірно!"
//  *? інакше відобразити:"Не знаєте? ECMAScript!"
//  */

// const ask = prompt('Яка офіційна назва JavaScript?');
// const value = 'ECMAScript';

// if (ask === value) {
//   alert("Вірно!");
// } else {
//   alert("Не знаєте? ECMAScript!");
// }

// ___________________Task 2
/**
 *? Напишіть цикл, який виводить у консоль
 *? числа від max до min за спаданням.
 *? Виведіть у консоль усі парні числа від min до max
 */

// function number(min, max) {
//   for (let i = max; i >= min; i -= 1) {
//     if (i % 2 === 0) {
//       console.log(i);
//     }
//   }
// }

/**
 *? Напишіть програму, яка отримає від користувача
 *? число (кількість хвилин) та виведе в консоль
 *? рядок у форматі годин та хвилин
 *? https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
 *? 70 === 01:10
 */

//  function time(number){

//     let minutes = String(number % 60).padStart(2, 0);

//     let hours = String(Math.floor(number / 60)).padStart(2, 0);
//     console.log(`${hours}:${minutes}`);

//  }
//  time(90);

/**
 *? При завантаженні сторінки користувачеві пропонується
 *? в prompt ввести число. Введення додається до значення
 *? змінної total.
 *? Операція введення числа триває до того часу,
 *? поки користувач не натисне кнопку Cancel у prompt.
 *? Після того як користувач припинив введення, натиснувши на
 *? кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."
 
 *! Робити перевірку, що користувач ввів саме число,
 *! а не довільний набір символів не потрібно.
 */

// let value;
// let total = 0;
// do {
//     value = prompt('Введіть число :');
//     total = total + Number(value);
// }
// while (value !== null)
// alert(`Загальна сума введених чисел дорівнює ${total}`);

// 04-03-2023

//Task 1

/**
 *? Напиши скрипт для об'єкта user,
 *? послідовно:
 *? 1 додати поле mood зі значенням 'happy'
 *? 2 замінить hobby на 'skydiving'
 *? 3 замінить значення premium на false
 *? 4 виводить вміст об'єкта users у форматі
 *? ключ: значення використовуючи Object.keys() і for...of
 */

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tennis",
//   premium: true,
// };

// //1
// user.mood = 'happy';
// //2
// user.hobby = 'skydiving';
// //3
// user.premium = false;
// //4
// for (key of Object.keys(user)) {
//    console.log(`${key}: ${user[key]}` )
// }

/*
У нас є об'єкт, у якому зберігаються зарплати
 *? нашої команди
 *? Напишіть код для підсумовування всіх зарплат і
 *? збережіть його результат у змінній sum.
 *? Якщо об'єкт salaries порожній, то результат має бути 0
 */

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };
// function calcSalaries(obj) {
//   let sum = 0;
//   for (key of Object.values(obj)) {
//      sum += key;
//   }
//   return sum;
// }
// console.log(calcSalaries(salaries));

/**
 *? Напишіть функцію updateObject, яка приймає об'єкт та повертає
 *? новий об'єкт без вказаного параметра
 *? Очікуваний результат updateObject({a: 1, b: 2, c: 3}, 'b') => {a: 1}
 *? https://coderoad.ru/208105/%D0%9A%D0%B0%D0%BA-%D1%83%D0%B4%D0%B0%D0%BB%D0%B8%D1%82%D1%8C-%D1%81%D0%B2%D0%BE%D0%B9%D1%81%D1%82%D0%B2%D0%BE-%D0%B8%D0%B7-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%B0-JavaScript
 */

// const obj = { a: 1, b: 2, c: 3 };

// const upObject = (obj, removeKey) => {
// 	const keys = Object.keys(obj).filter((item) => removeKey !== item);
// 	let obj2 = {};
// 	for (let key of keys) {
// 		// obj2 = {
// 		// 	...obj2,
// 		// 	[key]: obj[key],
// 		// };
// 		obj2[key] = obj[key];
// 	}
// 	console.log(obj2);
// };

// upObject(obj, "c");

// const updateObject = (obj, removeKey) => {
// 	let newObj = { ...obj };
// 	delete newObj[removeKey];
// 	return newObj;
// };

///**
// *? Зробіть знижку 20% на всі фрукти у масиві
// *? Надайте ід для кожного продукту
// */

// const fruits = [
//   { name: "apple", price: 200 },
//   { name: "orange", price: 300 },
//   { name: "grapes", price: 750 },
// ];

// function calcFruits(arr) {
//    /* const arrNew = [];
//     let i = 0;
//     for (let elem of arr) {
//         i += 1;
//         arrNew.push({
//             ...elem,
//             price: elem.price * 0.8,
//             //id : Date.now(),
//             id: i,
//         })
//     }*/
//     let i = 0;
//     const arrNew = arr.map(item => {
//         i += 1;
//         return { ...item,
//             price: item.price * 0.8,
//             //id : Date.now(),
//             id: i,
//         }
//  })
//     return arrNew;
// }
// console.table(calcFruits(fruits));

// tasr next

//TODO:==============================================
/**
*? Поверніть об'єкт, в якому вказано кількість тегів.
*? Очікуваний результат {js: 3, nodejs: 3, html: 2, css: 2, react: 2}

 */
const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

function crTags(arr) {
  const obj = {};
  const newObj = arr
    .flatMap((el) => el.tags)
    .reduce((acc, tag) => {
      return {
        ...acc,
        [tag]: acc[tag] ? (acc[tag] += 1) : 1,
      };
    }, {});

  return newObj;
}

console.log(crTags(tweets));
