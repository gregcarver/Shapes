//Dear Future Greg Put all Your variables here
let squareArea=length*width
let squareRadius= "N/A"
let sideLength=length
let squarePerimeter=sideLength*4
let recPerimeter=2*(length+width)
let circlePerimeter=2*Math.PI*radius
let circleArea=Math.PI*(radius*radius)
let triangleArea=0.5*(height)*(height)

//Shape Class
class Shapes{
    constructor(name,width,height,radius,area,perimeter){
        this.name=name;
        this.width=width;
        this.height=height;
        this.radius=radius;
       // this.area=area;
       // this.perimeter=perimeter;
    }
    describe(){
    $("#name").append(this.name)
    $("#width").append(this.width)
    $("#height").append(this.height)
    $("#radius").append(this.radius)
    $("#area").append(this.area)
    $("#perimeter").append(this.perimeter)
}

}
// //Circle Class
// class Circle extends Shapes {
//     constructor(radius){
//         super('Circle')
//     }
//     get area() {
//         return this.calcArea();
//   }
//     calcArea(){
//         return Math.PI*(this.radius*this.radius)
// }
// }
// //Triangle Class
// class Triangle extends Shapes {
//     constructor(height){
//         super('Triangle')
//     }
//     get area() {
//         return this.calcArea();
//   }
//     calcArea(){
//         return 0.5*(height)*(height)
// }
// }
// //Rectangle Class
class Rectangle extends Shapes {
    constructor(height,width){
        super('Rectangle')
        this.height=height;
        this.width=width;
    }
    get area(){
       return this.height*this.width;
    }
//     area() {
//         return this.calcArea();
//   }
//     calcArea(){
//         return this.height * this.width;
// }
}
// //Square Class
// class Square extends Shapes {
//     constructor(sideLength){
//         super('Square')
// }
//     get area() {
//         return this.calcArea();
//   }
//     calcArea(){
//         return this.sideLength*this.sideLength
// }
// }
// //Generate Square
// $('#genSquare').click(function(){
//     const square= new Square(sideLength)
// });
// //Generate Circle
// $('#genCircle').click(function(){
//     const circle= new Circle(radius)
    
// });
// //Generate Triangle
// $('#genTriangle').click(function(){
//     const triangle= new Triangle(height)
// });
//Generate Rectangle
$('#genRectangle').click(function(){
    let height = document.getElementById("rectHeight").value;
    let width = document.getElementById("rectWidth").value;
    const rectangle= new Rectangle(height,width,area)
    console.log(rectangle)
    rectangle.describe()
    var shape= document.getElementById("shapeContainer")
    shape.innerText=rectangle
});
// document.addEventListener('DOMContentLoaded',function(){
    
//     this.rectH=document.getElementById('rectHeight')
//     this.rectW=document.getElementById('rectWidth')
//     this.rectH.addEventListener('click', this.value.bind(this));
//     this.rectW.addEventListener('click', this.value.bind(this));
//     const rectangle=new Rectangle()
//     console.log(rectangle)
//     console.log(rectangle.area())
// })














 
// //Calc Circle
// function calcCircle(radius){

// }
// //Calc Square/Rect
// function calcBox(length,width){
    
// }
// //Calc Triangle
// function calcTriangle(height){

// }