Ext.ns('com.quizzpot.tutorial');   
  
Ext.BLANK_IMAGE_URL = '../ext-3.4.0/resources/images/default/s.gif';   
  
com.quizzpot.tutorial.ArrayGridTutorial = {   
 
	init: function(){   
        //Aquí va el código del tutorial   
		//Arreglo bidimensional de datos
		var myData = [
			['3m Co',71.72,0.02,0.03,'9/1 12:00am'],
			['Alcoa Inc',29.01,0.42,1.47,'9/1 12:00am'],
			['Altria Group Inc',83.81,0.28,0.34,'9/1 12:00am'],
			['American Express Company',52.55,0.01,0.02,'9/1 12:00am'],
			['American International Group, Inc.',64.13,0.31,0.49,'9/1 12:00am'],
			['AT&T Inc.',31.61,-0.48,-1.54,'9/1 12:00am'],
			['Boeing Co.',75.43,0.53,0.71,'9/1 12:00am'],
			['Caterpillar Inc.',67.27,0.92,1.39,'9/1 12:00am']
		];
	
		//creando el repositorio de datos
		var store = new Ext.data.ArrayStore({
			fields: [
			   {name: 'compania'},
			   {name: 'precio', type: 'float'},
			   {name: 'cambio', type: 'float'},
			   {name: 'pctCambio', type: 'float'},
			   {name: 'actualizado', type: 'date', dateFormat: 'n/j h:ia'}
			]
		});
		store.loadData(myData);
		
		//Creando el objeto Ext.grid.ColumnModel
		var myColumnModel = new Ext.grid.ColumnModel([
		    new Ext.grid.RowNumberer(),
		    new Ext.grid.CheckboxSelectionModel(),
			{id:'compania',header: "Compañia", width: 160, sortable: true, dataIndex: 'compania'},
			{header: "Precio", width: 75, sortable: true, dataIndex: 'precio'},
			{header: "Cambio", width: 75, sortable: true, dataIndex: 'cambio'},
			{header: "% de cambio", width: 75, sortable: true, dataIndex: 'pctCambio'},
			{header: "Actualizado", width: 85, sortable: true, renderer: Ext.util.Format.dateRenderer('m/d/Y'), dataIndex: 'actualizado'}
		]);
		
		//creamos una variable para referenciar a nuesto objeto
		var mySelectionModel = new Ext.grid.CheckboxSelectionModel({singleSelect: false});
		
		//Creando el objeto Ext.grid.GridPanel
		var grid = new Ext.grid.GridPanel({
			title:'Listado de Compañias',
			store: store,
			renderTo: 'frame',
			cm: myColumnModel,//referencia al columnModel
			sm: mySelectionModel, //referencia al selectionModel
			stripeRows: true,
			height:250,
			width:600        
		});
		
    }

};   

Ext.onReady(com.quizzpot.tutorial.ArrayGridTutorial.init,com.quizzpot.tutorial.ArrayGridTutorial);