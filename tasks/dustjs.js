'use strict';

var path = require('path');

module.exports = function dustjs(grunt) {
	grunt.loadNpmTasks('grunt-dustjs');

	return {
	    build: {
	        files: [
	            {
	                expand: true,
            
	                cwd: 'tmp/',
            
	                src: '**/*.dust',
	                dest: '.build/templates',
	                ext: '.js'
	            }
	        ],
	        options: {
            
	            fullname: function (filepath) {
	                var path = require('path'),
	                    name = path.basename(filepath, '.dust'),
	                    parts = filepath.split('/'),
	                    fullname = parts.slice(3, -1).concat(name);
	                return fullname.join('/');
	            }
            
	        }
	    }
	};
};
