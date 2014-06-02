Ext.ns("com.quizzpot.tutorial");

com.quizzpot.tutorial.BorderLayoutTutorial = {
	
	init: function(){

		var south = {
				xtype	:	"panel",
				region	:	"south",
				height	:	150,
				html	:	"South region",
				split	:	true	//Step 1
				//margins:	"3 3 3 3"		//step 2
		};
		
		var center = {
				xtype	:	"panel",
				region	:	"center",
				//html	:	"Center region",
				//split	:	true,	//Step 1
				//margins:	"3 3 3 3"
				border	: 	false,
				layout	:	"border",
				items	:	[{			
								xtype	:	"panel",
								region	:	"center"	//Step 2
							},
							south					//Step 3
							]
		};
		
		var west = {
				xtype	:	"panel",
				region	:	"west",		//Step 1
				width	:	150,		//Step 2
				//html	:	"West region",
				split	:	true,	//Step 1
				margins:	"3 3 3 3",
				collapsible:         true,		//Step 1
				title	:	"West region"	//Step 2
		};

		var east = {
				xtype	:	"panel",
				region	:	"east",
				width	:	150,
				html	:	"East region",
				split	:	true,	//Step 1
				margins:	"3 3 3 3"
		};

		var north = {
				xtype	:	"panel",
				region	:	"north",
				height	:	50,
				html	:	"North region",
				split	:	true,	//Step 1
				margins:	{top:3,bottom:3,left:3,right:3}	//Step 1
		};
		
		//code goes here
		var main = new Ext.Panel({			//Step 1
			renderTo	: 	"content",
			layout		:	"border",	// Step 2
			height		:	600,
			//html		:	"Hey everyone!"
			items		: [center, west, east, north]
		});
		
	}

};

Ext.onReady(com.quizzpot.tutorial.BorderLayoutTutorial.init,com.quizzpot.tutorial.BorderLayoutTutorial);