<?php
header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
echo("HOLA ");

if (empty($_POST['rnName']) && empty($_POST['rnEmail'])) die();

if ($_POST)
	{

	// set response code - 200 OK

	http_response_code(200);
	$subject = $_POST['rnName'];
	$to = "zackery.padberg13@ethereal.email";
	$from = $_POST['email'];

	// data

	$msg = $_POST['rnMessage'];

	// Headers

	$headers = "MIME-Version: 1.0\r\n";
	$headers.= "Content-type: text/html; charset=UTF-8\r\n";
	$headers.= "From: <" . $from . ">";
	mail($to, $subject, $msg, $headers);

	// echo json_encode( $_POST );

	echojson_encode(array(
		"sent" => true
    ));
    echojson_encode(["sent" => false, "message" => "ok"]);
	}
  else
	{

	// tell the user about error

	echojson_encode(["sent" => false, "message" => "Something went wrong"]);
	}

?>