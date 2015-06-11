var Contact = Backbone.Model.extend({

  initialize: function(){
    console.log('New Contact!');
  },

  getFullName: function(){
    return this.get('firstName') + " " + this.get('lastName');
  }

  // defaults: {
  //   getFullName: ,
  //   phoneNum: '',
  //   email: '',
  //   handle: ''
  // }


});