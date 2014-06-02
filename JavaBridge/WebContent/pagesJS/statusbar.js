Ext.ns('com.quizzpot.tutorial'); 

com.quizzpot.tutorial.StatusbarTutorial = { 
	init: function(){
		
		//method vars 
		var status = new Ext.Toolbar.TextItem({id:'status',text:'Ready!'}); 
		var clock = new Ext.Toolbar.TextItem({id:'clock',text: '00:00:00 AM'}); 
		// instance var 
		this.words = new Ext.Toolbar.TextItem({id:'words',text:'0 words'}); 
				 
		var statusbar = new Ext.Toolbar({ 
			items:[status,'->',this.words,'-',clock] 
		}); 
				 
		this.win = new Ext.Window({ 
			title: 'Word Processor - Quizzpot', 
			width: 600, 
			height: 450, 
			bbar: statusbar, // <--- add the status bar to the window
			bodyStyle:'background-color:#fff', 
			items: [{ 
				xtype: 'textarea', 
				id: 'word-textarea', 
				style: 'width:100%;height:100%;border:none;', 
				enableKeyEvents: true 
			}] 
		}); 
		
		// Start a simple clock task that updates a div once per second 
		var updateClock = function(){ 
			Ext.getCmp('clock').setText(new Date().format('g:i:s A')); 
		}; 

		//Configuration object for the task		 
		var task = { 
			run: updateClock, //the function to run
		   	interval: 1000 //every second 
		} ;

		//creates a new manager 
		var runner = new Ext.util.TaskRunner(); 
		runner.start(task); //start runing the task every one second
				 
		Ext.getCmp('word-textarea').on('keypress',this.countWords,this); 
		Ext.getCmp('word-textarea').on('blur',this.countWords,this);
		
		Ext.getCmp('word-textarea').on('keypress', function(textarea){ 
			var text = Ext.getCmp('status'); 
			text.setText('Saving draft...'); 
			(function(){ 
				    text.setText('Draft auto-saved at ' + new Date().format('g:i:s A')); 
			}).defer(2000); 
		}, this, {buffer:3000});
		
		this.win.show();
	},

	countWords:  function(textarea){ 
	    var value = textarea.getValue(); //get the string
	    var wc = 0; // word counter
	                  
	    if(!Ext.isEmpty(value)){ // if there is something in the textfield
			wc = value.match(/\b/g); //find the spaces 
			wc = wc ? wc.length / 2 : 0; //count the words
	    } 
	
	    this.words.setText(wc + ' words'); //print the counter on the status bar
	}
	
};

Ext.onReady(com.quizzpot.tutorial.StatusbarTutorial.init,com.quizzpot.tutorial.StatusbarTutorial);