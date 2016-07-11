<?php
	header("Access-Control-Allow-Origin: *");
	header("Content-Type: application/json; charset=UTF-8");
	include("connect.php");
	//$outp = "";
	$outp = array();
	$result = mysql_query(" SELECT * FROM quiz");
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
			$outp[] = $row;
		}
		echo json_encode($outp);
	};
?>