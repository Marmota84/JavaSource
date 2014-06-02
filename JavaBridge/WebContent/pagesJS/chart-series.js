Ext.ns('com.quizzpot.tutorial');

Ext.chart.Chart.CHART_URL = '../ext-3.4.0/resources/charts.swf';

com.quizzpot.tutorial.SeriesTutorial = {
	
	init: function(){
		
		var store = new Ext.data.JsonStore({
			fields: ['year', 'comedy', 'action', 'drama', 'thriller'],
			data: [
					{year: 2004, comedy: 39000000, action: 53890000, drama: 38450000, thriller: 32060000},
					{year: 2005, comedy: 34000000, action: 23890000, drama: 18450000, thriller: 20060000},
					{year: 2006, comedy: 56703000, action: 38900000, drama: 12650000, thriller: 21000000},
					{year: 2007, comedy: 42100000, action: 50410000, drama: 25780000, thriller: 23040000},
					{year: 2008, comedy: 38910000, action: 56070000, drama: 24810000, thriller: 26940000}
				]
		});
		
		var chart = new Ext.chart.ColumnChart({
			store: store, 		// Step 1
			xField: 'year',		//Step 2
			//yField: 'comedy'	//Step 3
			yAxis: new Ext.chart.NumericAxis({
				labelRenderer: Ext.util.Format.usMoney
			}),
			xAxis: new Ext.chart.CategoryAxis({
				labelRenderer:  this.customFormat
			}),
			series:[				//Step 2
			       {yField:'comedy',displayName:'Comedy'},
			       {yField:'action',displayName:'Action'},
			       {yField:'drama',displayName:'Drama'},
			       {yField:'thriller',displayName:'Thriller'}
			],
			extraStyle:{			//Step 1
				legend:{		//Step 2
					display: 'bottom',//Step 3					
				}
			}
		});
		
		var win = new Ext.Window({
			title: 'Chart series example',
			width:550,
			height:320,
			layout:'fit',
			items: chart
		});

		win.show();
	},
	
	customFormat:function(value){
		return 'Year: '+value;
	}
	
};

Ext.onReady(com.quizzpot.tutorial.SeriesTutorial.init,com.quizzpot.tutorial.SeriesTutorial);