import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    login: function() {
      this.store.query('user', {
        name: this.controller.get('name')
      }).then((users) => {
        if(users.get('length') === 1) {
          var user = users.objectAt(0);
          //set user attribute to the application controller
          // the makes the if/unless blocks in application.hbs 'work'
          this.controllerFor('application').set('user', user);
          // redirect to notebooks route
          this.transitionTo('notebooks');
        }
        else {
          console.log('unexpected query result');
        }
      });
    }
  }
});
