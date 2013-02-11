var bu2 = ({

    resizeSections: function() {
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	$('section').width(windowWidth);
	$('section').height(windowHeight);
	$('img.background').height(windowHeight);
    },

    hideBackground: function(img) {
	$(img).css('opacity', 0);
	$(img).hide();
    },

    hideContent: function() {
	$('#welcome .content .text').hide();
    },

    hideDownArrow: function() {
	$('#down').hide();
    },

    showPlayButton: function() {
	var self = this;
	$('#welcome > div.content').append('<input type="button" id="play" value="►" />');
	$('#play').on('click', function() { self.launchAnimation(); } );
    },

    hidePlayButton: function() {
	$('#play').remove();
    },

    unblurBackground: function(img) {
	var value = 25;
	img.css('visible', '');
	img.css('display', '');
	img.delay(2000).animate( { 'opacity': 0.5 },
				 { duration: 1000 }
			       ).animate( { 'opacity': 1 },
					  { duration: 5000 ,
					    step: function(now,fx) {
						img.css('-webkit-filter', 'blur(' + value + 'px)' );
						value = value - 2;
						if (value < 0)
						    value = 0;
					    } }
					).css('-webkit-filter','');
    },

    scrollToNextPage: function() {
	$('html, body').animate( { scrollTop: $(window).height() - $(document.body).scrollTop() },
				  { duration: 1000 } 
				);
    },

    scrollToTop: function() {
	$('html, body').animate( { scrollTop: 0 },
				  { duration: 1000 } 
				);
    },

    enableAutomaticScrolling: function() {
	var self = this
	$('#down').on('click', function() { self.scrollToNextPage(); } );
	$('#up').on('click', function() { self.scrollToTop(); } );
    },

    launchAnimation: function() {
	var self = this;
	this.hidePlayButton();
	var introContentFirst = $('.content .text.first');
	var introContentSecond = $('.content .text.second');

	introContentFirst.fadeIn(1000);
	introContentSecond.delay(1000).fadeIn(1000);
	this.unblurBackground($('#welcome img.background'));
	$('#down').delay(7000).fadeIn();
	
    },

    init: function() {
	var self = this;
	$(document).ready( function() {
	    self.resizeSections();
	    $(window).resize( self.resizeSections );
	    self.hideBackground($('#welcome img.background'));
	    self.hideContent();
	    self.hideDownArrow();
	    self.enableAutomaticScrolling();
	    self.showPlayButton();
	});
	return self;
    }

}).init();