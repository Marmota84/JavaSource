Ext.ns('com.quizzpot.tutorial');

com.quizzpot.tutorial.ComboGridTutorial = {
	init: function(){		
		
		var store = new Ext.data.JsonStore({ // 1
			url: '../pagesPHP/editorgrid-combo.php',
			root: 'data',
			totalProperty: 'total',
			fields: ['genre','title','year','weekend','allTime']
		});
		//store.load(); //2

		var comboYear = {
				xtype: 'combo',
				triggerAction : 'all',
				store: [2009,2008,2007,2006]
		};
		
		this.store = new Ext.data.JsonStore({
			root : 'records',
			fields : ['value','label'],
			url: '../pagesPHP/editorgrid-combo-cmb.php' //diferent controller
		});
		this.store.load();
		
		var comboGenre = new Ext.form.ComboBox({
			triggerAction : 'all',
			displayField : 'label',
			valueField : 'value',
			store : this.store
		});
		
		//una vez que se cargue el store del combo…
		this.store.on('load',function(){
			store.load();//…cargamos el store del grid
		});
		
		var grid = new Ext.grid.EditorGridPanel({ //3
			store: store,
			columns: [
				new Ext.grid.RowNumberer(),
				{header:'Genre', dataIndex:'genre',width:100,sortable: true, editor:comboGenre, 
					renderer:this.genre, scope: this}, //definimos el scope para la función “this.genre”
					//renderer:this.genre.createDelegate(this)},//definimos el scope de la función
				{header:'Title', dataIndex:'title', width:200,sortable: true},
				{header:'Year', dataIndex:'year', width:60,sortable: true, editor:comboYear},
				{header:'Weekend', dataIndex:'weekend', width:55,sortable: true},
				{header:'All Time', dataIndex:'allTime', width:55,sortable: true}
			],
			border: false,
			stripeRows: true
		});
		
		var win = new Ext.Window({
			title: 'USA Weekend Box-Office Summary',
			layout: 'fit',
			width: 520,
			height:300,
			items: grid
		});
		win.show();
		
	},
	
	//esta función es la que se ejecutará antes de
	//que se renderize el contenido de la celda
	genre: function(value){
		var index = this.store.find('value',value);
		if(index>-1){
			var record = this.store.getAt(index);
			return record.get('label');
		}
		return index;
	},
	
	money: function(value){
		return '$'+value+'M';
	}
};

Ext.onReady(com.quizzpot.tutorial.ComboGridTutorial.init,com.quizzpot.tutorial.ComboGridTutorial);