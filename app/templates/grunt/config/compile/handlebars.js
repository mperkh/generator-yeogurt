/**
 * Configuration for handlebars task(s)
 */
'use strict';

var taskConfig = function(grunt) {

    grunt.config.set('handlebars', {
        server: {
            options: {
                namespace: 'JST'
            },
            files: {
                '<%%= yeogurt.tmp %>/templates/templates.js': ['<%%= yeogurt.client %>/templates/**/*.hbs']
            }
        },
        dist: {
            options: {
                namespace: 'JST'
            },
            files: {
                '<%%= yeogurt.tmp %>/templates/templates.js': ['<%%= yeogurt.client %>/templates/**/*.hbs']
            }
        }<% if (jsFramework === 'backbone') { %>,
        test: {
            options: {
                namespace: 'JST'
            },
            files: {
                'test/scripts/templates.js': ['<%%= yeogurt.client %>/templates/**/*.hbs']
            }
        }<% } %>
    });

};

module.exports = taskConfig;
