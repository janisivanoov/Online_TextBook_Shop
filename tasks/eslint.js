'use strict';

module.exports = function eslint(grunt) {
    grunt.loadNpmTasks('grunt-eslint');

    return {
        options: {
            configFile: '.eslintrc',
            rulePaths: ['node_modules/eslint/lib/rules']
        },
        target: ['index.js',
            'server.js',
            'controllers/**/*.js',
            'lib/**/*.js',
            'models/**/*.js',
            'public/js/**/*.js'
        ]
    };
};
