//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
function isTyler(name){
  if (name == 'Tyler') {
    return true;
  } else {
    return false;
  };
};

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here

function getName(){
  return prompt('whats your name?');
  
  };



//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here

function welcome(){
  alert( 'Welcome, ' + getName());
  
};


//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //Answer Here

/*Arguments are the information that you pass into the variable names of the parameters of a function*/
//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here
/*false
0 
'' 
null
undefined
NaN 

the outcome of what you are doing the 'job' determines falsey
*/



//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  //Code Here
  
function myName(){
  return 'Ryan';
};

//Now save the function definition of myName into a new variable called newMyName

  //Code Here
var newMyName = function(){return myName()};

//Now alert the result of invoking newMyName

/*alert(newMyName);*/

//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here 
function outerFn(){
  return function x(){
    return myName();
  };
};

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here
var innerFn = outerFn();

//Now invoke innerFn.
innerFn;
