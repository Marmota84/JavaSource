<?php
	header("Content-Type: text/plain"); 
	
	$data = array(
		'success'=>true,
		'total'=>11,
		'data'=>array(
			array('city'=>'Mexico city','visits'=>684,'pageVisits'=>4.11,'averageTime'=>'00:06:53'),
			array('city'=>'La Victoria','visits'=>443,'pageVisits'=>4.39,'averageTime'=>'00:07:28'),
			array('city'=>'Madrid','visits'=>380,'pageVisits'=>3.11,'averageTime'=>'00:05:22'),
			array('city'=>'Providencia','visits'=>204,'pageVisits'=>3.83,'averageTime'=>'00:08:20'),
			array('city'=>'Bogota','visits'=>204,'pageVisits'=>3.26,'averageTime'=>'00:04:57'),
			array('city'=>'Puerto Madero','visits'=>192,'pageVisits'=>3.56,'averageTime'=>'00:05:07'),
			array('city'=>'Monterrey','visits'=>174,'pageVisits'=>3.90,'averageTime'=>'00:06:06'),
			array('city'=>'Barcelona','visits'=>145,'pageVisits'=>3.28,'averageTime'=>'00:05:39'),
			array('city'=>'Caracas','visits'=>132,'pageVisits'=>4.55,'averageTime'=>'00:06:27'),
			array('city'=>'Rosario','visits'=>116,'pageVisits'=>2.44,'averageTime'=>'00:04:30'),
			array('city'=>'Oaxaca','visits'=>108,'pageVisits'=>1.73,'averageTime'=>'00:02:37')
		)
	);
	
	
	echo json_encode($data);
?>