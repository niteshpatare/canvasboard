<?php
$base = $_POST['bsf'];


$xdoc = new DomDocument;
$xdoc->Load('wb.xml');
$candidate = $xdoc->getElementsByTagName('root')->item(0);
$newElement = $xdoc ->createElement('base');
$txtNode = $xdoc ->createTextNode ($base);
$newElement -> appendChild($txtNode);
$candidate -> appendChild($newElement);
$test = $xdoc->save("wb.xml");
echo $base;

?>