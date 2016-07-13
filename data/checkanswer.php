<?php
	header("Access-Control-Allow-Origin: *");
	header("Content-Type: application/json; charset=UTF-8");
	include("connect.php");
	//$outp = "";
	$id = $_GET[id];
	$answer = $_GET[answer];
	$outp = array();
	$result = mysql_query(" SELECT * FROM correctanswers WHERE id_quest = '$id' ");
	if(mysql_num_rows($result)) {
		while ($row = mysql_fetch_array($result)){
			/*if ($outp != "") {
				$outp .= ",";
			}
			$outp .= '{"Title":"' . $row[title] . '",';
			$outp .= '"Content":' . $row[content] . '"}';
		}
		//$outp = '{"records":['.$outp.']}';
		//echo ($outp);*/
			//$outp[] = $row;
			if( strcmp($answer,$row[answer]) == 0) {
				//echo json_encode('✔');	
				echo json_encode('true');
			}
			//else echo json_encode('X');
			else echo json_encode('false');
		}
		//echo json_encode($outp);
	};
?>