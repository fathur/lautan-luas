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
		      "public/login.html": "resources/jade/login.jade",
		      "public/login-thanks.html": "resources/jade/login-thanks.jade",
		      "public/csr.html": "resources/jade/csr.jade",
		      "public/contact-us.html": "resources/jade/contact-us.jade",
		      "public/careers.html": "resources/jade/careers.jade",
		      "public/careers--apply-now.html": "resources/jade/careers--apply-now.jade",
		      "public/careers--how-to-apply.html": "resources/jade/careers--how-to-apply.jade",
		      "public/careers--view-all-jobs.html": "resources/jade/careers--view-all-jobs.jade",
		      "public/careers--view-all-jobs--single.html": "resources/jade/careers--view-all-jobs--single.jade",
		      "public/careers--employee-activities.html": "resources/jade/careers--employee-activities.jade",

		      "public/about-us.html": "resources/jade/about-us.jade",
		      "public/about-us--health-safety-and-environment.html": "resources/jade/about-us--health-safety-and-environment.jade",
		      "public/about-us--our-poeple.html": "resources/jade/about-us--our-poeple.jade",
		      "public/about-us--good-corporate-governance.html": "resources/jade/about-us--good-corporate-governance.jade",
		      "public/about-us--board-of-commissioners.html": "resources/jade/about-us--board-of-commissioners.jade",
		      "public/about-us--board-of-directors.html": "resources/jade/about-us--board-of-directors.jade",
		      "public/about-us--board-of-directors--single.html": "resources/jade/about-us--board-of-directors--single.jade",
		      "public/about-us--board-of-commissioners--single.html": "resources/jade/about-us--board-of-commissioners--single.jade",
		      "public/industries.html": "resources/jade/industries.jade",
		      "public/industries--gallery.html": "resources/jade/industries--gallery.jade",
		      "public/industries--case-studies--archives.html": "resources/jade/industries--case-studies--archives.jade",
		      "public/industries--distribution-channel.html": "resources/jade/industries--distribution-channel.jade",
		      "public/industries--distribution-channel--industry-single.html": "resources/jade/industries--distribution-channel--industry-single.jade",
		      "public/industries--distribution-channel--industry-single--process.html": "resources/jade/industries--distribution-channel--industry-single--process.jade",
		      
		      "public/industries--service-single.html": "resources/jade/industries--service-single.jade",
		      "public/investor-relations.html": "resources/jade/investor-relations.jade",
		      "public/investor-relations--stock-information.html": "resources/jade/investor-relations--stock-information.jade",
		      "public/investor-relations--financial-information.html": "resources/jade/investor-relations--financial-information.jade",
		      "public/investor-relations--news-events.html": "resources/jade/investor-relations--news-events.jade",
		      "public/investor-relations--news--single.html": "resources/jade/investor-relations--news--single.jade",
		      "public/investor-relations--news-events--archives.html": "resources/jade/investor-relations--news-events--archives.jade",
		      "public/investor-relations--faq.html": "resources/jade/investor-relations--faq.jade",
		      "public/investor-relations--reports-archive.html": "resources/jade/investor-relations--reports-archive.jade",
		      "public/investor-relations--auditor-reports-archive.html": "resources/jade/investor-relations--auditor-reports-archive.jade",
		      "public/investor-relations--events-archive.html": "resources/jade/investor-relations--events-archive.jade",
		      "public/investor-relations--events-single.html": "resources/jade/investor-relations--events-single.jade",
		      "public/search-results.html": "resources/jade/search-results.jade",
		      "public/article-single.html": "resources/jade/article-single.jade",
		      "public/careers--why-join--single.html": "resources/jade/careers--why-join--single.jade"
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