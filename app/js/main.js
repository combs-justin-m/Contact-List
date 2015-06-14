
var allContacts = new Rolodex();

var addContact = function(e){


  var contactFirstName = $('#firstName').val();
  var contactLastName = $('#lastName').val();
  var contactPhoneNumber = $('#phoneNumber').val();
  var contactHandle = $('#handle').val();
  var contactEmail = $('#email').val();
  var contactCategory = $('select').prop('select', true).val();

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
    email: contactEmail,
    category: contactCategory
  });

  return c;

};

var render = function(filter){

  allContacts.fetch().done(function(data){

    var filteredData = data.sort(dataSort);

    filteredData = _.filter(filteredData, function(m){
      if (filter === undefined) {
        return true;
      } else {
        return m.category === filter;
    }
    });
    $('#contactList').html(template.contact({data:filteredData}));
  });
};


var dataSort = function(a, b){
      var nameA = a.fullName.toLowerCase(),
          nameB = b.fullName.toLowerCase();
        if (nameA < nameB) {
          return -1;
        } else if (nameA > nameB) {
          return 1;
        } else return 0;
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
    render();
  });
};

///////////////////////////////////////

$('.newBtn').on('click', function(){
  $('.addContact').toggleClass('showNav');
});

$('#contactList').on('click', 'li', function(){
  $(this).find($('.contactInfo')).toggleClass('showContact');
});

$('#contacts').on('click', function(){
  render();
});

$('#frontend').on('click', function(){
  render('frontend');
});

$('#ruby').on('click', function(){
  render('ruby');
});

$('#ios').on('click', function(){
  render('ios');
});

$('#instructors').on('click', function(){
  render('instructors');
});

$('#contactList').on('click', 'p', deleter);

$('#addContact').on('submit', adder);

render();

///////////////////////////////////////
