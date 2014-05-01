// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  defaults: {
    'queue': null
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection

    this.trigger('play', this);
    
  },

  queue: function(){

    this.trigger('queue', this);
  },

  dequeue: function(){

    this.trigger('dequeue', this);
  }

});
