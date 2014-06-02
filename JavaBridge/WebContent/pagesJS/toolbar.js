//the namespace for this tutorial
Ext.ns('com.quizzpot.tutorial');

//the blank image
Ext.BLANK_IMAGE_URL = 'ext-3.4.0/resources/images/default/s.gif';

com.quizzpot.tutorial.ToolbarTutorial = {
	init: function(){

		//creates the tool bar
		var toolbar = new Ext.Toolbar({
			defaults:{
				iconAlign: 'top' // <--- we change the icon position
			},
			items: [
				{	text:'Back',iconCls:'back',
					split: true, // <--- split the button
					menu:{ // <--- add a menu to the button
						items: [
							{text:'Yahoo!'}, // <--- This is an item for the menu
							{text:'Quizzpot'},
							{text:'Site point'}
						]
					}
				}, //<--- adding an icon to the button
				{text:'Forward',iconCls:'forward'},
				{text:'Reload',iconCls:'reload'},
				{text:'Stop',iconCls:'stop'},
				{
					text:'Home', iconCls:'home', 
					handler: function(){
								this.gotoUrl('http://www.google.com');
							}.createDelegate(this)
				},
				'-', // <--- add a vertical separator bar between toolbar items 
				{	xtype: 'buttongroup', // <--- grouping the buttons
					items:[ 
						{xtype:'textfield',id:'url',width:250,enableKeyEvents:true}, //<--- the textfield						
						{iconCls:'goto',handler: this.search.createDelegate(this)}
					]
				},	
				//new Ext.Toolbar.Fill(), // <--- we fill the empty space
				'->',
				{text:'Bookmarks',iconCls:'book'}// now the fallowing buttons are in the right side
			]
		});
				
		this.win = new Ext.Window({
			title: 'Quizzpot Explorer',
			width: 600,
			height:450,
			tbar: toolbar, // <--- Toolbar
			maximizable: true,
			maskDisabled: true,
			bodyStyle: 'background-color:#fff',
			html: '<iframe id="container" src="http://www.google.com" style="width:100%;height:100%;border:none"></iframe>'
		});
				
		this.win.show();
	},

	search: function(btn,event){
		this.gotoUrl(Ext.getCmp('url').getValue()); //<--- se toma lo que el usuario puso en la caja de texto
	},
	
	//esta función cambia la url del iFrame
	gotoUrl: function(url){
		if(!Ext.isEmpty(url)){
			if(!/^http:\/\//.test(url)){
				url = 'http://'+url;
			}
			
			var iframe = Ext.get('container');
			iframe.dom.src = url;
			Ext.getCmp('url').setValue(url);
			this.win.setTitle(url +' - Quizzpot Explorer');
		}
	}
	
};

Ext.onReady(com.quizzpot.tutorial.ToolbarTutorial.init,com.quizzpot.tutorial.ToolbarTutorial);