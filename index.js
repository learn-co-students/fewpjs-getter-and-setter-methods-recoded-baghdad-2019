// Add your Circle class here

class Circle{
    constructor(radius){
        this.radius = radius
        this.pi = Math.PI
    }

    get diameter(){
        return this.radius * 2
    }

    set diameter(diameter){
        this.radius = diameter / 2
    }

    get circumference(){
        return (this.radius * 2) * this.pi
    }

    set circumference(circumference){
        this.radius = circumference / (this.pi * 2)
    }

    get area(){
        return this.pi * (this.radius * this.radius)
    }

    set area(area){
        this.radius = Math.sqrt(area / this.pi)        
    }

}