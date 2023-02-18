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

function number(min, max) {
  for (let i = max; i >= min; i -= 1) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

number(1, 10);
