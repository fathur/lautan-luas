module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
 
		sass: {
			dist: {
				options: {
					style: 'expanded'
				},
				files: {
					'public/css/lautan-luas-bootstrap.css': 'resources/scss/main.scss',
				}
			},
			production: {
				options: {
					style: 'compressed'
				},
				
				files: {
					'public/css/lautan-luas-bootstrap.min.css': 'resources/scss/main.scss',
				}
			}
		},

		jade: {
		  compile: {
		    options: {
		      pretty: true,
		      client: false
		    },
		    files: [{
		      "public/index.html": "resources/jade/index.jade",
		      "public/csr.html": "resources/jade/csr.jade",
		      "public/contact-us.html": "resources/jade/contact-us.jade",
		      "public/careers.html": "resources/jade/careers.jade",
		      "public/about-us.html": "resources/jade/about-us.jade",
		      "public/about-us--health-safety-and-environment.html": "resources/jade/about-us--health-safety-and-environment.jade",
		      "public/about-us--good-corporate-governance.html": "resources/jade/about-us--good-corporate-governance.jade",
		      "public/about-us--board-of-commissioners.html": "resources/jade/about-us--board-of-commissioners.jade",
		      "public/about-us--board-of-directors.html": "resources/jade/about-us--board-of-directors.jade",
		      "public/about-us--board-of-directors--single.html": "resources/jade/about-us--board-of-directors--single.jade",
		      "public/industries.html": "resources/jade/industries.jade",
		      "public/industries--service-single.html": "resources/jade/industries--service-single.jade",
		      "public/investor-relations.html": "resources/jade/investor-relations.jade"
		    }]
		  }
		},


		/**
		 * Autorunt task dan mendeteksi perubahan tanpa harus
		 * mengulangi menjalankan perintah grunt
		 */
		watch: {
			/*options: {
				livereload: 3000
			},*/
			sass: {
				files: ['resources/scss/**/*.scss'],
				tasks: ['sass']
			},
			jade: {
				files: ['resources/jade/**/*.jade'],
				tasks: ['jade']
			}
		},
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jade');

	grunt.registerTask('default', [
		'sass',
		'jade',
		'watch',
	]);
	
}