/* global describe, it */

(function () {
  'use strict';

  var contact;

    beforeEach(function() {
      contact = new Contact({
        firstName: 'John',
        lastName: 'Smith',
        phoneNumber: '1234567890'
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

    describe('Phone number', function (){
      it('should exist', function() {
        expect(contact.get('phoneNumber')).to.be.ok;
      });
      it('should accept only 10 digits', function() {
        expect(contact.get('phoneNumber').length).to.equal(10);
      });
    });

  });

})();