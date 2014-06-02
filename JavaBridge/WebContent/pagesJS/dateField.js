Ext.ns('com.quizzpot.tutorial');

Ext.BLANK_IMAGE_URL = '../ext-3.4.0/resources/images/default/s.gif';

com.quizzpot.tutorial.DateFieldTutorial = {

	init: function(){
		
		 var dateField = new Ext.form.DateField({
				fieldLabel: 'Date',
				emptyText:'Insert a date...',
				format:'Y-m-d',
				width: 150
			});
		
		 var dateFieldR=new Ext.form.DateField({
				fieldLabel: 'Date from today',
				emptyText:'Insert a date...',
				width: 150,
				format:'Y-m-d',
				minValue: new Date(), //<-- min date is today
				maxValue:'2014-08-28', // <-- max date
				value:new Date() // <-- a default value
			});
		 
		var win=new Ext.Window({
			title: 'DateField demo',
			bodyStyle:'padding: 10px',//alejamos los componentes de los bordes
			emptyText:'Insert a date...',
			width:400,
			height:360,		
			items: [dateField, dateFieldR], //<-- le asignamos el datefield
			layout:'form'		//tipo de organizacion de los componentes
		});
		
		win.show();	
    }

};

Ext.onReady(com.quizzpot.tutorial.DateFieldTutorial.init,com.quizzpot.tutorial.DateFieldTutorial);