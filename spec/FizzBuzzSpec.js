describe('FizzBuzz', function() {
  var game;

  beforeEach(function() {
    game = new fizzBuzz();
  });
  it("Prints the number 1", function() {
    expect(game.fun(1)).toEqual(1);
  });

  it("Prints 'fizz' on a 3", function() {
    expect(game.fun(3)).toEqual('fizz');
  });
});
