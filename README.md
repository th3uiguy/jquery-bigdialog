jQuery Big Dialog
====================
By: Spencer Neese   
Version: 1.5   
Requires: jQuery UI 1.7+ and jQuery 1.3.2+   
Demo: [http://jsfiddle.net/th3uiguy/z88L7/](http://jsfiddle.net/th3uiguy/z88L7/)   
Git: [https://github.com/th3uiguy/jquery-bigdialog.git](https://github.com/th3uiguy/jquery-bigdialog.git)   


Description
---------------------
jQuery Big Dialog scales to fit the full size of the screen with widow resize handling built in. It uses 
the [jQuery UI Dialog options](http://jqueryui.com/demos/dialog/#options) plus a few extra.





Example
---------------------
```js
$('<div>Hello World!</div>').bigDialog({
	modal: true,
	scaleIframe: false,
	buttons: {
		"Close": function(){ $(this).dialog('close'); }
	}
});
```




Options
---------------------
Below is a list of the options (in addition to the [jQuery UI Dialog options](http://jqueryui.com/demos/dialog/#options)) that can be passed into `bigDialog` with their default settings.

#### verticalMargin ####
*type: Integer*   
*default: 40*   
Margin, in pixels, to add to the top and bottom of the dialog.
	
#### horizontalMargin ####
*type: Integer*   
*default: 40*   
Margin, in pixels, to add to the left and right of the dialog.

#### scrollLock ####
*type: Boolean*   
*default: true*   
Stop parent window from scrolling when dialog is open.
	
#### scaleIframe ####
*type: Boolean*   
*default: true*   
If the dialog has an iframe as a child, it will resize the iframe when the dialog is resized when this is set to true.




<br /><br />
Copyright 2012 (c), Spencer Neese [https://github.com/th3uiguy/](https://github.com/th3uiguy/)   
Dual licensed under the 
[MIT](https://raw.github.com/th3uiguy/jquery-bigdialog/master/MIT-LICENSE.txt) or 
[GPL](https://raw.github.com/th3uiguy/jquery-bigdialog/master/GPL-LICENSE.txt) Version 2 licenses.   

