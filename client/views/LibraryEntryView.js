// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {


      this.$el.toggleClass('queued');
      var place = this.model.get('queue');
      place = place || 1;


      if (place === 1) {
      // If item is in the first place of the queue, just play it
        this.model.play();
      } else if (place > 1) {
      // The item was already queued and was clicked again, remove it from the queue
        this.model.dequeue();
      } else {
      // The item was not in the queue and was clicked, add it to the queue
        this.set('queue', place++);
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
