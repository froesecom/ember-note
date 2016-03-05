import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  query: function(store, type, query) {
    var keys = Object.keys(query);
    for(var i = 0; i < keys.length; i++) {
      var key = keys[i];
      //classified i.e. titlized
      var classifiedKey = Ember.String.classify(key);
      query[classifiedKey] = query[key];
      delete query[key];

    }
    return this._super(store, type, query);
  }
});
