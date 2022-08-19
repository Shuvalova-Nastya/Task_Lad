let arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

let arrlength = ['3', '4', '5', '6'];
let randlength = Math.floor(Math.random()*arrlength.length);
let newarrlength = arrlength[randlength];

let array = '';
let k = 0;
while (k != newarrlength){
    let rndnum = Math.floor(Math.random()*arr.length);
    let number = arr[rndnum];
    array=array+number;
    arr.splice(rndnum,1);
    k++;
}


let value = 0;
while (value != array) {
value = prompt("Введи число: ");

let countCoincide = 0;
let countCoincideNot = 0;
let arrayCoincide = [];
let arrayCoincideNot = [];
for (let i=0; i<value.length; i++){
  let num = value[i];
  let inx = array.indexOf(num);

  if (inx != -1) {
    if (inx == i) {
      countCoincide = countCoincide+1;
      arrayCoincide.push(num);
    } 
    else {
      countCoincideNot=countCoincideNot+1;
      arrayCoincideNot.push(num);
    }
}
}
if (countCoincide !=0) {
console.log("цифр на своих местах - " + countCoincide + " (" +  arrayCoincide + ")");
}
if (countCoincideNot != 0) {
console.log("совпавших цифр не на своих местах - " + countCoincideNot + " (" + arrayCoincideNot + ")");
}
}
console.log("Ты угадал");