/**
* Big Dialog
*
* @fileoverview Dialog scales to fit the full size of the screen with widow resize handling built in
* @link https://github.com/th3uiguy/jquery-bigdialog
* @author Spencer Neese
* @version 2.5
* @requires jQuery UI 1.9 or 1.10
* @license jQuery Big Dialog Plugin
*
* Copyright 2011, Spencer Neese
* Dual licensed under the MIT and GPL Version 2 licenses.
* <https://raw.github.com/th3uiguy/jquery-bigdialog/master/GPL-LICENSE.txt> <https://raw.github.com/th3uiguy/jquery-bigdialog/master/MIT-LICENSE.txt>
*/

;(function($) {
	$.widget( "ui.dialog", $.ui.dialog, {
		version: 2.5,

		options: {
			verticalMargin: 40,
			horizontalMargin: 40,
			scrollLock: true, 
			scaleIframe: true
		},

		_create: function(){
			var opts = this.options;
			var self = this;

			if(opts.bigDialog === true){
				var $self = this.element.addClass('bigDialog');
				var vMargin = this.vMargin = isFinite(opts.verticalMargin)? opts.verticalMargin*2 : 0;
				var hMargin = this.hMargin = isFinite(opts.horizontalMargin)? opts.horizontalMargin*2 : 0;
				this.iframe = $self.children('iframe');
				this.vOffset = 0;

				if(this.iframe.size() > 0){
					opts.height = "auto";
					if(opts.scaleIframe === true){
						this.iframe.css('width', '100%');
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

				$(window).bind("resize" + this.eventNamespace, function(event){
					self.uiDialog.width($(window).width() - hMargin);
					self._setHeight();
					self._trigger("resize", event);
				});
			}

			this._super();
		},

		open: function(){
			if(this.options.scrollLock === true){
				$(window.document.body).css('overflow', 'hidden');
			}

			this._super();

			if(this.options.bigDialog === true){
				var $self = this.element;
				this.vOffset = 0;
				this.vOffset += $self.siblings('.ui-dialog-titlebar').outerHeight();
				this.vOffset += $self.siblings('.ui-dialog-buttonpane').outerHeight() || 0;
				this.vOffset += parseInt($self.css('padding-top')) + parseInt($self.css('padding-bottom'));
				this.vOffset += parseInt($self.closest('.ui-dialog').css('padding-top')) + parseInt($self.closest('.ui-dialog').css('padding-bottom'));
				this.vOffset += parseInt($self.siblings('.ui-dialog-buttonpane').css('margin-top') || 0);

				this.uiDialog.width($(window).width() - this.hMargin);
				this._setHeight();
				this._setOption("position", "center");
			}
		},

		close: function(){
			if(this.options.scrollLock === true){
				$(window.document.body).css('overflow', 'auto');
			}

			this._super();
		},

		_setHeight: function(){
			if(this.iframe.size() > 0 && this.options.scaleIframe === true){
				this.iframe.css('height', ($(window).height() - this.vMargin - this.vOffset) + 'px');
			}
			else{
				this.element.height($(window).height() - this.vMargin - this.vOffset);
			}
		},

		destroy: function() {
			$(window).unbind("resize" + this.eventNamespace);
			this._super();
		}
	});

	$.widget( "ui.bigDialog", $.ui.dialog, {
		_create: function(){
			this.options.bigDialog = true;
			this._super();
		}
	});

})(jQuery);
