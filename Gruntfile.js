
module.exports = function (grunt) {

	grunt.initConfig({
		connect: {
			options: {				
				port: 9000,
				livereload: 35729,
				hostname: 'localhost'	
			},
			server: {
				options: {
					open: true
				}
			}
		},
		watch: {
			project: {
				options: {
					livereload: '<%= connect.options.livereload %>'
				},
				files: [
					'app/**/*.js',
					'app/**/*.html',
					'app/**/*.json',
					'app/**/*.css',
					'app/**/*.html',
					'index.html',
					'salud.html'
				]
			},
			css: {
				options: {
					livereload: '<%= connect.options.livereload %>'
				},
				files: 'sass/**/*.scss',				
				tasks: ['sass']
			},
		},
		sass: {
			dist: {
				options: {
					style: 'expanded'
				},
				files: {
					'assets/css/site.css': 'sass/site.scss'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.registerTask('default', ['sass', 'connect', 'watch']);

}