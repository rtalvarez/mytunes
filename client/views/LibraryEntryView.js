// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
      
      var nowPlaying = this.model.nowPlaying();
    
      if ( !nowPlaying ) {
        this.$el.toggleClass('playing');
        this.model.play();
      } else {
        
        this.$el.toggleClass('queued');
        this.model.enqueue();
      }
    }
  },

  render: function(){
    //console.log(this.template(this.model.attributes));
    //this.$el.addClass('playing');
    return this.$el.html(this.template(this.model.attributes));
  }

});
