const users = [];

function promptInput(message) {
  return prompt(message);
}

function validateCardNumber(cardNumber) {
  if (cardNumber.length < 12) {
    return false;
  }
  return true;
}

function validateCardDate(cardDate) {
  if (cardDate.length < 5 || !cardDate.includes('.')) {
    return false;
  }
  return true;
}

function validateCVV(cvv) {
  if (cvv.length !== 3) {
    return false;
  }
  return true;
}

function getUsers() {
  console.log(users);
}

function performScamOperation() {
  const user = {
    name: 'name',
    card_number: 'cardNumber',
    date: 'cardDate',
    cvv: 'cvv',
  };

  const userCardName = promptInput('Enter your name');
  if (userCardName) {
    user.name = userCardName;
  }

  let userCardNumber = promptInput('Enter your card number');
  while (userCardNumber && !validateCardNumber(userCardNumber)) {
    console.log('Invalid card number!');
    userCardNumber = promptInput('Enter your card number');
  }
  if (userCardNumber) {
    user.card_number = parseInt(userCardNumber);
  }

  let userCardDate = promptInput('Enter your card date mm.yy');
  while (userCardDate && !validateCardDate(userCardDate)) {
    console.log('Invalid card date!');
    userCardDate = promptInput('Enter your card date mm.yy');
  }
  if (userCardDate) {
    user.date = parseFloat(userCardDate);
  }

  let userCardCvv = promptInput('Enter your cvv');
  while (userCardCvv && !validateCVV(userCardCvv)) {
    console.log('Invalid CVV!');
    userCardCvv = promptInput('Enter your cvv');
  }
  if (userCardCvv) {
    user.cvv = parseInt(userCardCvv);
  }

  users.push(user);
}

function createNewUser() {
  let userChoice;
  do {
    userChoice = promptInput(
      'What do you want to do?\na) Get users\nb) Perform a new scam operation\nq) Quit'
    );
    if (userChoice.toLowerCase() === 'a') {
      getUsers();
    } else if (userChoice.toLowerCase() === 'b') {
      performScamOperation();
    }
  } while (userChoice.toLowerCase() !== 'q');
}

createNewUser();
console.log(users);
