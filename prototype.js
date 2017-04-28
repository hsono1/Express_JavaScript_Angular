class VehicleConstructor
{
	constructor(name, wheels, passengers, speed){
	this._name = name;
	this._wheels = wheels;
	this._passengers = passengers;
	this._speed = speed;
	this._distance_travelled = 0;
	}
	

}


	VehicleConstructor.prototype.updateDistanceTravelled = function(){

		this._distance_travelled = this._distance_travelled + this._speed;


	}

	VehicleConstructor.prototype.move = function(){

		this.updateDistanceTravelled();
		this.makeNoise();


	}

	VehicleConstructor.prototype.checkMiles = function()
	{
		console.log(this._distance_travelled);

	}


	VehicleConstructor.prototype.makeNoise = function(){

		console.log("standard noise");

	}





var vehicle1 = new VehicleConstructor('bike', '2', '2', 3);

vehicle1.makeNoise = function()
{
		console.log("ring ring");


};



var vehicle2 = new VehicleConstructor('sedan', '4', '4', 30);

vehicle2.makeNoise = function()
{
		console.log("Honk Honk");


};


var vehicle3 = new VehicleConstructor('bus', '8', '16', 15);

vehicle3.passengerNumber = function(passengers)
{
	this.passengers = passengers;
}


vehicle2.checkMiles();

vehicle2.move();
vehicle2.checkMiles();
vehicle2.speed = 60;
vehicle2.move();
vehicle2.checkMiles();
console.log(vehicle2._distance_travelled);



