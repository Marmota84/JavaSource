<?php
	
	$id = $_POST['node'];
	
	$nodes = array(
		array(
			'id'=>1,
			'text'=>'Program Files',
			'files'=>array(
				array(
					'text'=>'File',
					'leaf'=>true
				),
				array(
					'text'=>'Config',
					'leaf'=>true
				),
				array(
					'text'=>'etc',
					'leaf'=>true
				)
			)
		),
		array(
			'id'=>2,
			'text'=>'Users',
			'leaf'=>true
		),
		array(
			'id'=>3,
			'text'=>'workspace',
			'files'=>array(
				array(
					'text'=>'Customers',
					'leaf'=>true
				),
				array(
					'text'=>'Project',
					'leaf'=>true
				)
			)
		),
		array(
			'id'=>4,
			'text'=>'System',
			'leaf'=>true
		)
	);
	
	if(is_numeric($id)){
		$nodes = isset($nodes[$id-1]['files'])?$nodes[$id-1]['files']:array();
	}
	
	echo json_encode($nodes);
?>