'use strict';

console.log("Hey Hey!");

//TODO: GET USERS NAME - PROMPT - alert a greeting back to the user

let userName = prompt('What is your name');

alert(`Welcome to my site ${userName}! Please answer the following questions with yes/no or y/n`);

let questionOneresponse = prompt ('Was I born in Washington?').toLowerCase();

if(questionOneresponse === 'yes' || questionOneresponse ==='y') {
  alert('You got it right!')
} else if(questionOneresponse === 'no' || questionOneresponse === 'n') {
  alert('Sorry, that is not correct');
}

let questionTworesponse = prompt ('Do I have kids?').toLowerCase();

if(questionTworesponse === 'yes' || questionTworesponse === "y") {
  alert('Yep! 3 of them in fact!')
} else if(questionTworesponse === 'no' || questionTworesponse === "n") {
  alert('Actually I do!');
}

let questionThreeresponse = prompt ('Have I lived outside the state of Washington?').toLowerCase();

if(questionThreeresponse === 'yes' || questionThreeresponse === 'y') {
  alert('Good guess!')
} else if(questionThreeresponse === 'no' || questionThreeresponse === 'n') {
  alert('Better luck next time. Onto the next question!');
}

let questionFourresponse = prompt ('Do I live near family?').toLowerCase();

if(questionFourresponse === 'yes' || questionFourresponse === 'y') {
  alert('I do')
} else if(questionFourresponse === 'no' || questionFourresponse === 'n') {
  alert('I definitely do. I think I would go kooky if I did not have family support nearby!');
}

let questionFiveresponse = prompt ('Am I married?').toLowerCase();

if(questionFiveresponse === 'yes' || questionFiveresponse === 'y') {
  alert('Yes! I have been married for 11 years')
} else if(questionFiveresponse === 'no' || questionFiveresponse === 'n') {
  alert('Oh yes I am! I have been married for 11 years');
}


//TODO: prompt them with 5 yes or no (y/n) question, alert if they got the answer right or wrong

//TODO:GIVE PERSONALIZED MESSAGE AT THE END