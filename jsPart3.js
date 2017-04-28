function personConstructor(par1){
	
	this.name = par1; 
	this.distance_traveled = 0;
	this.say_name = function(){

		console.log(this.name);
	};

	this.say_something = function(par1){

		console.log( this.name, "says", par1 );
	};

	this.walk = function(){

		console.log( this.name, "is walking");
		this.distance_traveled = this.distance_traveled + 3;
	};

	this.run = function(){

		console.log( this.name, "is running");
		this.distance_traveled = this.distance_traveled + 10;;
	};

	this.crawl =  function(){

		console.log( this.name, "is crawling");
		this.distance_traveled++;

	};

};


var person1 = new person("Yomy");

console.log( person1.name);

person1.crawl();
console.log(person1.distance_traveled);

person1.run();
console.log(person1.distance_traveled);



