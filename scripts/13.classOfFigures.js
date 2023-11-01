export default () => {
  
  class Shape {
  constructor() {
    this.name = "Shape";
  }
  
  calculateArea() {
    return;
  }
  
  calculatePerimeter() {
    return;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.name = "Rectangle";
    this.width = width;
    this.height = height;
  }
  
  calculateArea() {
    return this.width * this.height;
  }
  
  calculatePerimeter() {
    return 2 * (this.width + this.height);
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.name = "Circle";
    this.radius = radius;
  }
  
  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }

  calculatePerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

class Triangle extends Shape {
  constructor(side1, side2, side3) {
    super();
    this.name = "Triangle";
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }
  
  calculateArea() {
    const p = (this.side1 + this.side2 + this.side3) / 2;
    return Math.sqrt(p * (p - this.side1) * (p - this.side2) * (p - this.side3));
  }
  
  calculatePerimeter() {
    return this.side1 + this.side2 + this.side3;
  }
}

const rectangle = new Rectangle(2, 3);
console.log(rectangle.calculateArea());
console.log(rectangle.calculatePerimeter());

const circle = new Circle(4);
console.log(circle.calculateArea());
console.log(circle.calculatePerimeter());

const triangle = new Triangle(3, 4, 5);
console.log(triangle.calculateArea());
console.log(triangle.calculatePerimeter());

}