// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {

      this.$el.toggleClass('queued');

      if (!this.model.get('queue')) {
        // The clicked item is not in queue: add it to the queue
        this.model.queue();
      } else {
        // The clicked item IS in the queue, remove it
        this.model.dequeue();
      }



      // this.$el.toggleClass('playing');
      // this.model.play();

      
    }
  },

  render: function(){
    //console.log(this.template(this.model.attributes));
    //this.$el.addClass('playing');
    return this.$el.html(this.template(this.model.attributes));
  }

});
