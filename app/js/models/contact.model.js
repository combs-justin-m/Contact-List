var Contact = Backbone.Model.extend({

  initialize: function(){
    console.log('New Contact!');
  },

  idAttribute: '_id',

  defaults: {
    fullName: '',
    phoneNumber: '',
    email: '',
    handle: ''
  }

});