Ext.ns('com.quizzpot.tutorial');

com.quizzpot.tutorial.GridXmlTutorial = {
	
	init: function(){		
		//code goes here
		
		var Person = Ext.data.Record.create([
	              	{name: 'name'},
	               	{name: 'position'},
	               	{name: 'age', type:'float'},
	               	{name: 'company'}
	    ]);
		
		var reader = new Ext.data.XmlReader({
			record: "person"               
		}, Person); 
		
		var store = new Ext.data.Store({
			url: '../pagesPHP/xml.php',
			reader: reader
		});
				
		store.load();
		
		var grid = new Ext.grid.GridPanel({
			store: store, //le asignamos la fuente de datos
			columns: [ //creamos las columnas
				new Ext.grid.RowNumberer(), //numeramos las filas
				{header:'Name', dataIndex:'name',sortable: true},
				{header:'Company', dataIndex:'company',sortable: true},
				{header:'Position', dataIndex:'position',width:230,sortable: true},
				{header:'Age', dataIndex:'age', width:40,sortable: true}
			],
			border: false, //le quitamos el borde
			stripeRows: true //le asignamos rayas a las filas
		});
		
		var win = new Ext.Window({
			title: 'Grid example',
			layout: 'fit', // <--- 
			width: 510,
			height:350,
			items: grid
		});

		win.show();
		
	}
};

Ext.onReady(com.quizzpot.tutorial.GridXmlTutorial.init,com.quizzpot.tutorial.GridXmlTutorial);