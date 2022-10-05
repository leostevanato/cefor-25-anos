<?php
$dir    = '.';
$files = array_diff(scandir($dir), array('..', '.', basename($_SERVER['PHP_SELF'])));
// $files2 = array_combine(range(1, count($files)), array_values($files));

// echo json_encode($files2);

$conta = 1;
$array_para_json = [];

foreach($files as $imagem) {
	$array_para_json[] = ["id" => $conta, "imagem" => $imagem, "alt" => "Imagem " . $conta];
	$conta++;
}

echo json_encode($array_para_json);
?>