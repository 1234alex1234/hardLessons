const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};


function one() {
  let counter = 4;
  const someNumberFunc = function getRandomInRange() {
    return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  };

  let someNumber = someNumberFunc();
  console.log(someNumber);


  function two() {
    let yourNumber = prompt("Введите число от 1 до 100");
    let newGame;

    if (yourNumber == null) {
      alert("Игра окончена!");
    } else if (!isNumber(yourNumber)) {
      alert("это не число!Введите число!");
      two();
    } else if (yourNumber > someNumber) {
      counter--;
      alert(`Число больше!Осталось ${counter}  попыток`);
      if (counter == 0) {
        newGame = confirm("Попытки закончились!Сыграем еще раз?");
        if (newGame) {
          one();
        } else if (newGame == false) {
          alert("Игре конец!");
          //Сюда,то игра перезапускается.А если где он сейчас,то нет??
        }
        return; //Почему если этого хлопца поставить
      }
      two();
    } else if (yourNumber < someNumber) {
      counter--;
      alert(`Число меньше!Осталось ${counter}  попыток`);
      if (counter == 0) {
        newGame = confirm("Попытки закончились!Сыграем еще раз?");
        if (newGame) {
          one();
        } else if (newGame == false) {
          alert("Игре конец!");
          //сюда то выходит какая то хрень!Почему??)
        }
        return; //и вот этого соответственно
      }
      two();
    } else if (yourNumber == someNumber) {
      newGame = confirm("Вы выйграли!Еще разок?");
      if (newGame) {
        one();
      } else if (newGame == false) {
        alert("Игра окончена!");
      }
      return;
    }
  }
  two();
}

one();