var person = {
	
	name : "Hans", 
	distance_traveled : 0,
	say_name : function(){

		console.log(this.name);
	},

	say_something : function(par1){

		console.log( this.name, "says", par1 );
	},

	walk : function(){

		console.log( this.name, "is walking");
		this.distance_traveled = this.distance_traveled + 3;
	},

	run : function(){

		console.log( this.name, "is running");
		this.distance_traveled = this.distance_traveled + 10;;
	},

	crawl : function(){

		console.log( this.name, "is crawling");
		this.distance_traveled++;

	},

}


console.log( person.name);

person.crawl();
console.log(person.distance_traveled);

person.run();
console.log(person.distance_traveled);



