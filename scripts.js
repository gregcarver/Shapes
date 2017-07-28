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
    constructor(name,width,height,radius,area,perimeter,shape,sideLength){
        this.name=name;
        this.width=width;
        this.height=height;
        this.radius=radius;
      //  this.area=area;
        this.shape=document.createElement('div')
        this.shape.className=name
        this.perimeter=perimeter;
        this.sideLength=sideLength
    }
    describe(){
    $("#name").append(this.name)
    $("#width").append(this.width)
    $("#height").append(this.height)
    $("#radius").append(this.radius)
    $("#area").append(this.area)
    $("#perimeter").append(this.perimeter)
    $('#sideLength').append(this.sideLength)
}
    draw(){
        $('#shapeContainer').append(this.shape)
    }
}

// //Rectangle Class
class Rectangle extends Shapes {
    constructor(height,width,shape){
        super('Rectangle');
        this.height=height;
        this.width=width;
        this.shape.style.width = width;
        this.shape.style.height = height;
    }
    get area(){
       return this.height*this.width;
    }
}
//Generate Rectangle
$('#genRectangle').click(function(){
    let height = document.getElementById("rectHeight").value+"px";
    let width = document.getElementById("rectWidth").value+"px";
    const rectangle= new Rectangle(height,width);
    console.log(rectangle)
    rectangle.draw()
    rectangle.describe()
    
});

// //Square Class
class Square extends Shapes {
    constructor(height,width,sideLength,shape){
        super('Square');
        this.sideLength=height,width;
        this.shape.style.width = sideLength;
        this.shape.style.height = sideLength
    }
    get area(){
       return this.sideLength*this.sideLength
    }
}
//Generate Square
$('#genSquare').click(function(){
    let sideLength = document.getElementById("SlValue").value;
    const square= new Square(sideLength);
    console.log(square)
    square.draw()
    square.describe()    
});

// //Circle Class
class Circle extends Shapes {
    constructor(radius,perimeter,area,shape){
        super('Circle');
        this.radius=radius;
        console.log(Math.PI*(radius*radius))
        this.perimeter=2*Math.PI*radius;
        this.shape.style.width = 2*radius+"px";
        this.shape.style.height=2*radius+"px";
    }
    get area(){
       return Math.PI*(this.radius*this.radius)
    }
}
//Generate Circle
$('#genCircle').click(function(){
    let radius = document.getElementById("radValue").value;
    const circle= new Circle(radius);
    console.log(circle)
    circle.draw()
    circle.describe()    
});
// //Triangle Class
class Triangle extends Shapes {
    constructor(height,width,shape){
        super('Triangle');
        this.height=height;
        this.width=height;
      //  console.log(Math.PI*(radius*radius))
      //  this.shape.style.width = 2*radius+"px";
        this.shape.style.borderBottom=height+"px solid yellow";
        this.shape.style.borderRight=height+"px solid lightblue";
    }
    get area(){
       return 0.5*(this.height)*(this.height)
    }
}
//Generate Circle
$('#genTriangle').click(function(){
    let height = document.getElementById("triValue").value;
    const triangle= new Triangle(height);
    console.log(triangle)
    triangle.draw()
    triangle.describe()    
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

//     area() {
//         return this.calcArea();
//   }
//     calcArea(){
//         return this.height * this.width;
// }












 
// //Calc Circle
// function calcCircle(radius){

// }
// //Calc Square/Rect
// function calcBox(length,width){
    
// }
// //Calc Triangle
// function calcTriangle(height){

// }
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