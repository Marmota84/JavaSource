<?php
	header("Content-Type: text/plain"); 
	
	$data = array(
		'success'=>true,
		'total'=>11,
		'data'=>array(
			array('city'=>'Mexico city','visits'=>684,'pageVisits'=>4.11,'averageTime'=>'00:06:53','time'=>date('U')),
			array('city'=>'La Victoria','visits'=>443,'pageVisits'=>4.39,'averageTime'=>'00:07:28','time'=>date('U')),
			array('city'=>'Madrid','visits'=>380,'pageVisits'=>3.11,'averageTime'=>'00:05:22','time'=>date('U')),
			array('city'=>'Providencia','visits'=>204,'pageVisits'=>3.83,'averageTime'=>'00:08:20','time'=>date('U')),
			array('city'=>'Bogota','visits'=>204,'pageVisits'=>3.26,'averageTime'=>'00:04:57','time'=>date('U')),
			array('city'=>'Puerto Madero','visits'=>192,'pageVisits'=>3.56,'averageTime'=>'00:05:07','time'=>date('U')),
			array('city'=>'Monterrey','visits'=>174,'pageVisits'=>3.90,'averageTime'=>'00:06:06','time'=>date('U')),
			array('city'=>'Barcelona','visits'=>145,'pageVisits'=>3.28,'averageTime'=>'00:05:39','time'=>date('U')),
			array('city'=>'Caracas','visits'=>132,'pageVisits'=>4.55,'averageTime'=>'00:06:27','time'=>date('U')),
			array('city'=>'Rosario','visits'=>116,'pageVisits'=>2.44,'averageTime'=>'00:04:30','time'=>date('U')),
			array('city'=>'Oaxaca','visits'=>108,'pageVisits'=>1.73,'averageTime'=>'00:02:37','time'=>date('U'))
		)
	);
	
	
	echo json_encode($data);
?>