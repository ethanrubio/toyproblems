var shuffleDeck = function(deck) {

  var shuffled = [];

  while(deck.length) {
      var randomIndex = Math.floor(Math.random() * deck.length);
      shuffled.push(deck[randomIndex]);
      deck.splice(randomIndex, 1)
  }

  return shuffled;
}
