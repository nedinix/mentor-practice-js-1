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

const user = {
  name: "John",
  age: 20,
  hobby: "tennis",
  premium: true,
};

//1
user.mood = 'happy';
//2
user.hobby = 'skydiving';
//3
user.premium = false;
//4
for (key of Object.keys(user)) {
   console.log(`${key}: ${user[key]}` ) 
}


