<?php
	header("Content-Type: text/plain"); 
	
	$name = $_POST['name'];
	
	if(rand(0,1)===0){
		$info = array(
			'success' => true,
			'msg' => 'The record "'.$name.'" has been saved succesfully'
		);
	}else{
		$info = array(
			'success' => false,
			'msg' => 'There was an error saving the record',
			'errors' => array(
				'name' => $name.' is not an employee of this corporation',
				'email' => 'E-mail does not exist in the database',
				'comment' => 'The comment is to short'
			)
		);
	}
	echo json_encode($info);
?>
