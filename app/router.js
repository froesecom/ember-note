import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('register');
  this.route('login');
  this.route('notebooks', {path:'notebooks/:user_id'}, function(){
    this.route("notes", { path:"notes/:notebook_id"}, function() {});
  });
});

export default Router;
