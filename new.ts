
// class Rectangle{
//     width:number;
//     height:number;
//     constructor(x:number,y:number){
//         this.width=x;
//         this.height=y;
//     }
//     CalcCircumference() : number{
//         return 2*(this.width+this.height);

//     }
//     static WhoAmI():void{
//         console.log("I'm Rectangle");

//     }
// }


// let Rectangle1:Rectangle=new Rectangle(2,3);
// console.log(Rectangle1.CalcCircumference())
// Rectangle.WhoAmI();
// export{}




// class square extends Rectangle{
//     r:number;
//     constructor (r:number){
//         super(2,2); 
//     }
//     //Override 
//     circumference () {
//         return'CalcCircumference';
//     }
//     WhoAmI() {
//         return'I am square';
//     }
// }
// let obj:Rectangle=new Rectangle(5,5) ;
// console.log(obj.CalcCircumference())
// Rectangle.WhoAmI();
// export{}

// let obj2:square=new square(5);                 
// console.log(obj2.WhoAmI())
// square.WhoAmI();
// export{}




//Annotations
// var student : {   
//     id: number;   
//     name: string;   
// };   
  
// student = {   
//   id: 100,   
//   name : "John"  
// }  

//union
/**
 * Takes a string and adds "padding" to the left.
 * If 'padding' is a string, then 'padding' is appended to the left side.
 * If 'padding' is a number, then that number of spaces is added to the left side.
 */
// function padLeft(value: string, padding: any) {
//     if (typeof padding === "number") {
//       return Array(padding + 1).join(" ") + value;
//     }
//     if (typeof padding === "string") {
//       return padding + value;
//     }
//     throw new Error(`Expected string or number, got '${typeof padding}'.`);
//   }
   
//   padLeft("hi from world", 4); 

//b.	Function with typed arguments and return type

// function greeter(fn: (a: string) => void) {
//     fn("Hello, World");
//   }
   
//   function printToConsole(s: string) {
//     console.log(s);
//   }
   
//   greeter(printToConsole);



// c.	Function overriding


// class Person{
//     name:string
 
//     eat():void{
//         console.log(this.name+" eats when hungry.")
//     }
// }
 
// class Student extends Person{
//     // variables
//     rollnumber:number;
 
//     // constructors
//     constructor(rollnumber:number, name1:string){
//         super(); // calling Parent's constructor
//         this.rollnumber = rollnumber
//         this.name = name1
//     }
 
//     // functions
//     displayInformation():void{
//         console.log("Name : "+this.name+", Roll Number : "+this.rollnumber)
//     }
 
//     // overriding super class method
//     eat():void{
//         console.log(this.name+" eats during break.")
//     }
// }
 
// var student1 = new Student(2, "Rohit")
 
// student1.displayInformation()
// student1.eat()


// interface

// let Person = {
//     firstName : 'Gaid',
//     lastName : 'S',
//     age : '22'
// };

// interface IPerson {
//     firstName : string,
//     lastName : string,
//     age : number;
// }


//Generics
 
// function genericdentity<T>(arg : T) :T {
//     return arg;
// }
// const o4 = genericdentity<boolean>(true);

// const o5 = genericdentity<string>('my string');

//	Enums  help me no make error in my code

// enum  Color { red = 'red' , green = 'green' , blue = 'blue'}

// let color: Color = Color.green;
// console.log(color);

// color = Color.blue;
// console.log(color);

// function printColor(c:Color){
//     switch(c) {
//         case 'green':
//             console.log('this is a green color'); break;
//     }
// }
// printColor(Color.green);


// namespace mathematics {
//     class User {
//       constructor(public name: string) {}
//     }
  
//     const newUser = new User("Jon");
//   }



//Queue 
//   class Queue<T> implements IQueue <T> {
//     private storage: T[] = [];
  
//     constructor(private capacity: number = Infinity) {}
  
//     enqueue(item: T): void {
//       if (this.size() === this.capacity) {
//         throw Error("Queue has reached max capacity, you cannot add more items");
//       }
//       this.storage.push(item);
//     }
//     dequeue(): T | undefined {
//       return this.storage.shift();
//     }
//     size(): number {
//       return this.storage.length;
//     }
//   }
  
//   const queue = new Queue<string>();
  
//   queue.enqueue("A");
//   queue.enqueue("B");
  
//   queue.size();    // Output: 2
//   queue.dequeue(); // Output: "A"
//   queue.size();    // Output: 1



// class ListNode {
//         width:number;
//          height:number;
//          constructor(w:number,o:number){
//             this.width=w;
//             this.height=o;
//          }
//         }

// class LinkedList {
//     v=null;
//     constructor(head = null) {
//         this.v = head
//     }
// }

// var printer = (function () {

//     var printerInstance;

//     function create () {

//     function print() {
        
//     }

//     function turnOn() {
        
//     }

//     return {
//         // public + private states and behaviors
//         print: print,
//         turnOn: turnOn
//     };
//     }

//     return {
//     getInstance: function() {
//         if(!printerInstance) {
//         printerInstance = create();
//         }
//         return printerInstance;
//     }
//     };

//     function Singleton () {
//     if(!printerInstance) {
//         printerInstance = intialize();
//     }
//     };

// })();


