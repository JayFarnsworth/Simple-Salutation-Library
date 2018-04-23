document.querySelector('#salutationButton').addEventListener('click', addSalutation)
document.querySelector('#fullNameButton').addEventListener('click', addFullName)

var mySalutation = Salutation('Peter', 'Forsberg')

function addSalutation(){
  var greeting = mySalutation.greeting();
  document.querySelector('#salutation').innerText = greeting;
};

function addFullName() {
  var fullName = mySalutation.fullName();
  document.querySelector('#fullname').innerText = fullName;
};