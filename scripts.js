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
        this.shape.addEventListener('click',this.describe.bind(this));
        this.shape.addEventListener('dblclick',this.removeShape.bind(this));

         
    }
    describe(){
    $("#name").html("Shape Name: "+this.name)
    $("#width").html("Width: "+this.width)
    $("#height").html("Height: "+this.height)
    $("#radius").html("Radius: "+this.radius)
    $("#area").html("Area: "+this.area)
    $("#perimeter").html("Perimeter: "+this.perimeter)
    $('#sideLength').html("Side Length: "+this.sideLength)
}
    draw(){
        $('#shapeContainer').append(this.shape) 
    }
    removeShape(){
        this.shape.remove();
        $("#name").html("Shape Name:")
        $("#width").html("Width: ")
        $("#height").html("Height: ")
        $("#radius").html("Radius: ")
        $("#area").html("Area: ")
        $("#perimeter").html("Perimeter: ")
        $('#sideLength').html("Side Length: ")
    }
    // clear(){
    //     if(".$inputs" != ''){
    //         (".$inputs").value=''
    //     }
    // }
}

// //Rectangle Class
class Rectangle extends Shapes {
    constructor(height,width,shape,radius,perimeter,sideLength){
        super('Rectangle');
        this.height=height;
        this.width=width;
        this.radius="N/A"
        this.perimeter="N/A"
        this.sideLength="N/A"
        this.shape.style.width = width+"px";
        this.shape.style.height = height+"px";
        this.shape.style.top=randomXY()+"px";
        this.shape.style.left=randomXY()+"px";

        
    }
    get area(){
       return this.height*this.width;
    }
}
//Generate Rectangle
$('#genRectangle').click(function(){
    let height = document.getElementById("rectHeight").value;
    let width = document.getElementById("rectWidth").value;
    const rectangle= new Rectangle(height,width);
    console.log(rectangle)
    rectangle.draw()
    rectangle.describe()
    document.getElementById("rectHeight").value= '';
    document.getElementById("rectWidth").value= '';  
});

// //Square Class
class Square extends Shapes {
    constructor(sideLength,shape){
        super('Square');
        this.width=sideLength
        this.height=sideLength
        this.radius="N/A"
        this.perimeter="N/A"
        this.sideLength=sideLength
        this.shape.style.width = sideLength+"px"
        this.shape.style.height = sideLength+"px"
        this.shape.style.top=randomXY()+"px";
        this.shape.style.left=randomXY()+"px";

    }
    get area(){
       return this.sideLength*this.sideLength+"px"
    }
}
//Generate Square
$('#genSquare').click(function(){
    let sideLength = document.getElementById("SlValue").value;
    const square= new Square(sideLength);
    console.log(square)
    square.draw()
    square.describe()
    document.getElementById("SlValue").value= ''; 
});

// //Circle Class
class Circle extends Shapes {
    constructor(radius,perimeter,area,shape){
        super('Circle');
        this.width="N/A"
        this.height="N/A"
        this.sideLength="N/A"
        this.radius=radius;
        console.log(Math.PI*(radius*radius))
        this.perimeter=2*Math.PI*radius;
        this.shape.style.width = 2*radius+"px";
        this.shape.style.height=2*radius+"px";
        this.shape.style.top=randomXY()+"px";
        this.shape.style.left=randomXY()+"px";
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
    document.getElementById("SlValue").value= ''; 
});
// //Triangle Class
class Triangle extends Shapes {
    constructor(height,width,shape){
        super('Triangle');
        this.height=height;
        this.width=height;
        this.radius="N/A"
        this.perimeter="N/A"
        this.sideLength="N/A"
        this.shape.style.borderBottom=height+"px solid yellow";
        this.shape.style.borderRight=height+"px solid lightblue";
        this.shape.style.top=randomXY()+"px";
        this.shape.style.left=randomXY()+"px";
    }
    get area(){
       return 0.5*(this.height)*(this.height)
    }
}
//Generate Triangle
$('#genTriangle').click(function(){
    let height = document.getElementById("triValue").value;
    const triangle= new Triangle(height);
    console.log(triangle)
    triangle.draw()
    triangle.describe()
    document.getElementById("triValue").value= '';    
});
function randomXY(){
    let ran= Math.floor(Math.random()*600);
    return ran;
}
// $(this).on("click",function(){
//     console.log("clicked")
//     this.shape.describe();
// });











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