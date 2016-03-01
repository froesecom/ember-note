import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findRecord('note', params.note_id);
  },
  actions: {
    close: function() {
      this.transitionTo('notebooks.notes');
    }
  }
});
