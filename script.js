//Задание номер 1
let arr = ['12', '45', '67', '789', '40', '21', '241'];

for(let i = 0; i< arr.length; i++) {
  if(arr[i][0] == 2 || arr[i][0] == 4) {
    console.log(arr[i]);
  }
}

// Задание номер 2
let num = 100;

for(let i = 2; i < num; i++) {
  let bool = true;
      
  for(let j = 3; j < Math.sqrt(num); j++) {
    if(i % j == 0) {
      bool = false;
      break;
    } 
  } 

  if(bool == true && i % 2 != 0 || (i == 3 || i== 5 || i== 7)) {
    console.log(`${i}: Делители данного числа 1 и ${i}`);
  }
}

