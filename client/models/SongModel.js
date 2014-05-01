// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  defaults: {
    'queue': null
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection

    this.trigger('play', this);
    
  },

  queue: function(song){

    this.trigger('queue ', this);
  },

  dequeue: function(){

    this.trigger('dequeue', this);
  },

  nowPlaying: function(){

    var playing = false;
    this.collection.each(function(song){
      if ( song.get('queue') === 0 ) {
        playing = true;
        return true;
      }
    });

    return playing;
  }

});
