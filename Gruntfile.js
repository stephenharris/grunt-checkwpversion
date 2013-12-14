'use strict';

module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			options: {
				jshintrc: '.jshintrc',
			},
			all: [
				'Gruntfile.js',
				'tasks/*.js',
			],
		},
		checkwpversion: {
			options:{
				readme: 'tests/fixtures/readme.txt',
				plugin: 'tests/fixtures/my-plugin.php',
			},
			plugin_equals_stable: {
			    version1: 'plugin',
			    version2: 'readme',
				compare: '==',
			},
			plugin_equals_package: {
			    version1: 'plugin',
			    version2: '<%= pkg.version %>',
				compare: '==',
			},
		}
	});

	// Actually load this plugin's task(s).
	grunt.loadTasks('tasks');

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-jshint');

	// By default, lint and run all tests.
	grunt.registerTask('default', ['jshint']);
};