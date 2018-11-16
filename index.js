var moment = require('moment');
var math = require('mathjs');


console.log('i\'m in index.js...NOT');

console.log(moment("20121031", "YYYYMMDD").fromNow());

var nums = [1,23,4,123,54,55,55];
var fives = [];

nums.forEach(function(v) {
// nums.forEach(v => {
  if (v % 5 === 0)
    fives.push(v);
});

console.log(fives);

var name = "Bob", time = "today";
console.log(`Hello ${name}, how are you ${time}?`)
