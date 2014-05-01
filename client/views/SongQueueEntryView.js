// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(Queued ... )(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {

      this.model.set('queue', null);
    }
  },

  render: function(){
    //console.log(this.template(this.model.attributes));
    //this.$el.addClass('playing');
    return this.$el.html(this.template(this.model.attributes));
  }

});
