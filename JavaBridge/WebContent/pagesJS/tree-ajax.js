Ext.ns('com.quizzpot.tutorial');

com.quizzpot.tutorial.AjaxTreeTutorial = {
	
	init: function(){
		//code here
		var loader = new Ext.tree.TreeLoader({		//Paso 1
			url: '../pagesPHP/tree-ajax.php'
		});

		var tree = new Ext.tree.TreePanel({ 		//Paso 2
			border: false,
			autoScroll:true,
			//dataUrl:'tree-ajax.php'  //<--- Así nos crea automáticamente el TreeLoader
			loader:loader //para fines didácticos he creado el TreeLoader a mano
		});

		var root = new Ext.tree.AsyncTreeNode({	//Paso 3
			text: 'User files'
		});
				
		tree.setRootNode(root);			//Paso 4
		
		var win = new Ext.Window({
			title:'Tree panel example',
			layout:'fit',
			width:200,
			height:300,
			items: tree
		});
		win.show();
	}

};

Ext.onReady(com.quizzpot.tutorial.AjaxTreeTutorial.init,com.quizzpot.tutorial.AjaxTreeTutorial);