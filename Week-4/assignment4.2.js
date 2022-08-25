var Person = function() {};

Person.prototype.initialize = function(name, age) { 
    this.name = name; 
    this.age = age; 
}
//created object teacher here 
var Teacher = function() { 
    this.teach = function(subject) {
         console.log(this.name + " is now teaching " + subject); } } 
Teacher.prototype = new Person(); 

var him = new Teacher();

him.initialize("Sumanth", 25); 
him.teach("Inheritance");