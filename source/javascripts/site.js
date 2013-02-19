var bu2 = ({

    resizeSections: function() {
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	
	$('section').width(windowWidth);
	$('section').height(windowHeight);

	// cropping of Welcome background
	var welcomeBackgroundWidth = 3264;
	var welcomeBackgroundHeight = 2448;
	var welcomeBackgroundRatio = welcomeBackgroundWidth / welcomeBackgroundHeight;	
	var is = windowHeight;
	var should = windowWidth / welcomeBackgroundRatio;
	var diff = is - should;
	$('section#welcome img.background').css('margin-top', diff / 2);

	// positionning of About background
	var aboutBackgroundWidth = 1728;
	var aboutBackgroundHeight = 842;
	var is = $('section#about img.background').height();
	$('section#about img.background').css('margin-top', windowHeight - is);
    },

    hideBackground: function(img) {
	$(img).css('opacity', 0);
	$(img).hide();
    },

    hideContent: function() {
	$('#welcome .content .text').hide();
    },

    hideDownArrow: function() {
	$('.down.to_about').hide();
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
	img.delay(3000).animate( { 'opacity': 0.5 },
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
	$('html, body').animate( { scrollTop: $(window).height() },
				  { duration: 1000 } 
				);
    },

    scrollToTop: function() {
	$('html, body').animate( { scrollTop: 0 },
				  { duration: 1000 } 
				);
    },

    scrollToBottom: function() {
	$('html, body').animate( { scrollTop: $(document.body).height() - $(window).height()},
				   { duration: 1000 }
				 );
    },

    enableAutomaticScrolling: function() {
	var self = this;
	$('a.down.to_about').on('click', function() { self.scrollToNextPage(); } );
	$('a.up').on('click', function() { self.scrollToTop(); } );
	$('a.down.to_more').on('click', function() { self.scrollToBottom(); } );
    },

    launchAnimation: function() {
	var self = this;
	this.hidePlayButton();
	var introContentFirst = $('.content .text.first');
	var introContentSecond = $('.content .text.second');
	var introContentThird = $('.content .text.third');

	introContentFirst.fadeIn(1000);
	introContentSecond.delay(1000).fadeIn(1000);
	introContentThird.delay(2000).fadeIn(1000);
	this.unblurBackground($('#welcome img.background'));
	$('.down.to_about').delay(8000).fadeIn();
	
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