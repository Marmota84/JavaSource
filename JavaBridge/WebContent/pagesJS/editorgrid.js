Ext.ns('com.quizzpot.tutorial');

com.quizzpot.tutorial.EditorGridTutorial = {

	init: function(){		
		
		var store = new Ext.data.JsonStore({
			url: '../pagesPHP/editorgrid.php',
			root: 'data',
			fields: ['city',{name:'visits',type:'float'},{name:'pageVisits',type:'float'},{name:'averageTime',type:'date',dateFormat: 'H:i:s'},
			{name:'time',type:'date', dateFormat: 'U'}]
		});
		
		//Solicitar la información al servidor
		store.load();
		
		//creamos el texfield antes de crear el grid
		var textField = new Ext.form.TextField();
		
		var numberField = new Ext.form.NumberField({allowBlank:false});
		
		var grid = new Ext.grid.EditorGridPanel({
			store: store,
			columns: [
				new Ext.grid.RowNumberer(),
				{header:'City', dataIndex:'city',sortable: true,editor:textField},
				{header:'Visits', dataIndex:'visits',sortable: true, editor:numberField},
				{header:'Page/Visits', dataIndex:'pageVisits',sortable: true, editor:numberField},
				{header:'Average Time', dataIndex:'time', width:150,sortable: true,renderer: Ext.util.Format.dateRenderer('H:i:s')}
			],
			border: false,
			stripeRows: true
		});
		
		var win = new Ext.Window({
			title: 'Editor Grid example',
			layout: 'fit',
			width: 510,
			height:350,
			items: grid  //Le asignamos el grid
		});

		win.show(); //mostramos la ventana y su contenido
		
	}

};

Ext.onReady(com.quizzpot.tutorial.EditorGridTutorial.init,com.quizzpot.tutorial.EditorGridTutorial);