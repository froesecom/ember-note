import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveNote: function(){
      this.get('note').save();
    },
    closeNote: function(){
      this.sendAction('close');
    }
  }
});
