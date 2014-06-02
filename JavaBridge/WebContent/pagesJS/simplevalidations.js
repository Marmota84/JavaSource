Ext.ns('com.quizzpot.tutorial');

Ext.BLANK_IMAGE_URL = '../ext-3.4.0/resources/images/default/s.gif';

com.quizzpot.tutorial.SubmitFormTutorial = {
	init: function(){
		Ext.QuickTips.init();
		
		this.form = new Ext.form.FormPanel({
			url: '../pagesPHP/simplevalidations.php',
			border:false,
			labelWidth: 80,
			defaults: {
				xtype:'textfield',
				width: 150
			},
			items:[
				{fieldLabel:'Name',name:'name',allowBlank:false,maxLength:20,vtype:'alpha'},
				{xtype:'datefield',fieldLabel:'Start',name:'start',allowBlank:false},
				{xtype:'combo',fieldLabel:'Year',name:'year',triggerAction:'all',store:[2009,2008,2007,2006],readOnly:true},
				{fieldLabel:'Email',name:'email',vtype:'email'},
				{fieldLabel:'Web site',name:'website',vtype:'url'},
				{xtype:'textarea',fieldLabel:'Comment',name:'comment',allowBlank:false},
				{xtype:'checkbox',fieldLabel:'',labelSeparator:'',boxLabel:'Available',name:'available'}
			]
		});
		
		this.win = new Ext.Window({
			id:'mywin',
			title: 'Simple validations',
			bodyStyle: 'padding:10px;background-color:#fff;',
			width:300,
			height:350,
			items:[this.form],
			buttons: [{text:'Save',handler:this.sendData,scope:this},{text:'Cancel'}]
		});
		
		this.win.show();
		
	},
			
	sendData: function(){
		this.win.el.mask('Please wait...');
		this.form.getForm().submit({
			clientValidation: true,
			scope: this,
			success: function(form,action){
				this.win.el.unmask();
				Ext.Msg.alert('Success',action.result.msg);
			},
			failure: function(form,action){
				this.win.el.unmask();
				switch (action.failureType) {
					  case Ext.form.Action.CLIENT_INVALID:
						 Ext.Msg.alert('Failure', 'Form fields may not be submitted with invalid values');
						 break;
					  case Ext.form.Action.CONNECT_FAILURE:
						 Ext.Msg.alert('Failure', 'Ajax communication failed');
						 break;
					  case Ext.form.Action.SERVER_INVALID:
						Ext.Msg.alert('Failure', action.result.msg);
						break;
					  default:
					  	Ext.Msg.alert('Failure',action.result.msg);
				  }
			}
		});
	}	
};

Ext.onReady(com.quizzpot.tutorial.SubmitFormTutorial.init,com.quizzpot.tutorial.SubmitFormTutorial);
