import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  //this extends the query method to intercept queries before
  //they get to the server
  query: function(store, type, query) {
    var keys = Object.keys(query);
    for(var i = 0; i < keys.length; i++) {
      var key = keys[i];
      //classified i.e. titlized
      var classifiedKey = Ember.String.classify(key);
      query[classifiedKey] = query[key];
      delete query[key];

    }
    //then passes control to the superclass method to complete the query
    return this._super(store, type, query);
  }
});
