class Deck
{	
	constructor()
	{
		this.deck = [];
		this.cards = ['ace', '2','3','4','5','6','7','8','9','10','j','q','k'];
		this.suits = ['hearts', 'spades', 'diamonds', 'clubs'];
		this.create();
	};

	

};

Deck.prototype.create = function(){

	for( var idx = 0; idx < 4; idx++)
	{
		for( var j = 0; j < 13; j++){
			this.deck.push( this.cards[j] + " of " + this.suits[idx]);
		}
	}

	return this.deck;


};




Deck.prototype.shuffle = function()
{
	
	var m = this.deck.length, t, i;

	// While there remain elements to shuffle…
	while (m) {

	// Pick a remaining element…
	i = Math.floor(Math.random() * m--);

	// And swap it with the current element.
	t = this.deck[m];
	this.deck[m] = this.deck[i];
	this.deck[i] = t;
	}

	return this.deck;

};

Deck.prototype.reset = function(){
	this.deck = [];
	for( var idx = 0; idx < 4; idx++)
	{
		for( var j = 0; j < 13; j++){
			this.deck.push( this.cards[j] + " of " + this.suits[idx]);
		}
	}

	return this.deck;


};


Deck.prototype.deal = function(){
	

	var card = this.deck.pop();

	return card;


};




class Player
{
	constructor(user_name)
	{
		this.name = user_name;
		this.hand = [];

	};

};


Player.prototype.draw = function(deck)
{
	var card = deck.deal();
	this.hand.push(card);
	return card;
}




Player.prototype.discard = function()
{
	if (this.hand.length > 0)
	{
		var card = this.hand.pop();
		return card;
	}
	else
	{
		console.log("No cards left in hand");
	}

}














var deck1 = new Deck();
deck1.shuffle();
// console.log('');
// console.log( deck1.deck );
// console.log('');
// console.log('');
// console.log('');
// deck1.reset();
// console.log( deck1.deck );
// console.log('');
// console.log('');
// console.log('');
// deck1.shuffle();

// console.log(deck1.deal());
// console.log( deck1.deck );

var player1 = new Player('Hans');
var card1 = player1.draw(deck1);


var card2 = player1.draw(deck1);

var card3 = player1.draw(deck1);

console.log(player1.hand);
console.log('');
console.log('');
console.log('');
var card = player1.discard();
console.log(card);
console.log(player1.hand);



