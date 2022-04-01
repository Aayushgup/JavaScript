function makePerson(first , last) {
    return {
      first: first,
      last: last,
      fullName: function() {
        return this.first + ' ' + this.last;
      },
      fullNameReversed: function() {
        return this.last + ', ' + this.first;
      }
    };
  }


  function personFullName(person) {
    return person.first + ' ' + person.last;
  }
  function personFullNameReversed(person) {
    return person.last + ', ' + person.first;
  }
  
  var s = makePerson('Aayush', 'Kasaudhan');
    console.log(typeof s);//s is object
  console.log(personFullName(s));
  personFullNameReversed(s); 

 console.log( s.fullName());
 console.log( s.fullNameReversed());

 let fullName= s.fullName;

 console.log(fullName());
  
// Inner functions
 function parentFunc() {
    var a = 1;
  
    function nestedFunc() {
      var b = 4; // parentFunc can't use this
      return a + b;
    }
    
    return nestedFunc(); // 5
  }
  console.log(parentFunc());

  // Closure
  function makeAdder(a) {
    return function(b) {
      return a + b;
    };
  }
  var add5 = makeAdder(5);
  var add20 = makeAdder(20);
 console.log(add5(6));
  console.log(add20(72));