

function weekDay(date) {
  if(typeof date !== 'object'){
    throw new TypeError('plaese to pass date object')
  } else {
    let dateDay =  date.getDay();
    let weekArray = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ]
    return(weekArray[dateDay]);
  }
}

let weakDae = new Date(2017, 5, 19);
// let weakDae = 2017, 5, 19;
// console.log(weekDay(weakDae));


function snippet(string, maxlength) {
  if(string.length < maxlength){
    return string;
  } else {
    let snippet = string.slice(0, maxlength);
    return snippet + '...';
  }
}

// console.log(snippet('superthughyphyboi', 4));


// $ node
// > let friend = {
// ...   name: 'Dominique',
// ...   age: 30,
// ...   phone: '555-555-5555'
// ... }
// undefined
// > friend
// { name: 'Dominique', age: 30, phone: '555-555-5555' }
// > console.log(Object.keys(friend).length);
// 3
// undefined
// > function numProps(obj){
// ... return Object.keys(obj).length;
// ... }
// undefined
// > console.log(numProps(friend));
// 3
// undefined
// > console.log(Object.keys(friend));
// [ 'name', 'age', 'phone' ]
// undefined
// > let returned = Object.keys(friend);
// undefined
// > returned
// [ 'name', 'age', 'phone' ]
// > returned.length
// 3
// >


let friend = {
  name: 'Dominique',
  age: 30,
  phone: '555-555-5555'
}

// let none =[1,2,3];
// let zero = 1;

function numProps(obj) {
  if(typeof obj !== 'object' || Array.isArray(obj)){
    throw new TypeError ('i need an object');
  }else{
  return Object.keys(obj).length;
  }
}

console.log(numProps(friend));
// console.log(numProps(none));


function filterBetween(array, min, max){
  if(!Array.isArray(array)){
    throw new TypeError('i need a array')
  } else {
    let filtered = array.filter(function(e){
      if(min <= e && e <= max){
        return e
      }
    })
    return filtered;
  }
}

// let not = [1,2,3,4,5,6,7,8,9,0]

// console.log(filterBetween(not, 5, 8));


module.exports = { weekDay, snippet, numProps, filterBetween };
