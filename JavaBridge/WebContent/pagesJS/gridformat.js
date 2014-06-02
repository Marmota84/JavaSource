Ext.ns('com.quizzpot.tutorial');

Ext.BLANK_IMAGE_URL = '../ext-3.4.0/resources/images/default/s.gif';

com.quizzpot.tutorial.GridFormatTutorial = {
	
	init: function(){		
		//aqui vamos a escribir el código inicial
		var store = new Ext.data.JsonStore({
			url: '../pagesPHP/gridformat.php',
			root: 'data',
			totalProperty: 'total',
			fields: ['breed','origin',{name:'agressive',type:'boolean'},'image','description'],
			paramNames: {
				start : 'offset',  // The parameter name which specifies the start row
				limit : 'size',  // The parameter name which specifies number of rows to return
				sort : 'sort',    // The parameter name which specifies the column to sort on
				dir : 'dir'       // The parameter name which specifies the sort direction
			}
		});
		store.load();
		
		var pager = new Ext.PagingToolbar({
			store: store, // <--grid and PagingToolbar using same store
			displayInfo: true,
			displayMsg: '{0} - {1} of {2} Dog breeds',
			emptyMsg: 'No dog breeds to display',
			pageSize: 5
		});
		
		var grid = new Ext.grid.GridPanel({
			store: store, //grid and PagingToolbar using same store
			columns: [
				new Ext.grid.RowNumberer(),				
				{header:'Picture', dataIndex:'image',width:150,sortable: true, renderer: this.showImage}, // aqui definimos el “interceptor”				
				{header:'Breed name', dataIndex:'breed',width:140,sortable: true,renderer: this.showBreed},
				{header:'Description', dataIndex:'description',width:180,renderer: this.showDescription},
				{header:'Agressive', dataIndex:'agressive', width:60,sortable: true, renderer:this.showAgressive}
			],
			bbar: pager, // adding the pagingtoolbar to the grid
			border: false,
			stripeRows: true
		});

		var win = new Ext.Window({
			title: 'Grid example',
			layout: 'fit',
			width: 590,
			height:450,
			items: grid
		});

		win.show();
		
	},
	
	//el interceptor
	showImage: function(value, metaData, record, rowIndex, colIndex, store){
		//retorna el contenido de la celda
		//return 'recordgetbreed';
		return '<img src="' + value + '" />';
	},

	showBreed: function(value, metaData, record, rowIndex, colIndex, store){
		metaData.attr = 'style="white-space:normal"';
		return ''+value+' - '+record.get('origin');
	},

	showDescription: function(value,metaData){
		metaData.attr = 'style="white-space:normal"';
		return value;
	},
	
	showAgressive: function(value,metaData){
		metaData.attr = value?'style="color:#f00"':'style="color:#0a0"';
		return value?'Yes':'No';
	}
	
};

Ext.onReady(com.quizzpot.tutorial.GridFormatTutorial.init,com.quizzpot.tutorial.GridFormatTutorial);