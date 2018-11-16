var moment = require('moment');
var math = require('mathjs');

console.log(math.sqrt(-4));
console.log('i\'m in index.js');

console.log(moment("20241031", "YYYYMMDD").fromNow());

var nums = [1,23,4123,4,123,54,55,55];
var fives = [];

nums.forEach(function(v) {
// nums.forEach(v => {
  if (v % 5 === 0)
    fives.push(v);
});

console.log(fives);

var name = "Bob", time = "today";
console.log(`Hello ${name}, how are you ${time}?`)
