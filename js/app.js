'use strict';

//worked with Joseph Davitt and Jordan Covington

console.log("Hey Hey!");

let score = 0;


function userName() {
  let userName = prompt('What is your name');

  alert(`Welcome to my site ${userName}! Please answer the following questions with yes/no or y/n`);

}


userName();

function homeState() {
  let questionOneResponse = prompt ('Was I born in Washington?').toLowerCase();

  if(questionOneResponse === 'yes' || questionOneResponse ==='y') {
    alert('You got it right!');
    score++;
  } else if(questionOneResponse === 'no' || questionOneResponse === 'n') {
    alert('Sorry, that is not correct');
  }
}

homeState();

function kids() {
  let questionTwoResponse = prompt ('Do I have kids?').toLowerCase();
  
  if(questionTwoResponse === 'yes' || questionTwoResponse === "y") {
    alert('Yep! 3 of them in fact!');
    score++;
  } else if(questionTwoResponse === 'no' || questionTwoResponse === "n") {
    alert('Actually I do!');
  }
}

kids();

function questionThree() {
  let questionThreeResponse = prompt ('Have I lived outside the state of Washington?').toLowerCase();
  
  if(questionThreeResponse === 'yes' || questionThreeResponse === 'y') {
    alert('Good guess!');
    score++;
  } else if(questionThreeResponse === 'no' || questionThreeResponse === 'n') {
    alert('Better luck next time. Onto the next question!');
  }
}

questionThree();

function family() {
  let questionFourResponse = prompt ('Do I live near family?').toLowerCase();
  
  if(questionFourResponse === 'yes' || questionFourResponse === 'y') {
    alert('I do');
    score++;
  } else if(questionFourResponse === 'no' || questionFourResponse === 'n') {
    alert('I actually do. I think I would go kooky if I did not have family support nearby!');
  }
}

family();

function relationshipStatus() {
  let questionFiveResponse = prompt ('Am I married?').toLowerCase();
  
  if(questionFiveResponse === 'yes' || questionFiveResponse === 'y') {
    alert('Yes! I have been married for 11 years');
    score++;
  } else if(questionFiveResponse === 'no' || questionFiveResponse === 'n') {
    alert('Oh yes I am! I have been married for 11 years');
  }
}

relationshipStatus();

alert('Thanks for getting through my questions!');


function numberGame() {
  let myNum = 17; 
  
  for (let i = 0; i < 4; i++) { 
    
    let question6Response = prompt ('What number am I thinking of?');
    
    if (question6Response === myNum) {
      alert('That is correct');
      score++;
      break;
    } else if(question6Response >myNum) {
      alert('too high');
    } else if(question6Response <myNum) {
      alert('too low');
    }
    if (i === 3) {
      alert(`The number I selected was ${myNum}`);
    }
  } 
}

numberGame();

function destinations() {
  let destinations = ['paris','istanbul','eqypt','venice','cornwall','amalfi coast','cape town'];
  
  for (let i = 0; i < 6; i++) {
  
    let questionSevenResponse = prompt ('Where do I want to visit?').toLowerCase(); 
  
    if ( destinations.indexOf(questionSevenResponse) >= 0 ) {
      alert ('You were right!');
      score++;
      break;
    } else if (destinations.indexOf(questionSevenResponse) === -1) {
      alert('Try again');
    }
    
  }

  alert(`I would love to visit ${destinations}`);
}

destinations();

alert(`Your final score is ${score}`);


