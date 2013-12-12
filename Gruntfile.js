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
			check: {
			    version1: 'plugin',
			    version2: 'readme',
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