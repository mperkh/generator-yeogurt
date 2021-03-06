'use strict';

var IndexView = Backbone.View.extend({

    el: <% if (useAuth) { %>'.content'<% } else { %>'#app-wrapper'<% } %>,

    template: JST['client/templates/index<% if (jsTemplate === 'handlebars') { %>.hbs<% } else if (jsTemplate === 'underscore') { %>.jst<% } else if (jsTemplate === 'jade') { %><% } %>'],

    events: {},

    initialize: function() {
        this.render();
    },

    render: function() {
        this.$el.html(this.template);
        return this;
    }

});

module.exports = IndexView;
