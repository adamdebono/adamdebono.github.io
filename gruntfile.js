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
					ext: '.min.css'
				}]
			}
		},
		
		//JS Uglify
		uglify: {
			dist: {
				options: {
					sourceMap: true
				},
				files: [{
					expand: true,
					cwd: 'assets/scripts',
					src: '**/*.js',
					dest: 'assets/dist/scripts',
					ext: '.min.js'
				}]
			}
		},
		
		//Watch for changes to run tasks
		watch: {
			sass: {
				files: ['assets/style/*.scss'],
				tasks: ['sass']
			},
			js: {
				files: ['assets/scripts/*.js'],
				tasks: ['uglify']
			}
		},
		
		//Static file server
		connect: {
			server: {
				options: {
					protocol: 'http',
					hostname: '*',
					port: 9001,
					
					open: true
				}
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.loadNpmTasks('grunt-contrib-connect');
	
	grunt.registerTask('default', ['sass', 'uglify']);
	grunt.registerTask('serve', ['connect:server:keepalive', 'watch']);
};