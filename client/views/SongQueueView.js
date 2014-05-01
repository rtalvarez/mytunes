// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

 render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<th>Queued tracks</th>').append(
      this.collection.map(function(song){
        if (song.get('queue')){
          return new LibraryEntryView({model: song}).render();
        }
      })
    );
  }

});
