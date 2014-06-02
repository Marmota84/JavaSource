Ext.ns("com.quizzpot.tutorial");

com.quizzpot.tutorial.TreeIconsTutorial = {
	init: function(){
		//code goes here
		var tree = new Ext.tree.TreePanel({  	
			border: false,
			autoScroll:true,
			rootVisible:false,
			root: this.getData() 		
		});
		var win = new Ext.Window({		
			title:'Icons example',
			layout:'fit',
			width:300,
			height:400,
			items: tree
		});
		win.show();	
	},
	
	getData: function(){
		//here we are going to define the data
		return {
			text:'The root node',
			children:[
			{
				text:'President and CEO',
				iconCls:'ceo-icon', //the icon CSS class
				children:[
				{
					text:'Senior Vice-President',
					iconCls:'vice-icon',//the icon CSS class
					leaf:true
				},{
					text:'Executive Vice-President',
					iconCls:'vice-icon',//the icon CSS class
					children:[
					{
						text:'Chief Financial Officer',
						iconCls:'manager-icon',
						leaf:true
					},
					{
						text:'Human Capital Manager',
						iconCls:'hc-icon',
						leaf:true
					},
					{
						text:'Marketing and Sales Manager',
						iconCls:'manager-icon',
						leaf:true
					},
					{
						text:'General Legal Counsel',
						iconCls:'manager-icon',
						leaf:true
					},
					{
						text:'Chief Technology Officer',
						iconCls:'manager-icon',
						children:[
						{
							text:'Project Manager',
							iconCls:'pm-icon',
							children:[
							{
								text:'Technical Leader',
								iconCls:'developer-icon',
								children:[
								{
									text:'Software developer',
									iconCls:'developer-icon',
									leaf:true
								},
								{
									text:'Software developer',
									iconCls:'developer-icon',
									leaf:true
								},
								{
									text:'Software developer',
									iconCls:'developer-icon',
									leaf:true
								}
								]
							},{
								text:'QA Leader',
								iconCls:'tester-icon',
								children:[
								{
									text:'Tester',
									iconCls:'tester-icon',
									leaf:true
								},{
									text:'Tester',
									iconCls:'tester-icon',
									leaf:true
								},{
									text:'Tester',
									iconCls:'tester-icon',
									leaf:true
								},{
									text:'Tester',
									iconCls:'tester-icon',
									leaf:true
								},{
									text:'Tester',
									iconCls:'tester-icon',
									leaf:true
								}
								]
							}
							]
						}
						]
					}
					]
				}
				]
			}
			]
		}
	}
}

Ext.onReady(com.quizzpot.tutorial.TreeIconsTutorial.init,com.quizzpot.tutorial.TreeIconsTutorial);