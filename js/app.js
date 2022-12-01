'use strict';

//worked with Joseph Davitt and Jordan Covington

console.log("Hey Hey!");

let score = 0

//TODO: GET USERS NAME - PROMPT - alert a greeting back to the user

let userName = prompt('What is your name');

alert(`Welcome to my site ${userName}! Please answer the following questions with yes/no or y/n`);

let questionOneresponse = prompt ('Was I born in Washington?').toLowerCase();

if(questionOneresponse === 'yes' || questionOneresponse ==='y') {
  alert('You got it right!')
  score++
} else if(questionOneresponse === 'no' || questionOneresponse === 'n') {
  alert('Sorry, that is not correct');
}

let questionTworesponse = prompt ('Do I have kids?').toLowerCase();

if(questionTworesponse === 'yes' || questionTworesponse === "y") {
  alert('Yep! 3 of them in fact!')
  score++
} else if(questionTworesponse === 'no' || questionTworesponse === "n") {
  alert('Actually I do!');
}

let questionThreeresponse = prompt ('Have I lived outside the state of Washington?').toLowerCase();

if(questionThreeresponse === 'yes' || questionThreeresponse === 'y') {
  alert('Good guess!')
  score++
} else if(questionThreeresponse === 'no' || questionThreeresponse === 'n') {
  alert('Better luck next time. Onto the next question!');
}

let questionFourresponse = prompt ('Do I live near family?').toLowerCase();

if(questionFourresponse === 'yes' || questionFourresponse === 'y') {
  alert('I do')
  score++
} else if(questionFourresponse === 'no' || questionFourresponse === 'n') {
  alert('I actually do. I think I would go kooky if I did not have family support nearby!');
}

let questionFiveresponse = prompt ('Am I married?').toLowerCase();

if(questionFiveresponse === 'yes' || questionFiveresponse === 'y') {
  alert('Yes! I have been married for 11 years')
  score++
} else if(questionFiveresponse === 'no' || questionFiveresponse === 'n') {
  alert('Oh yes I am! I have been married for 11 years');
}


alert('Thanks for getting through my questions!');

//TODO: prompt them with 5 yes or no (y/n) question, alert if they got the answer right or wrong

//TODO:GIVE PERSONALIZED MESSAGE AT THE END

let myNum = 17 

for (let i = 0; i < 4; i++) { 
  
 let question6response = prompt ('What number am I thinking of?').toLowerCase
  // Runs 4 times, with values of step 0 through 4.
  if (question6response === myNum) {
    alert('That is correct')
    score++
    break;
  } else if(question6response >myNum) {
    alert('too high');
  } else if(question6response <myNum) {
    alert('too low');
  }
  if (i === 3) {
    alert(`The number I selected was ${myNum}`);
  }
} 

let destinations = ['paris','istanbul','eqypt','venice','cornwall','amalfi coast','cape town'];

for (let i = 0; i < 6; i++) {

  let questionSevenresponse = prompt ('Where do I want to visit?').toLowerCase(); 

  if ( destinations.indexOf(questionSevenresponse) >= 0 ) {
    alert ('You were right!')
    score++
    break;
  } else if (destinations.indexOf(questionSevenresponse) === -1) {
    alert('Try again');
  }
  
}

alert(`I would love to visit ${destinations}`);

alert(`Your final score is ${score}`);


