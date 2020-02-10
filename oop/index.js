/* ABSTRACT FACTORY PATTERN
 *
 * Takes multiple factories and abstracts the class of instance to manufacture
 *
 *
class Car {
	constructor(doors, engine, color) {
		this.doors = doors;
		this.engine = engine;
		this.color = color;
	}
}
/* MIXIN
 *
 * Add new functions to class

let carMixin = {
	revEngine() {
		console.log('Engine goes vroom');
	}
}

Object.assign(Car.prototype, carMixin);

class CarFactory {
	createCar(type) {
		switch(type) {
			case 'civic':
				return new Car(4, 'v6', 'grey');
			case 'honda':
				return new Car(2, 'v4', 'red');
		}
	}
}

class Suv {
	constructor(doors, engine, color) {
		this.doors = doors;
		this.engine = engine;
		this.color = color;
	}
}

class SuvFactory {
	createSuv(type) {
		switch(type) {
			case 'suv type 1':
				return new Suv(4, 'v6', 'grey');
			case 'suv another type':
				return new Suv(2, 'v4', 'red');
		}
	}
}

const carFactory = new CarFactory();
const suvFactory = new SuvFactory();

const autoManufacturer = (type, model) => {
	switch(type) {
		case 'car':
			return carFactory.createCar(model);
		case 'suv':
			return suvFactory.createSuv(model);
	}
}

const honda = autoManufacturer('car', 'honda');
console.log(honda);


/* FACTORY PATTERN
 *
 * Forms a factory function that knows how new instances are created and simply takes the instruction of which 
 * kind of instance to produce.
 *
 *
class Car {
	constructor(doors, engine, color) {
		this.doors = doors;
		this.engine = engine;
		this.color = color;
	}
}

class carFactory {
	createCar(type) {
		switch(type) {
			case 'civic':
				return new Car(4, 'v6', 'grey');
			case 'honda':
				return new Car(2, 'v4', 'red');
		}
	}
}

const factory = new carFactory();
const honda = factory.createCar('honda');

console.log(honda);


/* SINGLETON PATTERN
 *
 * Prevents more than one instance of an object to be created
 *
 *
 *
let instance = null;

class Car {
	constructor(doors, engine, color) {
		if (!instance) {
			this.doors = doors;
			this.engine = engine;
			this.color = color;
			// Single instance allowed
			instance = this;
		} else {
			return instance;
		}
	}
}

class Suv extends Car {
	constructor(doors, engine, color) {
		super(doors, engine, color);
		this.wheels = 4;
	}
}

const civic = new Car(4, 'V6', 'grey');
const cx5 = new Suv(5, 'V8', 'red');
console.log(civic);
console.log(cx5);
*/
