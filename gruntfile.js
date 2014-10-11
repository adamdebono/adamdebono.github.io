module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		//Read in node package properties
		pkg: grunt.file.readJSON('package.json'),
		
		//SCSS->CSS
		sass: {
			dist: {
				options: {
					sourcemap: 'auto',
					trace: true,
					style: 'compressed'
				},
				files: [{
					expand: true,
					cwd: 'assets/style',
					src: ['*.scss'],
					dest: 'assets/dist/style',
					ext: '.css'
				}]
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-sass');
	
	grunt.registerTask('default', ['sass']);
};