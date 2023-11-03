Car.prototype.name = 'BMW'
Car.prototype.lang = 4900
Car.prototype.height = 1400

function Car(owner, color) {
    this.owner = owner
    this.color = color
}

var car = new Car('浪哥', 'red')
var car2 = new Car('但总', 'black')

// car.name = '奔驰'
// Car.prototype.name = '奔驰'  修改
// delete car.name
// delete Car.prototype.name   删除


console.log(car)
console.log(car2.name)