<?php
	header("Content-Type: text/plain"); 
	
	$all = isset($_GET['all']);
	$movie = isset($_POST['id'])?$_POST['id']:rand(0,9);
	
	$data = array(
			array('title'=>'G-Force','year'=>2009,'revenues'=>32.2,'comment'=>'Very good movie, it is an awesome movie','available'=>true,'img'=>'images/gforce.jpg'),
			array('title'=>'Harry Potter and the Half-Blood Prince','year'=>2009,'revenues'=>30,'comment'=>'Not to good, but it is ok','available'=>true,'img'=>'images/hpotter.jpg'),
			array('title'=>'The Ugly Truth','year'=>2009,'revenues'=>27,'comment'=>'Another comment to the movie','available'=>false,'img'=>'images/ugly.jpg'),
			array('title'=>'Orphan','year'=>2009,'revenues'=>12.8,'comment'=>'Testing the comment','available'=>'images/orphan.jpg','img'=>'images/orphan.jpg'),
			array('title'=>'Ice Age: Dawn of the Dinosaurs ','year'=>2009,'revenues'=>8.2,'comment'=>'Awesome movie, really good','available'=>true,'img'=>'images/ice.jpg'),
			array('title'=>'Transformers: Revenge of the Fallen','year'=>2009,'revenues'=>8,'comment'=>'Another test','available'=>false,'img'=>'images/transformers.jpg'),
			array('title'=>'The Hangover','year'=>2009,'revenues'=>6.46,'comment'=>'Testing','available'=>true,'img'=>'images/hangover.jpg'),
			array('title'=>'The Proposal','year'=>2009,'revenues'=>6.42,'comment'=>'Comment','available'=>true,'img'=>'images/proposal.jpg'),
			array('title'=>'Public Enemies','year'=>2009,'revenues'=>4.17,'comment'=>'One more comment','available'=>false,'img'=>'images/public.jpg'),
			array('title'=>'Brüno','year'=>2009,'revenues'=>2.72,'comment'=>'nothing to say','available'=>false,'img'=>'images/bruno.jpg')
			
	);
	
	if($all){
		$info = $data;
	}else{
		$info = array(
			'success'=>true,
			'data'=> $data[$movie]
		);
	}
	
	echo json_encode($info);
?>
