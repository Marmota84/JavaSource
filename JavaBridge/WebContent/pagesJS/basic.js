//Super "class"
var Animal = function(type){
	this.type = type;
};

Animal.prototype.getType = function(){
	return this.type;
};

var Dog = function(options){
	this.breed = options.breed;
};

//Inheritance
Dog.prototype = new Animal('Dog');

//attach methods to the Dog "class"
Dog.prototype.run = function(){
	console.debug('the '+this.breed+' '+this.type+' is running!');
};
//new instance
var beagle = new Dog({breed:'Beagle'});

//calling a method of the super "class"
console.debug(beagle.getType());
beagle.run();