//Dear Future Greg Put all Your variables here
let squareArea=length*width
let squareRadius= "N/A"
let sideLength=length
let squarePerimeter=sideLength*4
let recPerimeter=2*(length+width)
let circlePerimeter=2*Math.PI*radius
let circleArea=Math.PI*(radius*radius)


//Shape Class
class Shapes{
    constructor(name,width,height,radius,area,perimeter){
        this.name=name;
        this.width=width;
        this.height=height;
        this.radius=radius;
        this.area=area;
        this.perimeter=perimeter;
    }
    describe(){
    $("#name").append(this.name)
    $("#width").append(this.width)
    $("#height").append(this.height)
    $("#radius").append(this.radius)
    $("#area").append(this.area)
    $("#perimeter").append(this.perimeter)
}
  get area() {
    return this.calcArea();
  }
    calcArea(){
    return this.height * this.width;
}
}
//Circle Class
class Circle extends Shapes {
    constructor(radius){
        super('Circle')
    }
}
//Triangle Class
class Triangle extends Shapes {
    constructor(height){
        super('Triangle')
    }
}
//Rectangle Class
class Rectangle extends Shapes {
    constructor(width,height){
        super('Rectangle')
    }
}
//Square Class
class Square extends Shapes {
    constructor(sideLength){
        super('Square')
}
}
$('#genShape').click(function(){
    var shape= new Shapes
});












 
// //Calc Circle
// function calcCircle(radius){

// }
// //Calc Square/Rect
// function calcBox(length,width){
    
// }
// //Calc Triangle
// function calcTriangle(height){

// }