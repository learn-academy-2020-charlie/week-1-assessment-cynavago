# ASSESSMENT 1: Tech Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.   

1. What is a function? Why would you use one?

  Your answer:

  Functions are reusable pieces of code. Can have lots of different code inside such as arguments. They are like a giant umbrella of information. You can name each function. 

  Researched answer:
  
  Functions are blocks of code designed to perform a particular task. It is excevited when "something" invokes it. It always returns an output, can be used many times, and should be as generic as possible.
  
  To specify the values you need to call the function by typing the name along with the desired values spaced by commas.
  
  Example:
  function myFunction(value1, value2) {
	return value1 + value2;
  }

  myFunction(10, 5);


2. What is the difference between map and filter?

  Your answer:
  The difference is that .map() looks at each element in an array while .filter() has a true/false code that your array has to go through.

  .map() is an array method, returns to us a completely new array.

  .filter() is also an array method, like map, but it has a built in if/else statement so it looks for true/false values. It returns back what we "filtered" through it. 

  Researched answer:

  They both return a new array. map returns a new array of elements where you have applied some function on the element so that it changes the original element (typically). filter returns a new array of the elements of the original array (with no change to the original values). filter will only return elements where the function you specify returns a value of true for each element passed to the function.

  So map returns the same number of elements as the original, but the element value will be transformed in some way and filter will return the same or less number of elements than the original but not change the original elements’ values.


3. What is the difference between map/filter and a for loop?

  Your answer:
  A for loop iterates from a defined start and end point with a defined number of times. Map/filter only go through the array once.


  Researched answer:

  The big difference is that the conditions for iteration are handled for us. In a for loop, we’re guaranteed to get every element of the array in the right order. We don’t have to manage our own index variable or condition for that variable.


4. What is the difference between console.log() and return?

  Your answer:

  console.log is used for developers, we shouldn't count on it when defining a function. It's helpful when testing out a piece of code. A return would live inside a function and can be used in reference inside the function.

  Researched answer:

  Console.log is a function that logs the arguments you pass to the web console. return is a statement which specifies the value returned from a function.


5. In regards to functions, what is an argument?

  Your answer:

  Parameters. They are used in a function as placeholders for information.

  Researched answer:

  The parameters, in a function call, are the function's arguments. JavaScript arguments are passed by value. The function only gets to know the values, not the argument's locations. If a function changes an argument's value, it does not change the parameter's original value.


6. Give a brief description of proper pair programming techniques. What are the roles of each person?

  Your answer:

  Pair programming allows for partners to share and equally participate when coding. They take turns being the driver, where a partner is working on the live code. The driver then pushes the code up for the other partner to have access to it. It is about working together on a single project.

  Researched answer:

  Pairing involves having 2 programmers working at a single workstation. One programmer "drives" aka operates the keyboard while the other "navigates", watches, learns, asks, talks and makes suggestions. In theory, the driver focuses on the code at hand and the navigator focuses on a level of abstraction thats higher. 


7. What is something we did in class this week you found helpful?  

  Your answer: 
  
  I loved learning about higher order functions! They make life easier ^_^ It's cool to know that there are certain built-in methods that already do most of the leg work. I also really enjoyed the team building excercises. It was fun to see everyone laugh and be silly. 



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

- Jest:
  Jest is a library for testing JavaScript code. It's an open source project maintained by Facebook, and it's especially well suited for React code testing, although not limited to that: it can test any JavaScript code. Jest is very fast and easy to use

- Class inheritance
  Class inheritance is a way for one class to extend another class. So we can create new functionality on top of the existing.

- React
  React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.

- Yarn
  Yarn is a JavaScript Package Manager, a direct competitor of npm, one of the Facebook Open Source projects

- React State
  React components has a built-in state object. The state object is where you store property values that belongs to the component. When the state object changes, the component re-renders.

- this
  The JavaScript this keyword refers to the object it belongs to.