<?php
	header("Content-Type: text/plain"); 
	
	$data = array(
			array('genre'=>2,'title'=>'G-Force','year'=>2009,'weekend'=>32.2,'allTime'=>32.2),
			array('genre'=>5,'title'=>'Harry Potter and the Half-Blood Prince','year'=>2009,'weekend'=>30,'allTime'=>222),
			array('genre'=>3,'title'=>'The Ugly Truth','year'=>2009,'weekend'=>27,'allTime'=>27),
			array('genre'=>4,'title'=>'Orphan','year'=>2009,'weekend'=>12.8,'allTime'=>12.8),
			array('genre'=>2,'title'=>'Ice Age: Dawn of the Dinosaurs ','year'=>2009,'weekend'=>8.2,'allTime'=>171),
			array('genre'=>1,'title'=>'Transformers: Revenge of the Fallen','year'=>2009,'weekend'=>8,'allTime'=>379),
			array('genre'=>3,'title'=>'The Hangover','year'=>2009,'weekend'=>6.46,'allTime'=>247),
			array('genre'=>3,'title'=>'The Proposal','year'=>2009,'weekend'=>6.42,'allTime'=>140),
			array('genre'=>1,'title'=>'Public Enemies','year'=>2009,'weekend'=>4.17,'allTime'=>88.1),
			array('genre'=>8,'title'=>'Brüno','year'=>2009,'weekend'=>2.72,'allTime'=>56.5)
			
	);
		
	
	echo json_encode(array(
		'success'=>true,
		'total'=>count($data),
		'data'=> $data
	));
?>