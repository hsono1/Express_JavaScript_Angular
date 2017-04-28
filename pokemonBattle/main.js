
var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js';


	var game = {
		players: [],
		addPlayer: function(){}
	};
	function playerConstructor(name){
		player = {};
		player.name = name;
		player.hand = [];
		player.addCard = function(card){
		player.hand.push(card);
		};
		return player;
	};



	$.getJSON('http://pokeapi.co/api/v1/pokemon/1', function (data) {
 
            // do all this on success       
      		console.log(data);  
      		console.log("data.abilities[0].name");   
     });
 
