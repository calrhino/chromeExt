/* global TrelloPowerUp */

// we can access Bluebird Promises as follows
var Promise = TrelloPowerUp.Promise;


// We need to call initialize to get all of our capability handles set up and registered with Trello
TrelloPowerUp.initialize({
  'card-buttons': function(t, options){
  return [{
    icon: '',
    text: 'Fill Form',
    callback: function(t){
      t.card('id', 'name', 'url','desc')
      .then(function(promiseResult) {
          console.log(promiseResult);
      });
    }
  }];
  }
});