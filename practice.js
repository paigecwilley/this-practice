//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      // Implicit 
      //Explicit
      New 
      Default


  // 3) What is the difference between call and apply?

      //Call takes in a pointer object and a bunch of items, apply takes in an array

  // 4) What does .bind do?

      //.bind will bind "this" to a newly created function


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    var user = {
      username:'Paige',
      email: 'Paige@me.com',
      getUsername: function() {
        return this.username;

      }
    }

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.

user.getUsername();



// Write the function definitions which will make the following function invocations function properly.

  //Function Invocations Here

var prius = new Car('Toyota', 'Prius', 2011, 0);
var mustang = new Car('Ford', 'Mustang', 2013, 0);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).


//Create a constructor object
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.move = move;
  this.moveCar = function(){
    return this.move += 10;
  }
}
//Look at the test runner: Test is car hasOwnProperty. put the method on the object inside of the constructor function

//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
   getYear.call(prius);
   getYear.call(mustang); 


//New Problem



var myUser = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getMyUsername = function(){
  console.log(this.username);
};

setTimeout(getMyUsername, 5000);

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?
//Note(no tests)
  //'iliketurtles'

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //it's not bound to anything

//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.
