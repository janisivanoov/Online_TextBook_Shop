'use strict';


module.exports = function requirejs(grunt) {
	grunt.loadNpmTasks('grunt-contrib-requirejs');

	return {
        build: {
            options: {
                baseUrl: 'public/js',
                dir: '.build/js',
                optimize: 'uglify',
                modules: [
                    { name: 'app' }
                ]
            }
        }
	};
};
