// Add your Circle class here
class Circle {
    constructor(radius) {
      this.radius = radius;
    }

    // Getter method for diameter
    get diameter() {
      return this.radius * 2;
    }

    // Setter method for diameter
    set diameter(value) {
      this.radius = value / 2;
    }

    // Getter method for circumference
    get circumference() {
      return Math.PI * this.diameter;
    }

    // Setter method for circumference
    set circumference(value) {
      this.radius = value / Math.PI / 2;
    }

    // Getter method for area
    get area() {
      return Math.PI * Math.pow(this.radius, 2);
    }

    // Setter method for area
    set area(value) {
      this.radius = Math.sqrt(value / Math.PI);
    }
  }

  // Example usage
  let myCircle = new Circle(5);
  console.log(myCircle.radius); // Output: 5
  console.log(myCircle.diameter); // Output: 10
  console.log(myCircle.circumference); // Output: approximately 31.41592653589793
  console.log(myCircle.area); // Output: approximately 78.53981633974483

  // Changing properties using setter methods
  myCircle.diameter = 12;
  console.log(myCircle.radius); // Output: 6
  console.log(myCircle.circumference); // Output: approximately 37.69911184307752

  myCircle.area = 100;
  console.log(myCircle.radius); // Output: approximately 5.641895835477563
  console.log(myCircle.diameter); // Output: approximately 11.283791670955126
