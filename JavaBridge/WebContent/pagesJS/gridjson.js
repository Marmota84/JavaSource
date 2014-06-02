Ext.ns('com.quizzpot.tutorial');

com.quizzpot.tutorial.GridJsonTutorial = {
	
	init: function(){		
		//code goes here
		/*
		var Record = Ext.data.Record.create([
		                                 	{name: 'city'},
		                                 	{name: 'visits', type:'float'},
		                                 	{name: 'pageVisits', type:'float'},
		                                 	{name: 'averageTime'}
		                                 ]);
		
		var reader = new Ext.data.JsonReader({
			   totalRecords: "total", 
			   root: "data"               
			}, Record);
		
		var store = new Ext.data.Store({
			url: '../pagesPHP/gridjson.php',
			reader: reader
		});
		*/
		var store = new Ext.data.JsonStore({
			url: '../pagesPHP/gridjson.php',
			root: 'data',
			fields: ['city',{name:'visits',type:'float'},{name:'pageVisits',type:'float'},'averageTime']
		});

		store.load();
		
		var grid = new Ext.grid.GridPanel({
			store: store, // <--- le asignamos el store con la información a utilizar
			columns: [
				new Ext.grid.RowNumberer(),
				{header:'City', dataIndex:'city',sortable: true},
				{header:'Visits', dataIndex:'visits',sortable: true},
				{header:'Page/Visits', dataIndex:'pageVisits',sortable: true},
				{header:'Average Time', dataIndex:'averageTime', width:150,sortable: true}
			],
			border: false,
			stripeRows: true
		});
		
		var win = new Ext.Window({
			title: 'Grid example',
			layout: 'fit',
			width: 510,
			height:350,
			items: grid
		});

		win.show();
	}

};

Ext.onReady(com.quizzpot.tutorial.GridJsonTutorial.init,com.quizzpot.tutorial.GridJsonTutorial);