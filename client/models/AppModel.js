// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());
     //
    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the funciton (this.set('currentSong', song)) would
    end up refering to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */

    
    // params.library.on('play', function(song){
    //   this.set('currentSong', song);
    // }, this);

    params.library.on('play', function(song){

      var place = song.get('queue') || 1;
      var playing = this.nowPlaying();
      
      console.log(place)
      console.log(this.nowPlaying());


      if ( place === 1 && !playing ){

        this.queue(place, song);
        this.set('currentSong', song);
        this.dequeue();
      } else if ( place > 1 && playing ) { 

        this.removeFromQueue(song);

      } else {

        this.queue(++place, song);
      }
    }, this);

    params.library.on('dequeue', function(song){
      this.set('queue', null);
    }, this);
  },

  removeFromQueue: function(song){

    // var behindQueue = this.get('library')

    var start = song.get('queue');
    var removing = false;

    this.get('library').each(function(song){
      if (!removing) {
        if (song.get('queue') === start){
          removing = true;
          song.set('queue', null);
        }
      } else {
        var oldPosition = song.get('queue');
        song.set('queue', oldPosition - 1);
      }
    });

  },

  queue: function(index, song){
    console.log('queueing song in place ' + index)
    song.set('queue', index);
  },

  dequeue: function(){

    
    this.get('library').each(function(song){
      if (song.get('queue')) {
        song.set( 'queue', song.get('queue') - 1 );
      }
    }, this)
  },

  nowPlaying: function(){

    var playing = false;
    this.get('library').each(function(song){
      if ( song.get('queue') === 0 ) {
        playing = true;
        return playing;
      }
    });

    return playing;
  }

});
