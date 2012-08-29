jQuery Big Dialog
====================
By: Spencer Neese   
Version: 1.0   
Requires: jQuery UI 1.7+ and jQuery 1.3.2+   
Demo: [http://jsfiddle.net/th3uiguy/z88L7/](http://jsfiddle.net/th3uiguy/z88L7/)

jQuery Big Dialog scales to fit the full size of the screen with widow resize handling built in. It uses the jQuery UI Dialog options plus a few extra:

```js
	verticalPadding: 80, //padding on top and bottom of dialog
	horizontalPadding: 80, //padding on left and right (40 + 40 = 80 total)
	scrollLock: true, //stop parent window from scrolling when dialog is open
	scaleIframe: true, //if the dialog has an iframe as a child it will the iframe
	verticalOffset: 55 //amount to subtract to compensate for the dialogs title and button bars (when dialog has an iframe)
```

Copyright 2012, Spencer Neese   
Dual licensed under the 
[MIT](https://raw.github.com/th3uiguy/jquery-bigdialog/master/MIT-LICENSE.txt) or 
[GPL](https://raw.github.com/th3uiguy/jquery-bigdialog/master/GPL-LICENSE.txt) Version 2 licenses.   

