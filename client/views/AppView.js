// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params){
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.queueView = new SongQueueView({collection: this.model.get('library')});

    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'

    // This code jumps to PlayerView.js, sets playerView.model to 'this' and renders the play
    // tl;dr it plays the song
    this.model.on('change:currentSong', function(model){
      
      this.playerView.setSong(model.get('currentSong'));
    }, this);

    this.model.on('change:songQueue', function(model, index, collection){
      

      // Queue appropriately
      this.model.queue(model.get('songQueue'));

      model.get('songQueue').set('queue', 1);
      this.queueView.queueSong(model.get('songQueue'));
    }, this);
  },

  render: function(){
    return this.$el.html([
      this.playerView.$el,
      this.libraryView.$el,
      this.queueView.$el
    ]);
  }

});
