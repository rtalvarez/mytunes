// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {


      console.log('click event fired');
      var nowPlaying = this.model.nowPlaying();
      console.log('now playing ' + nowPlaying)

      if ( !nowPlaying ) {
        this.$el.toggleClass('playing');
        this.model.play();
      } else {
        console.log('song queued');
        this.$el.toggleClass('queued');
        this.model.queue();
      }
    }
  },

  render: function(){
    //console.log(this.template(this.model.attributes));
    //this.$el.addClass('playing');
    return this.$el.html(this.template(this.model.attributes));
  }

});
