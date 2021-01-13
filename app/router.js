import EmberRouter from '@ember/routing/router';
import config from 'tutorial/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('items', {path:"items/:item_id"});
  this.route('not-found',{path:'/*'});
  this.route('cart',{path:'shopping-cart'})
});
