var Rolodex = Backbone.Collection.extend({
  model: Contact,
  url: 'http://tiy-515.herokuapp.com/collections/jcContact'
});