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
          // For initial api: this.controllerFor('application').set('user', user);
          this.session.set('user', user); //from alt-api. session injected in initializer to all routes
          // redirect to notebooks route
          // PROVIDE USER ID AS PARAMS
          this.transitionTo('notebooks', user.get('id'));
        }
        else {
          console.log('unexpected query result');
        }
      });
    }
  }
});
