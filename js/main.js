var cards = ['queen','queen','king','king']; //create an array to store all cards

var cardsInPlay = []; //empty array

var cardOne = cards[0];  //add queen card to array

cardsInPlay.push(cardOne); 

var cardTwo = cards[2]; //add king card to the array

cardsInPlay.push(cardTwo);

console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);

if (cardsInPlay.length ===2) { //see if two cards are in the array
	if (cardsInPlay[0] === cardsInPlay[1]) { //if the two cards in the array is a match
		alert("You found a match!");
	} else {
		alert("Sorry, try again!")
	}
}
