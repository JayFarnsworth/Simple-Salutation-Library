var Salutation = function(firstName, lastName){
  return {
    fullName: function () {
      return `${firstName} ${lastName}`;
    },
    greeting: function () {
      return `Greetings and Salutations ${firstName} ${lastName}`;
    }
  }
}