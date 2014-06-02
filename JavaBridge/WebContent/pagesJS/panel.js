//the namespace for this tutorial
Ext.ns('com.quizzpot.tutorial');

//the blank image
Ext.BLANK_IMAGE_URL = 'ext-3.4.0/resources/images/default/s.gif';

com.quizzpot.tutorial.Panel = {
	init: function(){
		/*
		var main = new Ext.Panel({
			title: 'My first panel', //el título del panel
			width:250, //la anchura del panel
			height:300, //la altura que tendrá
			//renderTo: 'frame', //el elemento donde será insertado
			//html: 'Nothing important just dummy text' //el contenido del panel
			//contentEl: 'content' //usamos un elemento del DOM como contenido
			autoLoad: 'pagesJSP/saludo.jsp' //<--- El contenido será sacado de aquí automáticamen
		});
		//usamos el método “render” para imprimir el panel en la pantalla
		//main.render('frame'); 
		//usando Ajax para insertar el contenido
		//main.load('pagesJSP/saludo.jsp');
		*/
		
		/*
		//creamos el panel interior
		var panel1 = new Ext.Panel({
			title: 'Users',
			html: "The content",
			bodyStyle: 'padding:10px;', //podemos asignarle estilos al div contenedor
			height:200,
			border: false, //le podemos quitar el borde al panel
			collapsible: true, //mediante esta propiedad el panel se colapsa
			titleCollapse: true,  //ahora se colapsará dando clic sobre el título
			iconCls: 'users'  //con esto se le agregará el icono deseado
		});
			
		//el panel principal que contendrá otros paneles dentro de si	
		var main = new Ext.Panel({
			title: 'My first panel',
			width:250,
			height:600,
			items: [panel1] //aqui se le asignan componentes que contendrá
		});
		//se renderizan todos los paneles creados
		main.render('frame');
		*/
		
		var panel1 = new Ext.Panel({
			title: 'Users',
			iconCls: 'users',		
		});

		var panel2 = new Ext.Panel({
			title: 'Reports',
			iconCls: 'reports',
		});

		var panel3 = new Ext.Panel({
			title: 'Documents',
			iconCls: 'documents',
		});

		var main = new Ext.Panel({
			title: 'My first panel',
			width:250,
			height:600,
			defaults: { // con esto evitamos...
				collapsible:true, //duplicar código...
				border: false, // y todas estas...
				bodyStyle: 'padding:10px;', // propiedades ...
				titleCollapse: true, // son agregadas a...
				height:200 //todos los paneles internos
			},
			items: [panel1,panel2,panel3]
		});
		
		main.render('frame');
		
	}
};

Ext.onReady(com.quizzpot.tutorial.Panel.init,com.quizzpot.tutorial.Panel);