
var allContacts = new Rolodex();

var addContact = function(e){


  var contactFirstName = $('#firstName').val();
  var contactLastName = $('#lastName').val();
  var contactPhoneNumber = $('#phoneNumber').val();
  var contactHandle = $('#handle').val();
  var contactEmail = $('#email').val();

  var getFullName = function(){
    return contactFirstName + " " + contactLastName;
  };

  // var getPhoneNumber = function(){
  //   console.log(contactPhoneNumber);
  //   if (contactPhoneNumber.length === 10 && (typeof Number(contactPhoneNumber) === 'number')) {
  //     return contactPhoneNumber;
  //   } else {
  //     alert('Phone Number must be 10 digits');
  //   }
  // };

  var c = new Contact({
    fullName: getFullName(),
    phoneNumber: contactPhoneNumber,
    handle: contactHandle,
    email: contactEmail
  });

  return c;

};

var render = function(e){

  allContacts.fetch().done(function(data){
    $('#contactList').html(template.contact({data:data}));
  });
};

var adder = function(e){
  e.preventDefault();

  var c = addContact();

  allContacts.add(c).save().success(function(){
    render();
  });

  this.reset();
};

var deleter = function(){

  var deleteID = $(this).parent().attr('id');
  var m = allContacts.get(deleteID);

  m.destroy().success(function(){
    allContacts.fetch().done(function(data){
      $('#contactList').html(template.contact({data:data}));
    });
  });
};

var initRender = function (){
  allContacts.fetch().done(function(data){
    $('#contactList').html(template.contact({data:data}));
  });
};


$('#contactList').on('click', 'p', deleter);
$('#addContact').on('submit', adder);

initRender();