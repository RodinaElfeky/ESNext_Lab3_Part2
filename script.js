//------1)
class Vehicle {
    constructor(wheels, speed) {
        this.wheels = wheels
        this.speed = speed
    }
}

//------2)
class Bike extends Vehicle {
    constructor(wheels = 2, speed = 'Fast Enough') {
        super(wheels,speed)
    }

//------3)
    static count = 0;
    static Counter() {
        this.count ++
        return "Bike Sub-Class was called " + this.count + " Time(s)";
    }
}

var Bike1 = new Bike();
console.log(Bike.Counter())

var Bike2 = new Bike()
console.log(Bike.Counter())