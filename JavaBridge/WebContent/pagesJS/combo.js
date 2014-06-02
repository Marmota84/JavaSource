Ext.ns('com.quizzpot.tutorial');

Ext.BLANK_IMAGE_URL = '../ext-3.4.0/resources/images/default/s.gif';

com.quizzpot.tutorial. ComboBoxTutorial= {
	
	init: function(){
		
		var data=['Code Igniter','Cake Php','Symfony','Zend'];

		var comboLocal =new Ext.form.ComboBox({
			fieldLabel:'Frameworks PHP',
			name:'cmb-data',
			forceSelection:true,
			store:data,
			emptyText:'Select a framework...',
			triggerAction: 'all',
			//hideTrigger:true,
			//editable:false,
			//minChars:3					
		});
		
		//se crea el store
		var store= new Ext.data.JsonStore({
				url:'../pagesPHP/combo.php',
				root: 'data',					
				totalProperty: 'num',
				fields: [
					{name:'name', type: 'string'},
					{name:'desc', type: 'string'},
					{name:'logo', type: 'string'},
				]
		});

		//se crea el combo asignandole el store
		var comboRemote=new Ext.form.ComboBox({
			fieldLabel:'Data Base',
			name:'cmb-DBs',
			forceSelection: true,
			store: store, //asignandole el store
			emptyText:'pick one DB...',
			triggerAction: 'all',			
			editable:false,
			displayField:'name',
		    valueField: 'name'	
		});
		
		var comboRemoteTpl = new Ext.form.ComboBox({
			fieldLabel:'Data Base',
			name:'cmb-Tpl',
			forceSelection:true,
			store:store,
			emptyText:'pick one DB...',
			triggerAction: 'all',
			mode:'remote',
			itemSelector: 'div.search-item',
			tpl: new Ext.XTemplate('<tpl for="."><div class="search-item" style="background-image:url({logo})"><div class="name">{name}</div><div class="desc">{desc}</div></div></tpl>'),						
			displayField:'name'
		});
		
		var timeField=new Ext.form.TimeField({						
	       	fieldLabel: 'Time Field',
	       minValue: '4:00',
	       maxValue: '23:59',
	       increment: 15,
	       format:'H:i',
	       name:'cb-time'						
		});
		
		var win=new Ext.Window({
			title: 'ComboBox example',
			bodyStyle:'padding: 10px',		//alejamos los componentes de los bordes
			width:400,
			height:360,			
			items: [comboLocal,comboRemote,comboRemoteTpl, timeField],//se agrega el combo remoto
			layout:'form'					//tipo de organización de los componentes
		});
		
		win.show();
		
    }

};

Ext.onReady(com.quizzpot.tutorial. ComboBoxTutorial.init,com.quizzpot.tutorial. ComboBoxTutorial);
