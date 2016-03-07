import Ember from 'ember';

// Because a mixin can contain properties and functions, it can be used not
// only to abstract behavior, but to abstract state as well. When a class inherits
// this mixin, the properties and functions of that mixin become part of the
// definition of the inheriting class.

export default Ember.Mixin.create({
  isValidLength: function(value, min, max) {
    return !(value === undefined || value.length <= min || value.length > max);
  },
  isValidEmail: function(value) {
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return value.match(pattern);
  }
});
