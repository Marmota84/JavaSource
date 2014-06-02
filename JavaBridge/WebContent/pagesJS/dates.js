Ext.ns('com.quizzpot.tutorial');

com.quizzpot.tutorial.DatesTutorial = {
	
	init: function(){		
		//el código va aqui
		var store = new Ext.data.JsonStore({
			url: '../pagesPHP/dates.php',
			root: 'data',
			totalProperty: 'total',
			fields: [
				'name',
				{name:'from', type:'date', dateFormat:'m-d-Y'},
				{name:'to', type:'date', dateFormat:'j-M-Y'},
				{name:'time', type:'date', dateFormat:'h:i:s a'},
				{name:'iso', type:'date', dateFormat:'c'},
				{name:'unix', type:'date', dateFormat:'U'}
			]
		});
		store.load();
	
		var grid = new Ext.grid.GridPanel({
			store: store, 
			columns: [
				new Ext.grid.RowNumberer(),
				{header:'Name', dataIndex:'name',sortable: true},	
				{header:'From', dataIndex:'from',sortable: true, renderer: Ext.util.Format.dateRenderer('M/Y')},
				{header:'To', dataIndex:'to',sortable: true, renderer: Ext.util.Format.dateRenderer('M/Y')},
				{header:'Time', dataIndex:'time',sortable: true, renderer: Ext.util.Format.dateRenderer('h:i:s a')},
				{header:'From ISO date', dataIndex:'iso',sortable: true, renderer: Ext.util.Format.dateRenderer('D d M')},
				{header:'From Unix Time', dataIndex:'unix',sortable: true, renderer: Ext.util.Format.dateRenderer('M \'y')}
			],
			viewConfig: {
				forceFit: true
			},
			border: false,
			stripeRows: true
		});

		var win = new Ext.Window({
			title: 'Grid example',
			layout: 'fit',
			width: 550,
			height:350,
			items: grid
		});

		win.show();
		
	}

};

Ext.onReady(com.quizzpot.tutorial.DatesTutorial.init,com.quizzpot.tutorial.DatesTutorial);