<!DOCTYPE HTML>
<html><head>
	<title>Canvas | Drawing Board | White Board</title>
	 <link rel="stylesheet" type="text/css" href="css/wb.css" /> 
	 <script src="js/wb.js" type="application/javascript"></script> 
	 </head>
<body onLoad="init();">
	<div style="position: relative;">
	<canvas id="canvas" linecap="Butt" width="768" height="400" position=absolute></canvas>
	<canvas id="c2" linecap="Butt" width="768" height="400" position=absolute style="border: 1px solid #000;left: 0;top: 0;z-index: 1;"></canvas>
	</div>
	<div style="position: absolute; top:415px">
		<table border='1' width="768">
		<td style="border:1px"> 
		<td style="width:25px;height:25px;background:#FFFFFF;border:0px"><div name="divPreview" id="divPreview" style="height:25px;width:25px;border:1px #000000 solid;"></div></td>
		<td style="border:1px"><form name="frmColour" style="padding:0px;margin:0px;"><input readonly type="text" name="ColorHex" size=10 style="height:23px;width:55px;font-size: 12px"></form></td>
		<td><input type="image" src="images/import.png" value="Import" onclick="importas();"></td>
		<td><label><select id="dtool" type="one"><option value="pencil">Pencil</option><option value="line">Line</option><option value="rect">Rectangle</option><option value="circle">Circle</option><option value="text">Text</option></select></label></td>
		<td><label><select id="dfont" type="one"><option value="one">1</option><option value="two">2</option><option value="three">3</option><option value="four">4</option><option value="five">5</option></select></label></td>
		<td><input type="image" src="images/eraser.png" value="Eraser" onclick=erasewb();> </td>
		<td><input  type="image" src="images/blur.png" value="Blur" onclick=sketchpen();></td>
		<td><input type="image" src="images/bw.png" value="B & W" onclick=bnwwb();></td>
		<td><input type="image" src="images/clr.png" value="Clear" onclick=clr();></td>
		<td><input type="image" src="images/save.png" value="Save As" onclick=saveas();></td>
		</table>
			<table class='tblPalettenew' width="768">
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
			</table>
		<p>Raw Value<textarea id="in" style="float:left"></textarea></p>
		<p><br>Cursor Value<textarea id="curss" style="float:left"></textarea></p>
	</div>
 </body>
 </html>