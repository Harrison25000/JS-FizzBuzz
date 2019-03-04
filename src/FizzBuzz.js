var fizzBuzz = function(){
};

fizzBuzz.prototype.fun = function (num) {
  if (num == 3) {
    return 'fizz'
  }
  else if (num == 5) {
    return 'buzz'
  }
  else if (num == 15) {
    return 'fizzbuzz'
  }
  else {
    return 1
  }
};
