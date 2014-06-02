<?php
	header("Content-Type: text/plain"); 
	
	$data = array(
		array('value'=>1,'label'=>'Action'),
		array('value'=>2,'label'=>'Animation'),
		array('value'=>3,'label'=>'Comedy'),
		array('value'=>4,'label'=>'Drama'),
		array('value'=>5,'label'=>'Fantasy'),
		array('value'=>6,'label'=>'Horror'),
		array('value'=>7,'label'=>'Musical'),
		array('value'=>8,'label'=>'Romance')
	);
	
	
	echo json_encode(array(
		'records'=>$data
	));
?>