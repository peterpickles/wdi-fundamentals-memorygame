var cards = ['queen','queen','king','king']; 
var cardsInPlay = []; 

var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) { 
		alert("You found a match!");
		} else {
		alert("Sorry, try again!")
	}
};

var flipCard = function (cardId) {
	cardsInPlay.push(cards[cardId]);
	console.log("User Flipped " + cards[cardId]);
	if (cardsInPlay.length ===2) { 
		checkForMatch();
	}
};

/*var cardOne = cards[0];  Don't want to lose this! 
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);

var cardTwo = cards[2]; Same here! :)
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);*/