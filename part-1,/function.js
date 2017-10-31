
// Write a function weekday(date) to find the weekday for a given Date object,
// returing either 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', or 'Sun'.


function weekDay(date) {
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

let weakDae = new Date(2017, 9, 30);
console.log(weekDay(weakDae));





module.exports = weekDay;
