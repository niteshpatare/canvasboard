<?php
echo "hello";
$type = $_POST['umsgtype'];
$uvar = $_POST['umsg'];
$uclr = $_POST['umsgclr'];
$uft = $_POST['umsgft'];
$uvar = html_entity_decode($uvar);
$uclr = html_entity_decode($uclr);
$uft = html_entity_decode($uft);
$gid = $_GET['id'];
if($uvar == ""){exit;};

$coord = explode(";",$uvar);
$coord2 = explode(",",$uvar);
$xdoc = new DomDocument;
$xdoc->Load("$gid.xml");
$candidate = $xdoc->getElementsByTagName('root')->item(0);

if($type=="rect")
{//rectangle
$newElement = $xdoc ->createElement($type);

foreach($coord as $value)
    {
    $point = explode("-",$value);

    $xele = $xdoc ->createElement('x');
    $txtx = $xdoc ->createTextNode ($point[0]); // creates textnode
    $xele -> appendChild($txtx); //append to xnode - textnode
    $newElement -> appendChild($xele); //append to root

    $xele = $xdoc ->createElement('y');
    $txtx = $xdoc ->createTextNode ($point[1]); // creates textnode
    $xele -> appendChild($txtx); //append to xnode - textnode
    $newElement -> appendChild($xele); //append to root
    
	$xele = $xdoc ->createElement('w');
    $txtx = $xdoc ->createTextNode ($point[2]); // creates textnode
    $xele -> appendChild($txtx); //append to xnode - textnode
    $newElement -> appendChild($xele); //append to root
	
	$xele = $xdoc ->createElement('h');
    $txtx = $xdoc ->createTextNode ($point[3]); // creates textnode
    $xele -> appendChild($txtx); //append to xnode - textnode
    $newElement -> appendChild($xele); //append to root

	$xele = $xdoc ->createElement('c');
    $txtx = $xdoc ->createTextNode ($point[4]); // creates textnode
    $xele -> appendChild($txtx); //append to xnode - textnode
    $newElement -> appendChild($xele); //append to root
	
	$xele = $xdoc ->createElement('ft');
    $txtx = $xdoc ->createTextNode ($point[5]); // creates textnode
    $xele -> appendChild($txtx); //append to xnode - textnode
    $newElement -> appendChild($xele); //append to root
	
	
	}
//rectangle
}
elseif($type=="circle")
{//circle
$newElement = $xdoc ->createElement($type);


foreach($coord as $value)
    {
    $point = explode("-",$value);

    $xele = $xdoc ->createElement('x');
    $txtx = $xdoc ->createTextNode ($point[0]); // creates textnode
    $xele -> appendChild($txtx); //append to xnode - textnode
    $newElement -> appendChild($xele); //append to root

    $xele = $xdoc ->createElement('y');
    $txtx = $xdoc ->createTextNode ($point[1]); // creates textnode
    $xele -> appendChild($txtx); //append to xnode - textnode
    $newElement -> appendChild($xele); //append to root
    
	$xele = $xdoc ->createElement('r');
    $txtx = $xdoc ->createTextNode ($point[2]); // creates textnode
    $xele -> appendChild($txtx); //append to xnode - textnode
    $newElement -> appendChild($xele); //append to root

	$xele = $xdoc ->createElement('c');
    $txtx = $xdoc ->createTextNode ($point[3]); // creates textnode
    $xele -> appendChild($txtx); //append to xnode - textnode
    $newElement -> appendChild($xele); //append to root
	
	$xele = $xdoc ->createElement('ft');
    $txtx = $xdoc ->createTextNode ($point[4]); // creates textnode
    $xele -> appendChild($txtx); //append to xnode - textnode
    $newElement -> appendChild($xele); //append to root
	
	
	}
//circle
}
elseif($type=="textt")
{//text
$newElement = $xdoc ->createElement($type);

foreach($coord as $value)
    {
    $point = explode("-",$value);

    $xele = $xdoc ->createElement('x');
    $txtx = $xdoc ->createTextNode ($point[0]); // creates textnode
    $xele -> appendChild($txtx); //append to xnode - textnode
    $newElement -> appendChild($xele); //append to root

    $xele = $xdoc ->createElement('y');
    $txtx = $xdoc ->createTextNode ($point[1]); // creates textnode
    $xele -> appendChild($txtx); //append to xnode - textnode
    $newElement -> appendChild($xele); //append to root
    
		$xele = $xdoc ->createElement('c');
    $txtx = $xdoc ->createTextNode ($point[2]); // creates textnode
    $xele -> appendChild($txtx); //append to xnode - textnode
    $newElement -> appendChild($xele);
	
	$xele = $xdoc ->createElement('td');
    $txtx = $xdoc ->createTextNode ($point[3]); // creates textnode
    $xele -> appendChild($txtx); //append to xnode - textnode
    $newElement -> appendChild($xele);

	$xele = $xdoc ->createElement('ft');
    $txtx = $xdoc ->createTextNode ($point[4]); // creates textnode
    $xele -> appendChild($txtx); //append to xnode - textnode
    $newElement -> appendChild($xele);
	
	}
//text
}
elseif($type=="line")
{//line

	
	$newElement = $xdoc ->createElement($type);


foreach($coord as $value)
    {
    $point = explode("-",$value);

    $xele = $xdoc ->createElement('x1');
    $txtx = $xdoc ->createTextNode ($point[0]); // creates textnode
    $xele -> appendChild($txtx); //append to xnode - textnode
    $newElement -> appendChild($xele); //append to root

    $xele = $xdoc ->createElement('y1');
    $txtx = $xdoc ->createTextNode ($point[1]); // creates textnode
    $xele -> appendChild($txtx); //append to xnode - textnode
    $newElement -> appendChild($xele); //append to root
    
	$xele = $xdoc ->createElement('x2');
    $txtx = $xdoc ->createTextNode ($point[2]); // creates textnode
    $xele -> appendChild($txtx); //append to xnode - textnode
    $newElement -> appendChild($xele); //append to root
	
	$xele = $xdoc ->createElement('y2');
    $txtx = $xdoc ->createTextNode ($point[3]); // creates textnode
    $xele -> appendChild($txtx); //append to xnode - textnode
    $newElement -> appendChild($xele); //append to root

	$xele = $xdoc ->createElement('c');
    $txtx = $xdoc ->createTextNode ($point[4]); // creates textnode
    $xele -> appendChild($txtx); //append to xnode - textnode
    $newElement -> appendChild($xele); //append to root
	
	$xele = $xdoc ->createElement('ft');
    $txtx = $xdoc ->createTextNode ($point[5]); // creates textnode
    $xele -> appendChild($txtx); //append to xnode - textnode
    $newElement -> appendChild($xele); //append to root
	
	}
		
//line
}
else
{
//Pencil
$newElement = $xdoc ->createElement($type);


foreach($coord2 as $value)
    {
	
    $pointx = explode("-",$value);

    $xele = $xdoc ->createElement('x');
    $txtx = $xdoc ->createTextNode ($pointx[0]); // creates textnode
    $xele -> appendChild($txtx); //append to xnode - textnode
    $newElement -> appendChild($xele); //append to root

    $xele = $xdoc ->createElement('y');
    $txtx = $xdoc ->createTextNode ($pointx[1]); // creates textnode
    $xele -> appendChild($txtx); //append to xnode - textnode
    $newElement -> appendChild($xele); //append to root
    
	
}


	$xele = $xdoc ->createElement('c');
    $txtx = $xdoc ->createTextNode ($uclr); // creates textnode
    $xele -> appendChild($txtx); //append to xnode - textnode
    $newElement -> appendChild($xele); //append to root
	
	$xele = $xdoc ->createElement('ft');
    $txtx = $xdoc ->createTextNode ($uft); // creates textnode
    $xele -> appendChild($txtx); //append to xnode - textnode
    $newElement -> appendChild($xele); //append to root
// End Pencil
}
//$newElement -> appendChild($txtNode); //append to base - textnode
$candidate -> appendChild($newElement); //append to root
$test = $xdoc->save("$gid.xml");
$msg = $candidate->nodeValue;
echo $uvar;

?>