// Tweet

    // var inputOfUser = prompt ("Plz type within 200 characters:");
    // alert ("You have typed " + (inputOfUser.length) + " characters, and you've got " + (200-inputOfUser.length) + " characters left.")


// Tweet cut

    // var tweet = prompt ("Type up to 20 characters:");
    // alert ( tweet.slice ( 0 , 20 ) );


// Give name with captal first letter

    // var name = prompt ( "Plz enter your name here: " )
    // alert ( "Hi dear " + ( name.slice ( 0 , 1 ) ).toUpperCase() + ( name.slice ( 1 , (  name.length - 1 ) ) ).toLowerCase() + " !" )
    /*var first = ( name.slice ( 0 , 1 ) ).toUpperCase()
    var rest = ( name.slice ( 1 , (  name.length-1 ) ) ).toLowerCase()
    alert ( "Hi dear " + first + rest + " !" )*/


// dog age to human age converter

    // alert ( "Your dog's equivalent human age is: " + ( ( ( prompt ( "Plz enter your dog's age: " ) ) - 2 ) * 4 + 21 ) )


// Karel move to top right

   // move();
   // move();
   // move();
   // move();
   // turnLeft();
   // move();
   // move();
   // move();
   // move();


// Karel drop beeper diagonal

 //    putBeeper();

 //   dropBeeperDiagonal();
 //   dropBeeperDiagonal();
 //   dropBeeperDiagonal();
 //   dropBeeperDiagonal();
   
 // }

 // function dropBeeperDiagonal(){
 //      move();
 //      turnLeft();
 //      move();
 //      putBeeper();
 //      turnRight();
 //      }


//Karel chess board     

/*   
   putBeeper();
   rr();
   rr();
   dotting1X2();
   
   }

function dotting1 () {
   
   move();
   move();
   putBeeper();
   
   }
   
function dotting1X2 () {
   
   dotting1();
   dotting1();
   
   }
   
function upLeft(){
   
   turnLeft();
   move();
   turnLeft();
   
   }
   
function dotting2 () {
   
   move();
   putBeeper();
   move();
   
   }   
   
function dotting2X2 () {
   
   dotting2();
   dotting2();
   
   }
   
function upRight () {
   
   turnRight();
   move();
   turnRight();
   putBeeper();
   
   }

function rr () {
   
   dotting1X2();
   upLeft();
   dotting2X2();
   upRight();
   
   }
*/


// Milk bottles for money

/*function getMilk (dollars) {
 
 var nOfMilks = Math.floor ( dollars / 2 );
 
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("Get " + nOfMilks + " bottles of milk");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}

getMilk ( prompt ( "How much money have you got, sir ?" ) )
*/


// Remaining life

/*function lifeLeft ( age ) {

 var yearsLeft = 90 - age;
 var months = yearsLeft * 12;
 var weeks = yearsLeft * 52;
 var days = yearsLeft * 365;
 alert("You have " + months + " months, " + weeks + " weeks and " + days + " days left.")
 
}

lifeLeft ( prompt ( "What's your age ?" ) )*/


// Basic BMI calculator

// function calcBmi (weight , height) {
 
//  var bmi = weight / ( Math.pow(height,2) );
//  return Math.floor( bmi );
 
// }

// console.log ( "Your BMI is: " + calcBmi ( 65, 1.75 ) );


// Love calculator ( ! )

/*prompt ( "Your name: " )
prompt ( "Your crush's name: " )
var chance = ( 100 * Math.random() + 1 )
alert ( "Your chance is: " + Math.floor( chance ) + "% !" )*/


// Leap year

// function isLeap ( year ) {
// if ( (year !== 0) && ( (year % 4 === 0) && ( (year % 100 !== 0) || (year % 400 === 0) ) ) ) {
//  return ( "Leap year!" );
//  }
// else {
//  return ( "Not leap year." );
//  }
// }
// isLeap (4);

// function isLeapClassic(y) { return (y % 4 == 0) && !(y % 100 == 0) || (y % 400 == 0); }
// function isLeapXOR(y) { return (y % 4 == 0) ^ (y % 100 == 0) ^ (y % 400 == 0); }
// function isLeapBitwise(y) { return !(y & 3 || y & 15 && !(y % 25)); }

// function isLeap (y) { return !((y % 4) || (!(y % 100) && y % 400)); }


// Guest list check

// var guestList = ["55", "87", "95", "200", "75"];
// var guestName = prompt ( "Your name plz: " );
// if ( guestList.includes( guestName ) ) {
//  alert ( "Wellcome!" );
// }
// else {
//  alert ( "Maybe next time paul..." );
// }


// FizzBuzz

// var num = [];
// var add = 1;

// function fizzBuzz () {
//  if ( !(add % 15) ) {
//   num.push("fizzbuzz");
//  }
//  else if ( !(add % 3) ) {
//   num.push("fizz");
//  }
//  else if ( !(add % 5) ) {
//   num.push("buzz");
//  }
//  else {
//  num.push ( add );
//  }
//  add++;
//  console.log ( num );
// }


// Who pays for lunch ?

// var names = [ "1", "2", "3", "4", "5", "6" ];
// function whoPays () {
//  var select = Math.floor ( names.length * Math.random() );
//  return names[ select ] + " is going to buy lunch today!";
// }
// whoPays ();


// Automated FizzBuzz

// var num = [];
// var add = 1;

// function fizzBuzz () {
 
//  while ( add <= 100 ) {
 
//  if ( !(add % 15) ) {
//   num.push("fizzbuzz");
//  } else if ( !(add % 3) ) {
//   num.push("fizz");
//  } else if ( !(add % 5) ) {
//   num.push("buzz");
//  } else {
//  num.push ( add );
//  }
//  add++;
//  }
//  console.log ( num );
 
// }
// fizzBuzz();


// 99 bottles of beer

// function sing () {
//  var bottles = 99;
//  while ( bottles >= 2 ) {
//   var lyric = bottles + " bottles of beer on the wall, " + bottles + " bottles of beer. Take one down and pass it around, " + (bottles - 1) + " bottles of beer on the wall.";
//   console.log ( lyric );
//   bottles --;
//  }
//  console.log ( "1 bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, no more bottles of beer on the wall." )
//  console.log ( "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall." )
// }
// sing();


// Fibonacci sequence

function fibo ( input ) {
 var seq = [];
 for ( var add = 0 ; add < input && add < 2 ; add ++ ) {
  seq.push ( add )
  }
 for ( add = 2 ; add < input ; add ++ ) {
   seq.push ( seq[add-2] + seq[add-1] )
  }
 return seq;
}
fibo ( 99 );