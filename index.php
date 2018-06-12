<?php
$encrypt_key = "GJHsahakst1462574a";

$gid = $_GET['id'];
			if($gid=="")
			{
                $filename = "counter.txt";
                $fp = fopen( $filename, "r" ) or die("Couldn't Generate Whiteboard");
                    while ( ! feof( $fp ) )
                    {
                    $countfile = fgets( $fp);
                    $countfile++;
                    }

                fclose( $fp );
                $key = md5($encrypt_key.$countfile);
                $fp = fopen( $filename, "w" ) or die("Couldn't generate whiteboard");
                fwrite( $fp, $countfile );
                fclose( $fp );
                $doc = new DOMDocument('1.0', 'UTF-8');
                $ele = $doc->createElement( 'root' );
                $ele->nodeValue = $uvar;
                $doc->appendChild( $ele );
                $test = $doc->save("$countfile-$key.xml");

               // echo "$key";
                echo "<meta http-equiv=\"Refresh\" content=\"0; url=index.php?id=$countfile-$key\">";
$uvar=$_POST['msgval'];
                exit;
            }
            else
            {
                if($uvar == "")
                {

                if(!file_exists("$gid.xml")){include "404.php"; exit;}



                }
            }

?>

<!DOCTYPE html>
<html>
<head>
	<title>HTML5 WhiteBoard-Canvas</title>

<meta http-equiv="content-type" content="text/html; charset=utf-8" />

<link rel="stylesheet" type="text/css" href="styles.css" />
<script type="text/javascript">
    var bid = "<?php echo $gid; ?>";

function toggleHouse(txt)
{
    inhouse = txt;
}

</script>
<script src="//platform-api.sharethis.com/js/sharethis.js#property=5b1e6a27c05d470011577457&product=inline-share-buttons"></script>
</head>
<body onLoad="init2();">

  <div class="header">
    <div class="header_resize">
      <div class="logo">
        <h1><a href="#"><span>HTML5 CANVAS </span><small>The FUTURE of the WEB! </small></a></h1>
      </div>


      <div class="clr"></div>
    </div>
  </div>

<section id="page">
	 <header> <!-- Defining the header section of the page with the appropriate tag -->

 <nav class="clear"> <!-- The nav link semantically marks your main site navigation -->
    <ul>
			<li>
				<table class='tblPalette' width="760">
					<tr>
						<td>
							<div>Active color</div>
							<div name="divPreview" id="divPreview" style="height:20px;width:32px;border:1px #000000 solid;"></div>
						</td>
							<td style="border:1px">
								<div>(X,Y)</div>
								<form name="frmColour">
									<input readonly type="text" id="ColorHex" name="ColorHex" size="10" style="height:24px;width:56px;font-size:12px;background: transparent;align=middle;">
								</form>
							</td>
		        <td>
							<div>Pencil</div>
							<img id="dtool" src="img/pen.png" name="pencil" value="pencil" onClick="setType('pencil');"/>
						</td>
		        <td>
							<div>Line</div>
							<img id="dtool" src="img/annLine.png" name="line" value="line" onClick="setType('line');"/>
						</td>
		        <td>
							<div>Rectangle</div>
							<img id="dtool" src="img/annRect.png" name="rect" value="rect" onClick="setType('rect');"/>
						</td>
		        <td>
							<div>Circle</div>
							<img id="dtool" src="img/circle.png" name="circle" value="circle" onClick="setType('circle');"/>
						</td>
		        <td>
							<div>Text</div>
							<img id="dtool" src="img/annTextEdit.png" name="textt" value="textt" onClick="setType('textt');"/>
						</td>
					</tr>
					<tr>
						<td>
							<div>Stroke size 1</div>
							<img id="dtool" src="img/n1.png" name="one" value="one" onClick="fontsa1(1);"/>
						</td>
						<td>
							<div>Stroke size 2</div>
							<img id="dtool" src="img/n2.png" name="two" value="two" onClick="fontsa1(2);"/>
						</td>
						<td>
							<div>Stroke size 3</div>
							<img id="dtool" src="img/n3.png" name="three" value="three" onClick="fontsa1(3);"/>
						</td>
						<td>
							<div>Stroke size 4</div>
							<img id="dtool" src="img/n4.png" name="four" value="four" onClick="fontsa1(4);"/>
						</td>
						<td>
							<div>Erase</div>
							<img id="dtool" src="img/eraser.png" name="eraser" value="erase" onClick="setType('erase');"/>
						</td>
						<td>
							<div>Black and White</div>
							<img id="dtool" src="img/bw.png" name="bw" value="bw" onClick="bnwwb();"/>
						</td>
						<td>
							<div>Save as Image</div>
							<img id="dtool" src="img/saves.png" name="save" value="save" onClick="saveas();"/>
						</td>
					</tr>
				</table>
			</li>
    </ul>
    <ul>
			<li>
				<span>Choose color for canvas element</span>
	    	<table class='tblPalettenew' width="750">
					<tr>
						<td style="background-color: rgb(0, 0, 0);" onClick=mousedowna1(pc1);>&nbsp;&nbsp;&nbsp;&nbsp;</td>
						<td style="background-color: rgb(255, 255, 255);" onClick=mousedowna1(pc2);>&nbsp;&nbsp;&nbsp;&nbsp;</td>
						<td style="background-color: rgb(153, 153, 153);" onClick=mousedowna1(pc4);>&nbsp;&nbsp;&nbsp;&nbsp;</td>
						<td style="background-color: rgb(0, 153, 0);" onClick=mousedowna1(pc5);>&nbsp;&nbsp;&nbsp;&nbsp;</td>
						<td style="background-color: rgb(0, 153, 255);" onClick=mousedowna1(pc10);>&nbsp;&nbsp;&nbsp;&nbsp;</td>
						<td style="background-color: rgb(153, 0, 255);" onClick=mousedowna1(pc12);>&nbsp;&nbsp;&nbsp;&nbsp;</td>
						<td style="background-color: rgb(153, 68, 0);" onClick=mousedowna1(pc13);>&nbsp;&nbsp;&nbsp;&nbsp;</td>
						<td style="background-color: rgb(255, 0, 0);" onClick=mousedowna1(pc14);>&nbsp;&nbsp;&nbsp;&nbsp;</td>
						<td style="background-color: rgb(255, 255, 0);" onClick=mousedowna1(pc15);>&nbsp;&nbsp;&nbsp;&nbsp;</td>
						<td style="background-color: rgb(0, 255, 0);" onClick=mousedowna1(pc16);>&nbsp;&nbsp;&nbsp;&nbsp;</td>
						<td style="background-color: rgb(0, 255, 255);" onClick=mousedowna1(pc17);>&nbsp;&nbsp;&nbsp;&nbsp;</td>
						<td style="background-color: rgb(0, 0, 255);" onClick=mousedowna1(pc18);>&nbsp;&nbsp;&nbsp;&nbsp;</td>
						<td style="background-color: rgb(255, 0, 255);" onClick=mousedowna1(pc19);>&nbsp;&nbsp;&nbsp;&nbsp;</td>
						<td style="background-color: rgb(255, 153, 68);" onClick=mousedowna1(pc20);>&nbsp;&nbsp;&nbsp;&nbsp;</td>
					<tr>
				</table>
			</li>
			<li><div id="txtHint"></div></li>
	  </ul>
</nav>

        </header>
	<content>

	<div id="container2">
	<canvas id="canvas2" onmouseover="toggleHouse(true);" onmouseout="toggleHouse(false);" linecap="Butt" width="768" height="400"></canvas>
    <canvas id="c2" linecap="Butt" width="768" height="400" position=absolute style="border: 1px solid #000;left: 0;top: 0;z-index: 1;"></canvas>
	<div class="sharethis-inline-share-buttons"></div>
	</div>



    </content>

	<footer>

		<small>Site by pnuts27. Follow- <a href='https://twitter.com/knytesh' target="_blank">knytesh</a></small>
	</footer>  </section>
    <!-- JavaScript Includes -->
<script src="draw.js"></script>
<script src="user.js"></script>
<script src="ret.js"></script>
</body>
</html>
