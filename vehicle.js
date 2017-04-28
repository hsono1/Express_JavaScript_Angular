function VehicleConstructor(name, wheels, passengers)
{
	this.name = name;
	this.wheels = wheels;
	this.passengers = passengers;


	this.makeNoise = function(){

		console.log("standard noise");

	}




}



var vehicle1 = new VehicleConstructor('bike', '2', '2');

vehicle1.makeNoise = function()
{
		console.log("ring ring");


};



var vehicle2 = new VehicleConstructor('sedan', '4', '4');

vehicle2.makeNoise = function()
{
		console.log("Honk Honk");


};


var vehicle3 = new VehicleConstructor('bus', '8', '16');

vehicle3.passengerNumber = function(passengers)
{
	this.passengers = passengers;
}


console.log(vehicle1.passengers);
console.log(vehicle2.passengers);
console.log(vehicle3.passengers);

vehicle3.passengerNumber(24);
console.log(vehicle3.passengers);




