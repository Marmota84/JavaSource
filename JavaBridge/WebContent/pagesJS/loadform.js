Ext.ns('com.quizzpot.tutorial');

Ext.BLANK_IMAGE_URL = '../ext-3.4.0/resources/images/default/s.gif';

com.quizzpot.tutorial.LoadFormTutorial = {
	
	init: function(){
		Ext.Ajax.request({
			url: '../pagesPHP/loadform.php',
			params: {all:true}, //solicitamos todos los registros
			method: 'GET', //utilizando el método GET
			scope: this,
			success: this.createTopTen //e indicamos la función que procesará la respuesta
		});
	},
	
	createTopTen: function(response){
		
		var info = Ext.decode(response.responseText); //decodificamos el texto que recibimos
		Ext.each(info,function(movie){ //iteramos la información recibida
			Ext.DomHelper.append('content',{ //y creamos una imagen para cada elemento
				tag:'img',
				src:movie.img, 
				alt:movie.title, 
				title:movie.title,
				cls: 'movie'
			});
		},this);
		
		var items = Ext.DomQuery.select('div[id=content] > img');
		Ext.each(items,function(el,i){
			el = Ext.get(el);
			el.on('click',function(){
				this.showDetail(i); //esta función será disparada cuando se dé clic a una imagen
			},this);
		},this);
	},
					
	showDetail: function(id){
		
		var form = new Ext.form.FormPanel({
			url: '../pagesPHP/loadform.php', //la URL de donde vamos a llenar el formulario
			border:false,
			labelWidth: 80,
			defaults: {
				xtype:'textfield',
				width: 150
			},
			items:[
				{fieldLabel:'Title',name:'title'},
				{xtype:'combo',fieldLabel:'Year',name:'year',triggerAction:'all',store:[2009,2008,2007,2006]},
				{xtype:'numberfield',fieldLabel:'Revenues',name:'revenues'},
				{xtype:'textarea',fieldLabel:'Comment',name:'comment'},
				{xtype:'checkbox',fieldLabel:'',labelSeparator:'',boxLabel:'Available',name:'available'}
			]
		});
		
		var win = new Ext.Window({
			title: 'Loading data into a form',
			bodyStyle: 'padding:10px;background-color:#fff;',
			width:300,
			height:270,
			items:[form],
			buttons: [{text:'Save'},{text:'Cancel'}]
		});

		form.getForm().load({params:{id:id}});
		
		win.show();
	}	
};

Ext.onReady(com.quizzpot.tutorial.LoadFormTutorial.init,com.quizzpot.tutorial.LoadFormTutorial);
