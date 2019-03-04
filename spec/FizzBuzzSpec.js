describe('FizzBuzz', function() {
  var game;

  beforeEach(function() {
    game = new fizzBuzz();
  });
  it("Prints the number 1", function() {
    expect(game.fun(1)).toEqual(1);
  });
});
