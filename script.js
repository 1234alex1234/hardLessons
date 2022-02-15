let out = document.querySelector('.out');
let out1 = document.querySelector('.out-1');
let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
let arrMonth = ['Декабря', 'Января', 'Февраля', 'Марта', 'Апреля', 'Мая',
  'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября'
];

function getFullTime() {
  let nowDate = new Date();
  let textSecond = 'секунд';
  let textMinutes = 'минут';
  let textHours = 'час';
  let year = nowDate.getFullYear();
  let textDay = days[(nowDate.getDay())];
  let month = nowDate.getMonth() + 1;
  let day = nowDate.getDate();
  let hours = nowDate.getHours();
  let minutes = nowDate.getMinutes();
  let seconds = nowDate.getSeconds();
  let secTrim = seconds % 10;
  let minTrim = minutes % 10;


  if (secTrim == 1 && seconds !== 11) {
    textSecond = textSecond + 'а';
  } else if (seconds == 12 || seconds == 13 || seconds == 14) {
    textSecond = textSecond + '';
  } else if (secTrim >= 2 && secTrim <= 4) {
    textSecond = textSecond + 'ы';
  }

  if (minTrim == 1 && minutes !== 11) {
    textMinutes = textMinutes + 'а';
  } else if (minutes == 12 || minutes == 13 || minutes == 14) {
    textMinutes = textMinutes + '';
  } else if (minTrim >= 2 && minTrim <= 4) {
    textMinutes = textMinutes + 'ы';
  }

  if ((hours >= 2 && hours <= 4) || (hours >= 22 && hours <= 24)) {
    textHours = textHours + 'а';
  }

  if ((hours >= 5 && hours <= 20) || hours == 0) {
    textHours = textHours + 'ов';
  }

  out.innerHTML = `Сегодня ${textDay} ${day} ${arrMonth[month]} ${year} года 
  ${hours} ${textHours} ${minutes} ${textMinutes} ${seconds} ${textSecond}`;

  out1.innerText = `'${zero(day)}.${zero(month)}.${zero(year)} - ${zero(hours)}:${zero(minutes)}:${zero(seconds)}'`;
}

function zero(x) {
  return (x < 10) ? '0' + x : x;
}

getFullTime();
setInterval(getFullTime, 1000);