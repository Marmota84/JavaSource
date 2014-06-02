//the namespace for this tutorial
Ext.ns('com.quizzpot.tutorial');

//the blank image
Ext.BLANK_IMAGE_URL = 'ext-3.4.0/resources/images/default/s.gif';

com.quizzpot.tutorial.Window = {
	init: function(){
		/*
		var win = new Ext.Window({
			title: 'First window!', //the title of the window
			width: 300,
			height:250,
			minimizable: true, //show the minimize button
			maximizable: true, //show the maxmize button
			modal: true, //set the Window to modal
			x: 100, //specify the left value of the window
			y: 100 //specify the top value of the window
		});
		//displaying the window to the user
		win.show();
		*/
		/*
		//fire when the user clicks the minimize button
		win.on('minimize',function(w){
		   console.debug('minimizando...');
		   w.collapse(); //collapse the window
		});
		 */			
		
		var win = new Ext.Window({
		   title: 'First Window',
		   width: 500,
		   height:350,
		   minimizable: true,
		   maximizable: true,
		   html: '<iframe src="http://www.quizzpot.com" style="width:100%;height:100%;border:none;"></iframe>'
		});   
		
		var win2 = new Ext.Window({
			title: 'First window!',
			width: 500,
			height:350,
			minimizable: true,
			maximizable: true,
			html: '<iframe src="http://www.google.com" style="width:100%;height:100%;border:none;"></iframe>'
		});
		
		win.show();
		win2.show();
	}
};

Ext.onReady(com.quizzpot.tutorial.Window.init,com.quizzpot.tutorial.Window);