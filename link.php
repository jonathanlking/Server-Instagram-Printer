<?php

require_once $_SERVER['DOCUMENT_ROOT']."/generate.class.php";
require_once $_SERVER['DOCUMENT_ROOT']."/keychain.php";

$keychain = new keychain;
$clientId = $keychain->getInstagramClientId();

$link = $_REQUEST["link"];
$print = instagramPrintFromLink($link, $clientId);

if ($_REQUEST["format"] === "base64") echo base64_encode($print);
else echo $print;

?>
