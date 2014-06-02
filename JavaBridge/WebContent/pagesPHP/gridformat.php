<?php
	header("Content-Type: text/plain"); 
	
	$offset = isset($_POST['offset'])?$_POST['offset']:0;
	$size = isset($_POST['size'])?$_POST['size']:5;
	
	$data = array(
		array('breed'=>'Beagle','origin'=>'Ancient Greece','agressive'=>false,'image'=>'images/beagle.jpg','description'=>'The Beagle is a breed of small to medium-sized dog. A member of the Hound Group, it is similar in appearance to the Foxhound but smaller, with shorter legs and longer, softer ears.'),
		array('breed'=>'German Shepherd','origin'=>'Germany','agressive'=>true,'image'=>'images/germanShep.jpg','description'=>'German Shepherds are a large-breed dog which generally are between 55 and 65 centimetres (22 and 26 in) at the withers and weigh between 22 and 40 kilograms (49 and 88 lb).'),
		array('breed'=>'Golden Retriever','origin'=>'United Kingdom','agressive'=>false,'image'=>'images/goldenRetriever.jpg','description'=>'The Golden Retriever is a breed of dog, historically developed as a gundog to retrieve shot waterfowl and upland game during hunting. As such they were bred to have a soft mouth to retrieve game undamaged and an instinctive love of water.'),
		array('breed'=>'Maltese','origin'=>'Central Mediterranean Area','agressive'=>false,'image'=>'images/maltese.jpg','description'=>'The Maltese is a small breed of dog in the toy group, known for its silky white hair, though many owners of pet Maltese give them a short "puppy cut" for ease of grooming.'),
		array('breed'=>'Rottweiler','origin'=>'Germany','agressive'=>false,'image'=>'images/rottweiler.jpg','description'=>'The Rottweiler, is a "medium to large size, stalwart dog" breed originating in Germany as a herding dog. It is a hardy and very intelligent breed.'),
		array('breed'=>'St. Bernard','origin'=>'Italy / Switzerland','agressive'=>false,'image'=>'images/stbernard.jpg','description'=>'The St. Bernard Dog is a very large breed of dog, a working dog from the Swiss Alps, originally bred for rescue. The breed has become famous through tales of alpine rescues, as well as for its enormous size.'),
		array('breed'=>'Whippet','origin'=>'England','agressive'=>false,'image'=>'images/whiteWhippet.jpg','description'=>'The Whippet is a breed of dog, of the sighthound family. They are active and playful and are physically similar to a small greyhound. Their popularity has led to the reuse of the Whippet name on a large number of things, from cars to cookies.'),
		array('breed'=>'Chihuahua','origin'=>'Mexico','agressive'=>true,'image'=>'images/chihuahua.jpg','description'=>'Breed standards for this dog do not generally specify a height, only a weight and a description of their overall proportions. As a result, height varies more than within many other breeds.')
	);
	
	$paging = array(
		'success'=>true,
		'total'=>count($data),
		'data'=> array_splice($data,$offset,$size)
	);
	
	
	echo json_encode($paging);
?>