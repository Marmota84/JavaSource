<?php
	header("Content-Type: text/plain"); 
	
	$data = array(
		array('name'=>'John Doe','from'=>randomDate('m-d-Y'),'to'=> randomDate('j-M-Y'),'time'=>randomDate('h:i:s a'),'iso'=>randomDate('c'),'unix'=>randomDate('U')),
		array('name'=>'Crysfel','from'=>randomDate('m-d-Y'),'to'=> randomDate('j-M-Y'),'time'=>randomDate('h:i:s a'),'iso'=>randomDate('c'),'unix'=>randomDate('U')),
		array('name'=>'Sasha','from'=>randomDate('m-d-Y'),'to'=> randomDate('j-M-Y'),'time'=>randomDate('h:i:s a'),'iso'=>randomDate('c'),'unix'=>randomDate('U')),
		array('name'=>'Peter','from'=>randomDate('m-d-Y'),'to'=> randomDate('j-M-Y'),'time'=>randomDate('h:i:s a'),'iso'=>randomDate('c'),'unix'=>randomDate('U')),
		array('name'=>'Carl','from'=>randomDate('m-d-Y'),'to'=> randomDate('j-M-Y'),'time'=>randomDate('h:i:s a'),'iso'=>randomDate('c'),'unix'=>randomDate('U')),
		array('name'=>'Ronaldo','from'=>randomDate('m-d-Y'),'to'=> randomDate('j-M-Y'),'time'=>randomDate('h:i:s a'),'iso'=>randomDate('c'),'unix'=>randomDate('U')),
		array('name'=>'Jenny','from'=>randomDate('m-d-Y'),'to'=> randomDate('j-M-Y'),'time'=>randomDate('h:i:s a'),'iso'=>randomDate('c'),'unix'=>randomDate('U')),
		array('name'=>'Gina','from'=>randomDate('m-d-Y'),'to'=> randomDate('j-M-Y'),'time'=>randomDate('h:i:s a'),'iso'=>randomDate('c'),'unix'=>randomDate('U')),
		array('name'=>'Eddy','from'=>randomDate('m-d-Y'),'to'=> randomDate('j-M-Y'),'time'=>randomDate('h:i:s a'),'iso'=>randomDate('c'),'unix'=>randomDate('U'))
	);
	
	$response = array(
		'success'=>true,
		'total'=>count($data),
		'data'=> $data
	);
	
	
	echo json_encode($response);
	
	function randomDate($format){
		return date($format,rand(0,time()));
	}
?>