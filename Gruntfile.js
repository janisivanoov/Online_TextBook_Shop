'use strict';

module.exports = function (grunt) {

    require('grunt-config-dir')(grunt, {
        configDir: require('path').resolve('tasks')
    });

    grunt.registerTask('build', ['eslint', 'eslint', 'i18n', 'less', 'requirejs', 'copyto']);

    grunt.registerTask('test', [ 'eslint', 'mochacli' ]);
};
