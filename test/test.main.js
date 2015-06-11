/* global describe, it */

(function () {
  'use strict';

  var contact;

    beforeEach(function() {
      contact = new Contact({
        firstName: 'John',
        lastName: 'Smith',
      });
    });

  describe('Adding a Contact', function () {

    it('should exist', function() {
        expect(contact).to.be.ok;
    });

    describe('Get Full Name', function () {
      it('should be a method', function () {
        expect(typeof contact.getFullName).to.equal('function');
      });
      it('should return first and last name', function () {
        expect(contact.getFullName()).to.equal('John Smith');
      });
    });
  });

})();