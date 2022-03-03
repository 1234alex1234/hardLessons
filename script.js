let out1 = document.querySelector('.out-1');
let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
let arrMonth = ['Декабря', 'Января', 'Февраля', 'Марта', 'Апреля', 'Мая',
  'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября'
];

function getFullTime() {
  let nowDate = new Date();
  let deadLine = '31 december 2022';
  let timeRemaining = new Date(deadLine).getTime() - nowDate.getTime();
  let dayToNY = Math.floor(timeRemaining / 1000 / 60 / 60 / 24);
  let month = nowDate.getMonth() + 1;
  let day = nowDate.getDate() + 1;
  let hours = nowDate.getHours();
  let minutes = nowDate.getMinutes();
  let seconds = nowDate.getSeconds();


  return {
    dayToNY: dayToNY,
    month: month,
    day: day,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

function addResult() {
  let result = getFullTime();

  if (result.hours > 6 && result.hours < 12) {
    out1.innerText = `Доброе утро!`;
  } else if (result.hours > 12 && result.hours < 18) {
    out1.innerText = `Добрый день!`;
  } else {
    out1.innerText = `Добрый вечер!`;
  }
  out1.innerText += `
  Сегодня: ${days[result.day]}`;
  out1.innerText += `
  Текущее время: ${zero(result.hours)}:${zero(result.minutes)}:${zero(result.seconds)}`;
  out1.innerText += `
  Дней до нового года: ${result.dayToNY}.Ура!`;
}

addResult();
setInterval(addResult, 1000);


function zero(x) {
  return (x < 10) ? '0' + x : x;
}


getFullTime();
setInterval(getFullTime, 1000);