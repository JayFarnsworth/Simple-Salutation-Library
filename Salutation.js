var Salutation = (function(firstName, lastName){
  
  var methods = {}

  methods.fullName = function() {
    return `${firstName} ${lastName}`;
  }
  methods.greeting = function() {
    return `Greetings and Salutations ${firstName} ${lastName}`;
  }

  return methods

})

// module.exports = { salutation };