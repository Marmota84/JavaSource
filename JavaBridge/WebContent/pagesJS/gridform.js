Ext.ns('com.quizzpot.tutorial');

com.quizzpot.tutorial.GridFormTutorial = {
	
		init: function(){		
		
		var store = new Ext.data.JsonStore({
			url: '../pagesPHP/gridform.php',
			root: 'data',
			totalProperty: 'total',
			fields: ['title','year','weekend','allTime','img']
		});
		store.load();
		
		var pager = new Ext.PagingToolbar({
			store: store, // <--grid and PagingToolbar using same store
			displayInfo: true,
			displayMsg: '{0} - {1} of {2} Movies',
			emptyMsg: 'No movies to display',
			pageSize: 5
		});
	
		
		var grid = new Ext.grid.GridPanel({
			store: store, // <--grid and PagingToolbar using same store
			columns: [
				new Ext.grid.RowNumberer(),
				{header:'Image', dataIndex:'img',width:100,sortable: true,renderer: this.image},
				{header:'Title', dataIndex:'title', width:200,sortable: true,renderer: this.title},
				{header:'Year', dataIndex:'year', width:50,sortable: true},
				{header:'Weekend', dataIndex:'weekend', width:55,sortable: true,renderer: this.money},
				{header:'All Time', dataIndex:'allTime', width:55,sortable: true,renderer: this.money}
			],
			bbar: pager, // <--adding the pagingtoolbar to the grid
			border: false,
			stripeRows: true
		});
		
		var win = new Ext.Window({
			title: 'USA Weekend Box-Office Summary',
			layout: 'fit',
			width: 520,
			height:600,
			items: grid
		});
		win.show();
		
		//create a listener for the "rowdblclick" event here
		grid.on('rowdblclick',this.editMovie);
	},
	
	image: function(value,metadata,record){
		return '<img src="'+value+'" alt="'+record.get('title')+'" />';
	},
	
	title: function(value, metadata, record){
		metadata.attr = 'style="white-space:normal"';
		return '<p><strong>'+value+'</strong>'+'<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sapien nibh, dictum pellentesque cursus eu, fringilla at elit. Integer volutpat, lorem consequat auctor pellentesque, arcu urna mattis lectus, sed tempus massa leo sed ante.</p>';
	},
	
	money: function(value){
		return '$'+value+'M';
	},
	
	//éste método se ejecuta cuando se da doble clic sobre una fila
	editMovie: function(grid,index,event){
		//aqui vamos a escribir el código donde creamos
		//la ventana y llenamos el formulario.
		//este código va en la función “editMovie”
		var record = grid.getStore().getAt(index);

		var form = new Ext.form.FormPanel({
			width:270,
			bodyStyle:'margin-left:10px;',
			border:false,
			labelWidth: 80, //Con esto hacemos mas pequeñas las etiquetas
			defaults: {
				xtype:'textfield',
				width:150
			},
			items:[
				{fieldLabel:'Title',id:'title'},
				{xtype:'combo', fieldLabel:'Year', id:'year' ,triggerAction:'all', store:[2009,2008,2007,2006]},
				{xtype:'numberfield',fieldLabel:'Weekend',id:'weekend'},
				{xtype:'numberfield',fieldLabel:'All Time',id:'allTime'},
				{fieldLabel:'Image',id:'img'}
			]
		});		
		//Ext.Msg.alert('Test','Title: '+record.get('title')); //alert temporal
		form.getForm().loadRecord(record);
		
		var preview = new Ext.Panel({
			width:91, 
			height:140,
			html: '<img id="preview" />' //imagen vacía
		});	
			
		var win = new Ext.Window({
			layout: 'column', //cambiamos la manera en que se posicionan los paneles
			title: 'Edit Movie',
			width:400,
			height:250,
			modal: true,
			bodyStyle: 'padding:10px;background-color:#fff',
			buttons: [{text:'Save'},{text:'Cancel'}],
			items: [preview, form]
		});		
		win.show();
		
		Ext.get('preview').dom.src = record.get('img');
		
		Ext.getCmp('img').on('blur',function(field){
			Ext.get('preview').dom.src = field.getValue();
		});
		
	}
	
};

Ext.onReady(com.quizzpot.tutorial.GridFormTutorial.init,com.quizzpot.tutorial.GridFormTutorial);