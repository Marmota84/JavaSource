Ext.ns('com.quizzpot.tutorial');

com.quizzpot.tutorial.TreeTutorial = {
	
	init: function(){
		
		var tree = new Ext.tree.TreePanel({  	//step 1
			border: false,
			autoScroll:true,
			root: this.getData() 		//step 2
		});
		
		var win = new Ext.Window({		//step 3
			title:'Tree panel example',
			layout:'fit',
			width:200,
			height:300,
			items: tree
		});
		win.show();				//step 4
		
	},
	
	//returns the data for the tree
	getData: function(){
		var root = {
				text:'Root',
				expanded: true, // <--- aparece expandido el root
				children:[
					{
						text:'Documents',
						children:[{text:'file.doc',leaf:true}]
					},{
						text:'Pictures',
						children:[{text:'friends.jpg',leaf:true},{text:'working.jpg',leaf:true}]
					},{
						text:'Presentation.ppt',
						leaf:true
					}
				]
			};

		return root;
	}
	
};

Ext.onReady(com.quizzpot.tutorial.TreeTutorial.init,com.quizzpot.tutorial.TreeTutorial);