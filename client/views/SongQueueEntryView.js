// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  
  template: _.template('<td class="queued">( Queued.. )(<%= artist %>)</td><td><%= title %></td>'),

  events: {

  },



});
