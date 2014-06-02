Ext.ns("com.quizzpot.tutorial");

com.quizzpot.tutorial.IntegracionTutorial = {
	
	init: function(){
			//el código irá aquí
		
		var tree= new Ext.tree.TreePanel({
			border		: false,
			autoScroll	: true,
			root		: this.getData()
		});
		
		//cracion de el primer tab (home)
		var home= new Ext.Panel({	//step 1
			title	: "Home",
			html	: "home page" 
		});

		//creamos el TabPanel para almacenar los tabs
		this.tabs = new Ext.TabPanel({ 	//step 2
			border		: false,
			activeTab	: 0,
			enableTabScroll	:  true, //hacemos que sean recorridas
			items		:  [home]
		 });
		
		tree.on('click',function(node){
			this.addTab(node);// esta función será creada a continuación 
		},this);
		
			var center = {
				xtype	:	"panel",
				region	:	"center",
				layout	:	"fit",
				border	:	false,
				margins	:	{bottom:3,right:3},
				items	:	[{
					xtype	:	"panel",
					items:[this.tabs]	//Asignamos el tabpanel a la región central
				}]
			};

			var west = {
				xtype	:	"panel",
				region	:	"west",
				width	:	150,
				split	:	true,
				collapsible: true,
				title	:	"West region",
				margins	:	"0 0 3 3",
				items	:   [tree] //asignames el tree en la parte oeste... 
			};

			var north = {
				xtype	:	"panel",
				region	:	"north",
				height	:	50,
				html	:	"North region",
				margins	:	{top:3,bottom:3,left:3,right:3}
			};
					
			var main = new Ext.Panel({
				renderTo	: 	"content",	
				layout		:	"border",
				height		:	600,
				items		:	[center,west,north]
			});
			

			
	},

	getData	: function(){
		var root = {
			text:'Informacion',
			expanded: true,
			children:[
				{
					text:'Usuarios',
					children:[{text:'Felipe',leaf:true},
							  {text:'Omar',leaf:true}]
				},{
					text:'Departamentos',
					children:[{text:'Compras',leaf:true},
							  {text:'Ventas',leaf:true}]
				}
			]
		}
		return root;
	},
	
	addTab	: function(node){  
		var tab = this.tabs.findById("id-"+node.id); // step 1
		
		if(!tab){     //step 2 
			tab = new Ext.Panel({
				id		:	 "id-"+node.id,
				closable:	true,  //para que se pueda cerrar el tab
				title	: 	node.attributes.text, //step 3
				html	: 	'This is the main content'      
			});
			this.tabs.add(tab); //step 4
			this.tabs.doLayout();
		}
			
		this.tabs.activate(tab); //step 5 
	}

};

Ext.onReady(com.quizzpot.tutorial.IntegracionTutorial.init,com.quizzpot.tutorial.IntegracionTutorial);