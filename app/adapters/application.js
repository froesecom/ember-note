import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  //Changing the namespace causes the adapter
  //to send requests to an alternate API endpoint
  namespace: 'api/alt'
});
