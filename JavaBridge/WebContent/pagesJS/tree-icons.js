Ext.ns("com.quizzpot.tutorial");

com.quizzpot.tutorial.TreeIconsTutorial = {
	
	init: function(){
		
		var root = {
				text:'Root',
				children:[
					{
						text:'CEO',
						iconCls:'ceo-icon',
						children:[
							{
								text:'Assistant',
								iconCls:'assistant-icon',
								leaf:true
							},{
								text:'Software Architect',
								iconCls:'architect-icon',
								leaf:true
							},
							{
								text:'Project Manager',
								iconCls:'pm-icon',
								children:[
									{
										text:'Developers team leader',
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
											},{
												text:'Software developer',
												iconCls:'developer-icon',
												leaf:true
											},{
												text:'Software developer',
												iconCls:'developer-icon',
												leaf:true
											}
										]
									},{
										text:'QA team leader',
										iconCls:'tester-icon',
										children:[
											{
												text:'Tester',
												iconCls:'tester-icon',
												leaf:true
											},
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
											}
										]
									}
								]
							},{
								text:'Sales manager',
								iconCls:'sales-icon',
								leaf:true
							}
						]
					}
				]
			};
		
		//code goes here
		var tree = new Ext.tree.TreePanel({  	
			border: false,
			autoScroll:true,
			rootVisible:false,
			root: root 		
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
					leaf:true
				}
				]
			}
			]
		};
	}
};

Ext.onReady(com.quizzpot.tutorial.TreeIconsTutorial.init,com.quizzpot.tutorial.TreeIconsTutorial);