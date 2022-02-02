
// //1 задание
// let lang = prompt("Ведите Ваше значение!");

// // //С помощью if
// if (lang == "ru") {
//   console.log("Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье");
// } else if (lang =="en") {
//   console.log("Monday", "Tuesday", "Wensday", "Thursday", "Friday", "Suterday", "Sunday");
// } else {
//   console.log("Введите верное значение");
// }

// // //С помощью switch case
// switch (true) {
//   case (lang == "ru"):
//     console.log("Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье");
//     break;
//   case (lang == "en"):
//     console.log("Monday", "Tuesday", "Wensday", "Thursday", "Friday", "Suterday", "Sunday");
//     break;
//   default:
//   console.log("Ведите верное значение!");
// }

// //с многомерными массивами
// let arrDay = {
//   ru : ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
//   en : ["Monday", "Tuesday", "Wensday", "Thursday", "Friday", "Suterday", "Sunday"],
// };


// console.log(arrDay[lang]);

// //Задание 2
// const namePersone = prompt("Ведите Ваше имя");

// namePersone == "Артем" ? console.log("Директор") : namePersone == "Александр" ? console.log("Учитель") : console.log("студент");

function noName(text) {
  let maxLength = 30;
  if(typeof text === 'string') {
    text = text.trim();
    text = text.substring(0, maxLength) + '...';
    console.log(text);
  } else {
    console.log("Введите пожалуйста строку или хуже будет!");
  }
}

noName("Привет!Я очень длинный текст возможно даже длиннее 30 символов");




