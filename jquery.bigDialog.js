/**
* Big Dialog
*
* @fileoverview Dialog scales to fit the full size of the screen with widow resize handling built in
* @link https://github.com/th3uiguy/jquery-bigdialog
* @author Spencer Neese
* @version 1.6
* @requires jQuery UI 1.7+ and jQuery 1.3.2+
* @license jQuery Big Dialog Plugin
*
* Copyright 2011, Spencer Neese
* Dual licensed under the MIT or GPL Version 2 licenses.
* <https://raw.github.com/th3uiguy/jquery-bigdialog/master/GPL-LICENSE.txt> <https://raw.github.com/th3uiguy/jquery-bigdialog/master/MIT-LICENSE.txt>
*/

;(function($) {
	$.widget( "ui.bigDialog", {
		options: {
			verticalMargin: 40,
			horizontalMargin: 40,
			scrollLock: true, 
			scaleIframe: true
		},

		_create: function(){
			var opts = this.options;
			var $self = $(this.element), vOffset;
			var vMargin = isFinite(opts.verticalMargin)? opts.verticalMargin*2 : 0;
			var hMargin = isFinite(opts.horizontalMargin)? opts.horizontalMargin*2 : 0;
			var iframe = $self.children('iframe');

			if(iframe.size() > 0){
				opts.height = "auto";
				if(opts.scaleIframe === true){
					iframe.css('width', '100%');
					opts.width = $(window).width() - hMargin;
				}
				else{
					opts.width = "auto";
				}
			}
			else{
				opts.height = $(window).height() - vMargin;
				opts.width = $(window).width() - hMargin;
			}

			$(window).resize(function(){
				$self.dialog('option', 'width', $(window).width() - hMargin);
				if(iframe.size() > 0){
					iframe.css('height', ($(window).height() - vMargin - vOffset) + 'px');
				}
				else{
					$self.dialog('option', 'height', $(window).height() - vMargin);
				}
			});

			$self.bind("dialogopen.setHeight", function(){
				if(iframe.size() > 0 && opts.scaleIframe === true){
					vOffset = 0;
					vOffset += $self.siblings('.ui-dialog-titlebar').outerHeight();
					vOffset += $self.siblings('.ui-dialog-buttonpane').outerHeight() || 0;
					vOffset += parseInt($self.css('padding-top')) + parseInt($self.css('padding-bottom'));
					vOffset += parseInt($self.closest('.ui-dialog').css('padding-top')) + parseInt($self.closest('.ui-dialog').css('padding-bottom'));
					vOffset += parseInt($self.siblings('.ui-dialog-buttonpane').css('margin-top') || 0);
					iframe.css('height', ($(window).height() - vMargin - vOffset) + 'px');
					$self.dialog("option", "position", "center");
				}
			});
			
			if(opts.scrollLock === true){
				$self.bind("dialogopen.lockscroll", function(){
					$(window.document.body).css('overflow', 'hidden').find('.ui-widget-overlay').css('width', '100%');;
				});
				$self.bind("dialogclose.lockscroll", function(){
					$(window.document.body).css('overflow', 'auto');
				});
			}
			
			$self.dialog(opts);
		},

		destroy: function() {
			$.Widget.prototype.destroy.call( this );
		}
	});
})(jQuery);
