import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalize: function(typeClass, hash, prop) {
    hash.title = hash.Title;
    delete hash.Title;
    hash.user = hash.User;
    delete hash.User;

    //ensure that the superclass method `normalize` method
    //is called
    return this._super(typeClass, hash, prop);
  },
  serialize: function(snapshot, options) {
    //snapshot represents a record at the time the 
    //serialize method is called
    var json = {
      Title: snapshot.attr('title'),
      User: snapshot.belongsTo('user').id
    };
    return json;
  }
});
