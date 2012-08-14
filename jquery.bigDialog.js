/**
* BigDialog
*
* @fileoverview Dialog scales to fit the full size of the screen with widow resize handling built in
* @link https://github.com/th3uiguy/jquery-bigdialog
* @author Spencer Neese
* @version 1.0
* @requires jQuery UI 1.7+ and jQuery 1.3.2+
*
* @license jQuery BigDialog Plugin v1.0
* https://github.com/th3uiguy/jquery-bigdialog
*
* Copyright 2011, Spencer Neese
* Dual licensed under the MIT or GPL Version 2 licenses.
* <https://github.com/th3uiguy/jquery-bigdialog/master/GPL-LICENSE.txt https://github.com/th3uiguy/jquery-bigdialog/master/MIT-LICENSE.txt>
*/

;(function($) {
	$.fn.bigDialog = function(options) {
		// default options
		var defaults = {
			verticalPadding: 80,
			horizontalPadding: 80,
			scrollLock: true, //stop parent window from scrolling when dialog is open
			scaleIframe: true,
			verticalOffset: 55 //amount to subtract to compensate for the dialogs title and button bars (when dialog has an iframe)
		};
		var opts = $.extend(true, {}, defaults, options);

		return this.each(function() {
			var $self = $(this);
		
			var iframe = $self.children('iframe');
			if(iframe.size() > 0){
				opts.height = "auto";
				if(opts.scaleIframe == true) iframe.css('width', '100%');
				iframe.css('height', ($(window).height() - opts.verticalPadding - opts.verticalOffset) + 'px');
			}
			else{
				opts.height = $(window).height() - opts.verticalPadding;
			}
			opts.width = $(window).width() - opts.horizontalPadding;
			
		
			$(window).resize(function(){
				$self.dialog('option', 'width', $(window).width() - opts.horizontalPadding);
				if(iframe.size() > 0){
					iframe.css('height', ($(window).height() - opts.verticalPadding - opts.verticalOffset) + 'px');
				}
				else{
					$self.dialog('option', 'height', $(window).height() - opts.verticalPadding);
				}
			});
			
			if(opts.scrollLock == true){
				$self.bind("dialogopen.lockscroll", function(){
					$(window.document.body).css('overflow', 'hidden').find('.ui-widget-overlay').css('width', '100%');;
				});
				$self.bind("dialogclose.lockscroll", function(){
					$(window.document.body).css('overflow', 'auto');
				});
			}
			
			$self.dialog(opts);
		});
	};

})(jQuery);
