var Person = function(firstAndLast) {
  this.getFirstName = function(){
    var matches = firstAndLast.match(/^[A-z]*/);
    return matches[0];
  };
  this.getLastName = function(){
    var matches = firstAndLast.match(/[A-z]*$/);
    return matches[0];
  };
  this.getFullName = function(){
    return firstAndLast;
  };
  this.setFirstName = function(name){
    firstAndLast = name + ' ' + firstAndLast.substr(firstAndLast.indexOf(' '));
  };
  this.setLastName = function(name){
    firstAndLast = firstAndLast.substr(0, firstAndLast.indexOf(' ')) + ' ' + name;
  };
  this.setFullName = function(name){
    firstAndLast = name;
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();