Ext.ns('com.quizzpot.tutorial');

com.quizzpot.tutorial.TabPanelTutorial = {
	init: function(){
		//creamos el primer tab
		var home = new Ext.Panel({
			title:'Home',
			iconCls: 'home-icon',
			html: 'This is the home page example'
		});
				
		this.tabs = new Ext.TabPanel({
			border: false,
			activeTab: 0, //<--activar el primer tab
			enableTabScroll:true, //<-- muestra un scroll para los tabs
			items:[home]
		});
		
		var win = new Ext.Window({
			title:'Tabs example',
			width:600,
			height:500,
			bodyStyle: 'background-color:#fff;',
			items: this.tabs //le asignamos el tabpanel
		});
		win.show();
		
		//creamos 10 tabs
		for(var i=0;i<10;i++){
			this.addTab(i+1);
		}
	},
	
	addTab: function(i){
		//here the code to add a new tab
		var tab = new Ext.Panel({
			title: 'Tab '+i,
			closable: true, //<-- este tab se puede cerrar
			iconCls: 'app-icon',
			tbar:[{iconCls:'save-icon'},{iconCls:'spell-icon'},{iconCls:'search-icon'},{iconCls:'send-icon'},{iconCls:'print-icon'}],
			html: 'This is the content for the tab number '+i
		});
		
		this.tabs.add(tab); //con esto le agregamos el tab
	}
};

Ext.onReady(com.quizzpot.tutorial.TabPanelTutorial.init,com.quizzpot.tutorial.TabPanelTutorial);