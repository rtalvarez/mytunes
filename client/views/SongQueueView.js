// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function(){
    //console.log('Queue view initialized');
    this.render();
  },

  tagName: 'table',

  queueSong: function(song) {

    console.log('queue song ' + song.get('title') );
    this.render(song);
  },

  render: function(song) {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    
    this.$el.children().detach();


    console.log('rendering queue views');
    
    this.$el.html('<th>Queued tracks</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
    




  }

});
