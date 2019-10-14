// Add your Circle class here

class Circle {
  constructor(radius){
  this.radius=radius;  
  }

   set diameter(diameter) {
    this.diameter = diameter;   
  }
  
   set circumference(circumference) {
    this.circumference = circumference;   
  }

  get diameter(){
    return 2*this.radius;
  }
   get circumference(){
      return 2*this.radius*Math.PI;
   }
   
  get area(){
    return this.radius*this.radius*Math.PI;
  }
}