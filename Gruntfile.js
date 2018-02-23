module.exports = function(grunt) {
    grunt.initConfig({
        uglify: {
            docs: {
                files: {
                    'static/js/docs.min.js': [
                        '_components/underscore/underscore.js', 
                        '_components/jquery/jquery.js', 
                        'static/js/script.js'
                    ]
                }
            }
        },
        exec: {
            build: {
                cmd: 'bundle exec jekyll build'
            },
            serve: {
                cmd: 'bundle exec jekyll serve --watch'
            }
        },
        watch: {
            files: ['Gruntfile.js', '_components/**/*', 'static/**/*'],
            tasks: ['uglify']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['uglify', 'exec:build']);
}; 