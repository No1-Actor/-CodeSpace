function Bus() {
    
}
// Car.prototype = {     constructor 是记录对象是由谁创建的
//     constructor: Bus
// }

function Car() {
    
}

var car = new Car()
var bus = new Bus()


console.log(car.constructor);
console.log(bus.constructor);
