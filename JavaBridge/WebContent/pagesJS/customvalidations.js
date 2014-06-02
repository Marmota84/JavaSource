Ext.ns('com.quizzpot.tutorial');

Ext.BLANK_IMAGE_URL = '../ext-3.0.0/resources/images/default/s.gif';

//we are going to create the vtypes here

Ext.apply(Ext.form.VTypes,{

	//aqui vamos a definer las validaciones necesarias
	adult: function(val, field){
		try{
			var birth = field.getValue();
			var now = new Date();
			// The number of milliseconds in one year
			var ONE_YEAR = 1000 * 60 * 60 * 24 * 365;
		    	// Convert both dates to milliseconds
		    	var date1_ms = birth.getTime();
		    	var date2_ms = now.getTime();
		    	// Calculate the difference in milliseconds
		    	var difference_ms = Math.abs(date1_ms - date2_ms);
		    	// Convert back to years
		    	var years = difference_ms/ONE_YEAR;
			return years >= 18;
		}catch(e){
			return false;
		}
	},
	adultText: 'You are underage!', //mensaje de error
	adultMask: /[\d\/]/,  //regexp para filtrar los caracteres permitidos

		phone: function(value,field){
			return value.replace(/[ \-\(\)]/g,'').length == 10;
		},
		phoneText: 'Wrong phone number, please make sure it contains 10 digits',
		phoneMask: /[ \d\-\(\)]/,
		
		creditcard: function(value,field){
			return value.replace(/[ \-]/g,'').length == 16;
		},
		creditcardText: 'Wrong credit card number',
		creditcardMask: /[ \d\-]/
		
});

com.quizzpot.tutorial.SubmitFormTutorial = {
	init: function(){
		
		//here we are going to initialize the Quick Tips
		Ext.QuickTips.init();
		Ext.form.Field.prototype.msgTarget = 'side';
		
		this.form = new Ext.form.FormPanel({
			border:false,
			labelWidth: 90,
			defaults: {
				xtype:'textfield',
				width: 150
			},
			items:[
				{fieldLabel:'Name',name:'name',allowBlank:false,maxLength:20},
				{fieldLabel:'Lastname',name:'lastname',allowBlank:false},
				{xtype:'datefield',fieldLabel:'Date of birth',name:'birth',allowBlank:false,
					format:'d/m/Y',vtype:'adult'},				
				{fieldLabel:'Phone number',name:'phone',vtype:'phone'},
				{fieldLabel:'Credit card',name:'credit',vtype:'creditcard'},
				{xtype:'textarea',fieldLabel:'Comment',name:'comment'},
				{xtype:'checkbox',labelSeparator:'',boxLabel:'Agree',name:'agree'}
			]
		});
		
		this.win = new Ext.Window({
			id:'mywin',
			title: 'Customized validations',
			bodyStyle: 'padding:10px;background-color:#fff;',
			width:300,
			height:350,
			items:[this.form],
			buttons: [{text:'Save',handler:this.sendData,scope:this},{text:'Cancel',handler:this.cancel,scope:this}]
		});
		
		this.win.show();
		
	},
	
	//we are not going to sena anything, just validate the input data
	sendData: function(){
		if(!this.form.getForm().isValid()){
			Ext.Msg.alert('Invalid','There are invalid fields, please make sure everything is correct.');
		}
	},

	//reset the form
	cancel: function(){
		this.form.getForm().reset();
	}
};

Ext.onReady(com.quizzpot.tutorial.SubmitFormTutorial.init,com.quizzpot.tutorial.SubmitFormTutorial);
