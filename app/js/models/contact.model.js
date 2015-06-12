var Contact = Backbone.Model.extend({

  idAttribute: '_id',

  defaults: {
    fullName: '',
    phoneNumber: '',
    email: '',
    handle: ''
  }

});