$(function() {
        var topoffset = 43;

        var isTouch = 'ontouchstart' in document.documentElement;

        //window height
        var wheight = $(window).height(); //get height of the window
        $('.fullheight').css('height', wheight);
        $(window).resize(function () {
                var wheight = $(window).height(); //get height of the window
                $('.fullheight').css('height', wheight);
        }) //on resize

        // CIRCLE1-start
        var circle = new ProgressBar.Circle('.circle1', {
                color: '#1abc9c',
                strokeWidth: 5,
                trailWidth: 5,
                duration: 8300,
                text: {
                        value: '0'
                },
                step: function(state, bar) {
                        bar.setText((bar.value() * 80).toFixed());
                }
        });

        circle.animate(1, function() {
                circle.animate(1);
        })
        // CIRCLE-end
        // CIRCLE2-start
        var circle = new ProgressBar.Circle('.circle2', {
                color: '#1abc9c',
                strokeWidth: 5,
                trailWidth: 5,
                duration: 8500,
                text: {
                        value: '0'
                },
                step: function(state, bar) {
                        bar.setText((bar.value() * 55).toFixed());
                }
        });

        circle.animate(1, function() {
                circle.animate(1);
        })
        // CIRCLE-end
        // CIRCLE3-start
        var circle = new ProgressBar.Circle('.circle3', {
                color: '#1abc9c',
                strokeWidth: 5,
                trailWidth: 5,
                duration: 9000,
                text: {
                        value: '0'
                },
                step: function(state, bar) {
                        bar.setText((bar.value() * 90).toFixed());
                }
        });

        circle.animate(1, function() {
                circle.animate(1);
        })
        // CIRCLE-end
        // CIRCLE4-start
        var circle = new ProgressBar.Circle('.circle4', {
                color: '#1abc9c',
                strokeWidth: 5,
                trailWidth: 5,
                duration: 9500,
                text: {
                        value: '0'
                },
                step: function(state, bar) {
                        bar.setText((bar.value() * 75).toFixed());
                }
        });

        circle.animate(1, function() {
                circle.animate(1);
        })
        // CIRCLE-end
        // CIRCLE5-start
        var circle = new ProgressBar.Circle('.circle5', {
                color: '#1abc9c',
                strokeWidth: 5,
                trailWidth: 5,
                duration: 8200,
                text: {
                        value: '0'
                },
                step: function(state, bar) {
                        bar.setText((bar.value() * 65).toFixed());
                }
        });

        circle.animate(1, function() {
                circle.animate(1);
        })
        // CIRCLE-end
        // CIRCLE6-start
        var circle = new ProgressBar.Circle('.circle6', {
                color: '#1abc9c',
                strokeWidth: 5,
                trailWidth: 5,
                duration: 9600,
                text: {
                        value: '0'
                },
                step: function(state, bar) {
                        bar.setText((bar.value() * 60).toFixed());
                }
        });

        circle.animate(1, function() {
                circle.animate(1);
        })
        // CIRCLE-end
})