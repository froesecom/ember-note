import Ember from 'ember'
//this class stores iformation we want to share between classes
//for example, we use it to provide the adapter with user data, such as user token
//page 79 explanation
export function initialize(container, application) {
  var session = Ember.Object.extend();
  application.register('session:main', session);
  application.inject('adapter', 'session', 'session:main');
  //The first parameter to the
  //inject function is the type we want to inject into.
  //The second parameter is the
  //property name we want to make the object available under within that type,
  //and the third parameter is the name we registered the object under previously.
  application.inject('route', 'session', 'session:main');
}

export default {
  name: 'session',
  initialize
};
