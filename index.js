// Add your Circle class here
const pi = Math.PI

class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    get diameter() {
        return this.radius * 2;
    }
    get circumference() {
        return this.diameter * pi;
    }
    get area () {
        return pi * ( this.radius ** 2 )
    }
    set diameter ( diameter ) {
        this.radius = diameter / 2
    }
    set area (area) {
        this.radius = Math.sqrt( area / pi )
    }
    set circumference(circumference) {
        this.radius = circumference / ( 2 * pi )
    }
}
