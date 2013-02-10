var image_width = 3264;
var image_height = 2448;
var image_ratio = image_width / image_height;

var window_width = $(window).width();
var window_height = $(window).height();
var window_ratio = window_width / window_height;

$('section').height(window_height);
