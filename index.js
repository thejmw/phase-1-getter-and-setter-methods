// Add your Circle class here

class Circle{
    constructor(radius) {
        this.radius = radius;
    }
    get diameter(){
        return this.radius * 2
    }
    get circumference(){
        return this.diameter * Math.PI
    }
    get area(){
        return Math.pow(this.radius, 2) * Math.PI
    }
    set diameter(newDiameter) {
        this.radius = newDiameter / 2
    }
    set circumference(newCircumference){
        this.radius =  (newCircumference / Math.PI) / 2
    }
    set area(newArea){
        this.radius = Math.round(Math.sqrt(newArea / Math.PI))
    }
}




// set area(newArea) {
//     this.sideLength = Math.sqrt(newArea);
//   }
// }


// class Square {
//     constructor(sideLength) {
//       this.sideLength = sideLength;
//     }
  
//     get area() {
//       return this.sideLength * this.sideLength;
//     }
  
//     set area(newArea) {
//       this.sideLength = Math.sqrt(newArea);
//     }
//   }
  







// get(diameter){
//     return this.radius * math.PI
// }