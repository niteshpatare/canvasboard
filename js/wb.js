		var canvas, context, ctx3, tool, dtool, dfonttool, e, cx, cy, curtxt, pc;
		var varblurup = 0;
		var varsizeup = 2;
	  	var varcolourwb= '#000000';
		var tool_default = 'pencil';
		var dcaptool_default ='round';
		var dfonttool_default ='one';
		var newcurtxt="\0";
		var colourwbx;
		var pc1 = "rgb(0, 0, 0)";   //palette 
		var pc2 = "rgb(255, 255, 255)";
		var pc4 = "rgb(153, 153, 153)";
		var pc5 = "rgb(0, 153, 0)";
		var pc10 = "rgb(0, 153, 255)";
		var pc12 = "rgb(153, 0, 255)";
		var pc13 = "rgb(153, 68, 0)";
		var pc14 = "rgb(255, 0, 0)";
		var pc15 = "rgb(255, 255, 0)";
		var pc16 = "rgb(0, 255, 0)";
		var pc17 = "rgb(0, 255, 255)";
		var pc18 = "rgb(0, 0, 255)";
		var pc19 = "rgb(255, 0, 255)";
		var pc20 = "rgb(255, 153, 68)";
		var divPreview;

function loadimg()
{		//get base64 from xml
	var xtr = new Array();
		xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function()
        {
            if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
                {
                    var txt;
                    var xmlr = xmlhttp.responseXML;
                    var x = xmlr.getElementsByTagName("base");
                    for(i=0;i<x.length;i++)
							{
                            txt = x[i].childNodes[0].nodeValue;
                            txt = txt.replace(/ /gi, "+");
                            c3 = document.getElementById("c2");
							ctx3 = c3.getContext("2d");
							document.getElementById("curss").value = newcurtxt;
							xtr[i] = document.createElement('img'); // create a Image Element
							xtr[i].src = txt; //image source
							}
                        i = 0;
                        for(i=0;i<x.length;i++)
                            {
                            ctx3.drawImage(xtr[i],0,0);
                            }
				setTimeout('loadimg()', 2000);
			    }		
        }
        xmlhttp.open("GET","wb.xml",true);
        xmlhttp.send();
}

if(window.addEventListener) {
window.addEventListener('load', function () {
	function init() {    
		loadimg();
		divPreview = Obj("divPreview");
		divPreview.style.background = varcolourwb; //initial pallete display as black
		canvas = document.getElementById('canvas');		// Find the canvas element.
		context = canvas.getContext('2d');				//context
		context.shadowColor = 'colour';
		context.shadowBlur = 0;
		context.lineWidth=2;
		context.lineJoin = 'miter';
		context.miterLimit = 4;
		context.save();
		var tool_select = document.getElementById('dtool');		// all Pencil tool instance.
		tool_select.addEventListener('change', ev_tool_change, false);
			if (tools[tool_default]) {
			tool = new tools[tool_default]();
			tool_select.value = tool_default;
			}
		var dfonttool_select = document.getElementById('dfont');		// all font tool instance.
		dfonttool_select.addEventListener('change', ev_dfonttool_change, false);
			if (dfonttools[dfonttool_default]) {
			dfonttool = new dfonttools[dfonttool_default]();
			dfonttool_select.value = dfonttool_default;	  
			}
		canvas.addEventListener('mousedown', ev_canvas, false); // Attach the mousedown, mousemove and mouseup event listeners.
		canvas.addEventListener('mousemove', ev_canvas, false);
		canvas.addEventListener('mouseup', ev_canvas, false);
		}

		function ev_tool_change (ev) { 		  //tools change
			if (tools[this.value]) {
			tool = new tools[this.value]();
			}
		}
	  	  
		function ev_dfonttool_change (ev) {	//font change
			if(dfonttools[this.value]) {
			dfonttool = new dfonttools[this.value]();
			}
		}

		var dfonttools = {};	// font tools
		dfonttools.one = function(){
						dfonttool = this;
						context.lineWidth='2';
						varsizeup = "2";
						context.save();
						};
		dfonttools.two = function(){
						dfonttool = this;
						context.lineWidth='4';
						varsizeup = "4";
						context.save();
						};

		dfonttools.three = function(){
						dfonttool = this;
						context.lineWidth='6';
						varsizeup = "6";
						context.save();
						};
		dfonttools.four = function(){
						dfonttool = this;
						context.lineWidth='8';
						varsizeup = "8";
						context.save();
						};
		dfonttools.five = function(){
						dfonttool = this;
						context.lineWidth='10';
						varsizeup = "10";
						context.save();
						};

		var tools = {};		//tools all
		tools.pencil = function () {		//tool2 pencil
							tool = this;
							this.started = false;
							this.mousedown = function (ev) {	
							context.beginPath();
							context.moveTo(ev._x, ev._y);
							tool.started = true;
							};
							this.mousemove = function (ev) {
								if (tool.started) {	
								newcurtxt =newcurtxt + curtxt;
								context.lineTo(ev._x, ev._y);
								context.stroke();
								}
							};
							this.mouseup = function (ev) {
								if (tool.started) {
								tool.mousemove(ev);
								tool.started = false;
								canvas = document.getElementById("canvas");
								ctx3 = canvas.getContext("2d");
								var src = canvas.toDataURL("image/png");
								var xmlhttp = new XMLHttpRequest();
								xmlhttp.onreadystatechange = function()
								{
									if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
									{
									var txt = xmlhttp.responseText;
                                    c2 = document.getElementById("c2");
									var ctx2 = c2.getContext("2d");
									txt = txt.replace(/ /gi, "+");
									txt = src;
									xtr = document.createElement('img'); // create a Image Element
									xtr.src = src; //image source
									xtr.onload = function(){
													ctx2.drawImage(xtr,0,0);
													canvas.width = canvas.width;
													context.strokeStyle = varcolourwb;
													context.lineWidth = varsizeup;
													context.save;
													}
                                    }
								}
							document.getElementById("in").value = src;
							document.getElementById("curss").value = newcurtxt;
							xmlhttp.open("POST", "update.php", true)
							xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
							xmlhttp.send("bsf="+src);
							}
						};
	};

  tools.rect = function () {	// The rectangle tool.
				tool = this;
				this.started = false;
				var x ,y ,w ,h;
				this.mousedown = function (ev) {
								tool.started = true;
								tool.x0 = ev._x;
								tool.y0 = ev._y;
								};
				this.mousemove = function (ev) {
									if (!tool.started) { 
									return;
									}
									if (tool.started) { 
									x = Math.min(ev._x,  tool.x0);
									y = Math.min(ev._y,  tool.y0);
									w = Math.abs(ev._x - tool.x0);
									h = Math.abs(ev._y - tool.y0);
									}
									if (!w || !h) {
									return;
									} 
								};
				this.mouseup = function (ev) {
									if (tool.started) {
									tool.mousemove(ev);	
									context.strokeRect(x, y, w, h);
									context.strokeRect(x, y, w, h);
									tool.started = false;
									}
								};
				};
				
	tools.line = function () {	//line tools
				tool = this;
				this.started = false;
				this.mousedown = function (ev) {
									tool.started = true;
									tool.x0 = ev._x;
									tool.y0 = ev._y;
									};
				this.mousemove = function (ev) {
									if (!tool.started) {
									return;
									}  
									if (tool.started) {	// Stroked line
									context.beginPath();
									context.moveTo(tool.x0,tool.y0);   
									context.lineTo(ev._x,ev._y);
									}
								};
				this.mouseup = function (ev) {
									if (tool.started) {
									tool.mousemove(ev);
									context.stroke();
									context.stroke();
									context.closepath();
									tool.started = false;
									}
								};
				}; 

	tools.circle = function () {	//circle tools
						tool = this;
						this.started = false;
						this.mousedown = function (ev) {
						tool.started = true;
						tool.x0 = ev._x;
						tool.y0 = ev._y;
						};
						this.mousemove = function (ev) {
						if (!tool.started) {
						return;
						}  
		//var centerX = Math.max(tool.x0,ev._x) - Math.abs(tool.x0 - ev._x)/2;
		//var centerY = Math.max(tool.y0,ev._y) - Math.abs(tool.y0 - ev._y)/2;
	//	var distance = Math.sqrt(Math.pow(tool.x0 - ev._x,2) + Math.pow(tool.y0 - ev._y));
	 	//context.arc(tool.x0, tool.y0, distance/2,0,Math.PI*2 ,true);
						var centerX = Math.max(tool.x0,ev._x) - Math.abs(tool.x0 - ev._x)/2;
						var centerY = Math.max(tool.y0,ev._y) - Math.abs(tool.y0 - ev._y)/2;
						var vrad=((tool.x0-centerX )+ (tool.y0-centerY)); //to draw circle dn to up and right to left
						context.beginPath();
						context.arc(centerX, centerY, vrad ,0,Math.PI*2 ,true);
						};
						this.mouseup = function (ev) {
						if (tool.started) {
						tool.mousemove(ev);	
						context.stroke();
						context.stroke();
						context.closePath();
						tool.started = false;
						}
						};
					}; 

		tools.text = function () {	//text tools
						tool = this;
						this.started = false;
						this.mousedown = function (ev) {
						context.beginPath();
						context.moveTo(ev._x, ev._y);
						tool.started = true;
						var txtreply = prompt("Enter text: ","Hello World!");
						varsizeup=context.lineWidth+25;
						context.textBaseline = "alphabetic";
						context.font = (varsizeup) +"px sans-serif";
						context.fillText(txtreply, ev._x,ev._y);
						};
					s}; //text

  function ev_canvas (ev) {	// This function just determines the mouse. position relative to the canvas element.
		if (ev.layerX || ev.layerX == 0) { // Firefox
		ev._x = ev.layerX;
		ev._y = ev.layerY;
		} else if (ev.offsetX || ev.offsetX == 0) { // Opera
		ev._x = ev.offsetX;
		ev._y = ev.offsetY;
		}
			// displays the cursor positions
			 cx = ev._x - this.offsetLeft;
			 cy = ev._y - this.offsetTop;
			 curtxt = "["+cx+","+cy+"]";
			document.frmColour.ColorHex.value =  curtxt;
			var func = tool[ev.type];
				
				if (func) {
				func(ev);
				}
		}
    init();	//initialise
}, false); 
}

 	function mousedowna1(pc){	//colors
	var tpc1 = "rgb(0, 0, 0)";	//palette
	var tpc2 = "rgb(255, 255, 255)";
	var tpc4 = "rgb(153, 153, 153)";
	var tpc5 = "rgb(0, 153, 0)";
	var tpc10 = "rgb(0, 153, 255)";
	var tpc12 = "rgb(153, 0, 255)";
	var tpc13 = "rgb(153, 68, 0)";
	var tpc14 = "rgb(255, 0, 0)";
	var tpc15 = "rgb(255, 255, 0)";
	var tpc16 = "rgb(0, 255, 0)";
	var tpc17 = "rgb(0, 255, 255)";
	var tpc18 = "rgb(0, 0, 255)";
	var tpc19 = "rgb(255, 0, 255)";
	var tpc20 = "rgb(255, 153, 68)";
	if( pc == tpc1 )   //remaining colors
	{// 
            varcolourwb=tpc1;
        context.strokeStyle = varcolourwb;
	context.shadowColor = varcolourwb;
	divPreview.style.background = varcolourwb;
	}
        else if( pc == tpc2 )   //remaining colors
	{//
            varcolourwb=tpc2;
        context.strokeStyle = varcolourwb;
	context.shadowColor = varcolourwb;
	divPreview.style.background = varcolourwb;
	context.save();
//	alert(varcolourwb);
	}else if( pc == tpc4 )   //remaining colors
	{//
            varcolourwb=tpc4;
        context.strokeStyle = varcolourwb;
	context.shadowColor = varcolourwb;
	divPreview.style.background = varcolourwb;
	}
         else if( pc == tpc5 )   //remaining colors
	{//
            varcolourwb=tpc5;
        context.strokeStyle = varcolourwb;
	context.shadowColor = varcolourwb;
	divPreview.style.background = varcolourwb;
	}else if( pc == tpc10 )   //remaining colors
	{//
            varcolourwb=tpc10;
        context.strokeStyle = varcolourwb;
	context.shadowColor = varcolourwb;
	divPreview.style.background = varcolourwb;
	}else if( pc == tpc12 )   //remaining colors
	{//
            varcolourwb=tpc12;
        context.strokeStyle = varcolourwb;
	context.shadowColor = varcolourwb;
	divPreview.style.background = varcolourwb;
	}
         else if( pc == tpc13 )   //remaining colors
	{//
            varcolourwb=tpc13;
        context.strokeStyle = varcolourwb;
	context.shadowColor = varcolourwb;
	divPreview.style.background = varcolourwb;
	}
         else if( pc == tpc14 )   //remaining colors
	{//
            varcolourwb=tpc14;
        context.strokeStyle = varcolourwb;
	context.shadowColor = varcolourwb;
	divPreview.style.background = varcolourwb;
	}
         else if( pc == tpc15 )   //remaining colors
	{//
            varcolourwb=tpc15;
        context.strokeStyle = varcolourwb;
	context.shadowColor = varcolourwb;
	divPreview.style.background = varcolourwb;
	}
         else if( pc == tpc16 )   //remaining colors
	{//
            varcolourwb=tpc16;
        context.strokeStyle = varcolourwb;
	context.shadowColor = varcolourwb;
	divPreview.style.background = varcolourwb;
	}
         else if( pc == tpc17 )   //remaining colors
	{//
            varcolourwb=tpc17;
        context.strokeStyle = varcolourwb;
	context.shadowColor = varcolourwb;
	divPreview.style.background = varcolourwb;
	}
         else if( pc == tpc18 )   //remaining colors
	{//
            varcolourwb=tpc18;
        context.strokeStyle = varcolourwb;
	context.shadowColor = varcolourwb;
	divPreview.style.background = varcolourwb;
	}else if( pc == tpc19 )   //remaining colors
	{//
            varcolourwb=tpc19;
        context.strokeStyle = varcolourwb;
	context.shadowColor = varcolourwb;
	divPreview.style.background = varcolourwb;
	context.save();

	}else if( pc == tpc20 )   //remaining colors
	{//
            varcolourwb=tpc20;
        context.strokeStyle = varcolourwb;
	context.shadowColor = varcolourwb;
	divPreview.style.background = varcolourwb;


	}else{	//for black
        varcolourwb = '#000000';
	context.strokeStyle = varcolourwb;
	context.shadowColor = varcolourwb;
        divPreview.style.background = varcolourwb;

	}
	//glbclr=varcolourwb;
		colourwbx = varcolourwb;
	
}

//pallete funtion
function Obj(name) {
    return document[name]||(document.all && document.all[name])||(document.getElementById && document.getElementById(name));
}


// function to save image as png

function saveas() {
//var win;
canvas = document.getElementById("c2");
// context = canvas.getContext("2d");
var canvasData = canvas.toDataURL("image/png");
//var img = canvas.toDataURL("image/png");
//window.open(canvas.toDataURL("image/png"));
var ajaxs = new XMLHttpRequest();
	ajaxs.open("POST",'testsave.php',false);
	ajaxs.setRequestHeader('Content-Type', 'application/upload');
	ajaxs.send(canvasData);
	window.open(canvas.toDataURL("image/png"));
    ShowNotification(); 		
	alert("Saved!"); 
}

// function to clear image 
function clr(){

if(confirm("Clear canvas? It cannot be recovered!"))
{
 //alert("Are if you sure? to Clear!");
 context.save();
canvas.setAttribute('width', canvas.width); // clears the canvas
//width="768" height="400"

  context.shadowColor = "Black";
   context.shadowBlur = 0;

this.context.save();
  context.lineWidth=4;
     varsizeup=4;
}
else{
 //alert("Are else you sure? to Clear!");
 exit();
}
 
// alert("Are you sure? to Clear!");

}


// function to erase image 
function erasewb() {
	context.save();
	context.strokeStyle = '#ffffff';
	context.shadowColor = '#ffffff';
	context.globalCompositeOperation = "copy";
	context.strokeStyle("rgba(0,0,0,0)");
	tools.pencil= true;

}

// function to import drawnn image  from local storage
function importas() {

var myImage = new Image();
myImage = document.createElement('Image');
//alert("Redo In development");
//myImage.src = document.getElementById('fila').getAsDataURL();
myImage.src = "test.png";
    myImage.onload = function(){
                   //  alert(src);
        context.drawImage(myImage, 0, 0);
                             }
}


//skectch Pen
function sketchpen() {
	    context.save();
 context.shadowBlur = varsizeup;
}




function bnwwb(){
	
var imgd = context.getImageData(0, 0, 768, 576);

	var pix = imgd.data;
	for (var i = 0, n = pix.length; i < n; i += 4) {
	var grayscale = pix[i  ] * .3 + pix[i+1] * .59 + pix[i+2] * .11;
	pix[i  ] = grayscale; 	// red
	pix[i+1] = grayscale; 	// green
	pix[i+2] = grayscale; 	// blue
	// alpha
	}
	context.putImageData(imgd, 0, 0);
}

//web notifications


    if (!window.webkitNotifications) {
        alert('Sorry - no support for desktop notifications found. Try Google Chrome.');
    }


    /**
    * Request permission to show desktop notifications. This will block adoption IMO.
    */
    function RequestPermission (callback)
    {
        window.webkitNotifications.requestPermission(callback);
    }


    /**
    * The function which shows the desktop notification
    */
    function ShowNotification ()
    {
        if (window.webkitNotifications.checkPermission() > 0) {
            RequestPermission(ShowNotification);
        }

        // Some variables - nothing special
        var icon  = '';
        var title = 'Save';
        var msg   = 'Image saved.';

        // Show the popup
        var popup = window.webkitNotifications.createNotification(icon, title, msg);
        popup.show();
    }




