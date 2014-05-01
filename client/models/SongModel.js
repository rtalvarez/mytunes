// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  defaults: {
    'queue': null
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection

    this.trigger('play', this);
    
  },

  enqueue: function(){

    console.log('enqueued ' + this.get('title'))
    this.trigger('enqueue ', this);
  },

  dequeue: function(song){

    song.set('queue', null);
    var next;
    console.log('dequeue song ' + song.get('title'));

    song.collection.each(function(song){
      if ( song.get('queue') === 1){
        next = song;
        return;
      }
    });

    console.log('enqueue song ' + next.get('title'))
    next.enqueue()
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
  },

  ended: function(event){
    console.log(this);
  }

});
