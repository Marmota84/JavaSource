<?php

	$dataDB = array(
				array(
					"name"=>"MySQL",
					"desc"=>"The world's most popular open source database",	
					"logo"=>"../icons/mysql.png"
				),
				array(
					"name"=>"PostgreSQL",
					"desc"=>"The world's advanced open source database",					
					"logo"=>"../icons/postgresql.png"
				),
				array(
					"name"=>"Oracle",
					"desc"=>"The world's largest enterprise software company",
					"logo"=>"../icons/oracle.png"				
				),
	);
	
	$o = array(
			"num"=>count($dataDB),			
			"data"=>$dataDB
		);
	echo json_encode($o);
?>
