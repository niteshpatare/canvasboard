var canvas,context,c2,ctx2, e, mx, my, curtxt, pc,fpc,divPreview,x1,x2,y1,y2,retcolorp,tempclr,temptxt;
var ctx,trep,rettextp,retft;
var varsizeup = 4;
var varcolourwb="rgb(0, 0, 0)";
	var type = 'pencil';
var inhouse = false;
curtxt = document.getElementById('ColorHex');
divPreview = document.getElementById('divPreview');
divPreview.style.background = '#000000';
var INTERVAL = 10000;
var canvasValid = false;
var stylePaddingLeft, stylePaddingTop, styleBorderLeft, styleBorderTop;
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
		var mouseEv, touchInit;
var tpixarray =[];
function tpixel(){
    this.x = 0;
    this.y = 0;
}
var HEIGHT, WIDTH;
function init2() {
  canvas = document.getElementById('canvas2');
  HEIGHT = canvas.height;
  WIDTH = canvas.width;
  ctx = canvas.getContext('2d');

  context = canvas.getContext('2d');
  c2 = document.getElementById("c2");
  ctx2 = c2.getContext("2d");

	context.lineWidth=varsizeup;
  ctx2.lineWidth=varsizeup;
	context.strokeStyle = varcolourwb;
	context.save();

  //fixes a problem where double clicking causes text to get selected on the canvas
  canvas.onselectstart = function () { return false; }

  // make mainDraw() fire every INTERVAL milliseconds
  setInterval(getDraw, INTERVAL);

  canvas.onmousedown = e_canvas;
  canvas.onmouseup = e_canvas;
  canvas.onmousemove = e_canvas;
	canvas.ontouchstart = e_canvas;
	canvas.ontouchmove = e_canvas;
	canvas.ontouchcancel = e_canvas;
	canvas.ontouchend = e_canvas;
	canvas.addEventListener("touchstart", e_canvas, false);
	canvas.addEventListener("touchmove", e_canvas, false);
	canvas.addEventListener("touchend", e_canvas, false);

}
//

function e_canvas(e)
{
    if (e.layerX || e.layerX == 0) { // Firefox
			e._x = e.layerX;
			e._y = e.layerY;
		} else if (e.offsetX || e.offsetX == 0) { // Opera
			e._x = e.offsetX;
			e._y = e.offsetY;
		}

		mx = e._x - this.offsetLeft;
		my = e._y - this.offsetTop;

		curtxt.value = "["+mx+","+my+"]";
		var func = type;
		if(func)
		{
			setType(type,e);
		}
		switch(e.type)
		{
			case "touchstart": { mouseEv="mousedown"; touchInit = 1; break;  }
			case "touchend":   { mouseEv="mouseup"; touchInit = 1; break;  }
			case "touchmove":  { mouseEv="mousemove"; touchInit = 1; break;  }
			default: return;
		}

}

function setType(utype,e)
{

		if( utype == "erase"){
	    type = erase;
	    //context.strokeStyle = "rgba(255, 255, 255, 255)";
			context.globalCompositeOperation = "copy";
			context.strokeStyle = ("rgba(255,255,255,255)");
		  // context.fillStyle = "rgba(0,0,0,0)";
		  divPreview.style.background = rgba(255, 255, 255, 255);
		}

		if( utype == "pencil")
		{
	    type = pencil;
			if(mouseEv ==='mousedown' && touchInit ===1){
					penMouseDown(e);
				touchInit = 1;
				e.preventDefault();
			}
			if(mouseEv ==='mousemove' && touchInit ===1){
				penMouseMove(e);
				touchInit = 1;
				e.preventDefault();
			}
			if(mouseEv ==='mouseup' && touchInit ===1){
				penMouseUp(e);
				touchInit = 0;
				e.preventDefault();
			}
			this.onmousedown = function(e)
			{
				penMouseDown(e);
			};
			function penMouseDown(e){
				if(inhouse)
				{
					context.beginPath();
					context.moveTo(mx, my);
					type.x1 = mx;
					type.y1 = my;
					type.started = true;
					trep = type.x1+"-"+type.y1;
					var freed = new tpixel();
					freed.x = type.x1;
					freed.y = type.y1;
					tpixarray.push(freed);
				}
			}
			this.onmousemove = function(e)
			{
			   penMouseMove(e);
			};
			function penMouseMove(e){
				if (type.started && inhouse) {
					type.x2 = mx;
					type.y2 = my;
				 context.lineTo(mx, my);
				 trep = trep + ","+type.x2+"-"+type.y2;
				 //sendline(this.x1,this.y1,this.x2,this.y2);
				 context.stroke();
				 var freed = new tpixel();
				 freed.x = type.x2;
				 freed.y = type.y2;
				 tpixarray.push(freed);
				 }
			}
			this.onmouseup = function(e)
			{
				penMouseUp(e);

			};
			function penMouseUp(e){
				if (type.started && inhouse) {

					this.onmousemove(e);
					//var creed = new tcolor();
					//creed.c1 = varcolourwb;
					//tpixarray.push(creed);
					// trep = trep + "&"+varcolourwb;
					sendlinep(trep,utype,varcolourwb,varsizeup);
					addpencil(tpixarray);
					// addpencil(creed);
					//alert(varcolourwb);
					tpixarray = [];
				}
				type.started = false;
			}
		}
		if( utype == "line")
		{
				type = line;
	       this.onmousedown = function(e)
	             {        if(inhouse)
	                      {
	                            type.started = true;
															type.x1 = mx;
															type.y1 = my;
	                        }
	             };

	            this.onmousemove = function(e)
	             {
	                  if (type.started && inhouse) {

	                      context.beginPath();
												context.moveTo(type.x1,type.y1);
												trep = type.x1+"-"+type.y1;
												context.lineTo(mx,my);
			                                    type.x2 = mx;
												type.y2 = my;
												type.c1 = varcolourwb;
												trep = trep + "-"+type.x2+"-"+type.y2+"-"+type.c1+"-"+varsizeup;
	                      context.stroke();
	                      clear(ctx);
	                     // context.clearRect(0,0, 768,400);
	                     	context.stroke();
	                	}

	             };
	            this.onmouseup = function(e)
	            {
	            		if (type.started && inhouse) {
											this.onmousemove(e);
										 	type.started = false;
	                    addline(type.x1,type.y1,type.x2,type.y2,type.c1,varsizeup);
										  sendline(trep,utype);
										}
	                   //    alert(trep);
	             };
		}
	  if( utype == "rect")
		{
			type = rect;
			var x ,y ,w ,h;

			this.onmousedown = function()
			{         if(inhouse)
			                      {
			                       type.started = true;
									type.x0 = mx;
									type.y0 = my;
								  }
			};

			this.onmousemove = function()
			{
			                        if (type.started && inhouse) {

			                    	   x = Math.min(mx,  type.x0);
										y = Math.min(my,  type.y0);
										w = Math.abs(mx - type.x0);
										h = Math.abs(my - type.y0);
			                            context.strokeRect(x, y, w, h);
			                            context.clearRect(0,0, 768,400);
			                            context.strokeRect(x, y, w, h);
			                     	}
			};
			this.onmouseup = function()
			{
					if (type.started && inhouse) {

					this.onmousemove(e);
					 context.strokeRect(x, y, w, h);
					trep = x+"-"+y+"-"+w+"-"+h+"-"+varcolourwb+"-"+varsizeup;

					addRect(x, y, w, h, varcolourwb,varsizeup);
					sendline(trep,utype);
					//alert(varcolourwb);

					}
					type.started = false;
			}
		}
    if( utype == "circle")
		{
	    type = circle;
			var centerX,centerY,vrad;
			this.onmousedown = function(e)
			{
			    if(inhouse) {
						type.started = true;
				    type.x0 = mx;
						type.y0 = my;
					}
			};
			this.onmousemove = function(e)
			{
					if (type.started && inhouse) {

							centerX = Math.max(type.x0,mx) - Math.abs(type.x0 - mx)/2;
							centerY = Math.max(type.y0,my) - Math.abs(type.y0 - my)/2;
							vrad=((type.x0-centerX )+ (type.y0-centerY)); //to draw circle dn to up and right to left
							context.beginPath();
							if(vrad <1) return;
							context.arc(centerX, centerY, vrad ,0,Math.PI*2 ,true);
							context.clearRect(0,0, 768,400);
							context.stroke();
							trep = centerX+"-"+centerY+"-"+vrad+"-"+varcolourwb+"-"+varsizeup;

					}
			};
			this.onmouseup = function(e)
			{

	         if (type.started && inhouse) {
							type.started = false;
							if(vrad <1) return;
							//alert(varsizeup);
							addCirc(centerX, centerY, vrad, varcolourwb, varsizeup);
							sendline(trep,utype);
						}
				}
		}
    if( utype == "textt")
		{
				type = textt;
				this.onmousedown = function(e)
				{
				    if(inhouse)
				    {
								type.x0 = mx;
								type.y0 = my;
								varsizeup = context.lineWidth+25;
								context.textBaseline = "alphabetic";
								context.font = (varsizeup) + "pt Calibri";
								context.fillStyle = varcolourwb;
								//if inside the x,y coordinates
								var txtreply = prompt("Enter text: ","Hi");
								context.fillText(txtreply, type.x0,type.y0);
								trep = type.x0+"-"+type.y0+"-"+varcolourwb+"-"+txtreply+"-"+varsizeup;
								//varcolourwb = varcolourwb+"-"+txtreply;
								addtext(type.x0,type.y0,varcolourwb,txtreply,varsizeup);
								sendline(trep,utype);
								//alert("h");
						}
				};
	}

}

function Obj(name) {
    return document[name]||(document.all && document.all[name])||(document.getElementById && document.getElementById(name));
}
function syncTxt(){
			var now = new Date();
			document.getElementById('txtHint').innerHTML = '<small>Synced at '+now.toLocaleTimeString()+'</small>'; //utype
}
function sendline(trep,utype) {



    var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function()
	{
		if(xmlhttp.readyState == 4 && xmlhttp.status==200)
		{
			syncTxt();
			//document.getElementById('txtHint').value = utype
		}
	}
    xmlhttp.open("POST","post.php?id="+bid,true);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");

    xmlhttp.send("umsg="+trep+"&umsgtype="+utype);

}

function sendlinep(trep,utype,varcolourwb,varsizeup) {



    var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function()
	{
		if(xmlhttp.readyState == 4 && xmlhttp.status==200)
		{
			//document.getElementById('txtHint').value = utype;
			syncTxt();
		}
	}
    xmlhttp.open("POST","post.php?id="+bid,true);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");

    xmlhttp.send("umsg="+trep+"&umsgtype="+utype+"&umsgclr="+varcolourwb+"&umsgft="+varsizeup);

}

function saveas() {
canvas = document.getElementById("c2");
window.open(canvas.toDataURL("image/png"));
}

function fontsa1(fpc){	//colors

    if( fpc == "1" )   //remaining colors
	{//
        context.lineWidth='4';
						varsizeup = "4";
						context.save();

	}else if( fpc == "2" )   //remaining colors
	{//
          context.lineWidth='6';
						varsizeup = "6";
						context.save();
	}else if( fpc == "3" )   //remaining colors
	{//
           context.lineWidth='8';
						varsizeup = "8";
						context.save();
	}else if( fpc == "4" )   //remaining colors
	{//
           context.lineWidth='10';
						varsizeup = "10";
						context.save();
	}

 }

function mousedowna1(pc){	//colors

    if( pc == "rgb(0, 0, 0)" )   //remaining colors
	{//
            varcolourwb="rgb(0, 0, 0)";
        context.strokeStyle = varcolourwb;


	divPreview.style.background = varcolourwb;

	}
        else if( pc == "rgb(255, 255, 255)" )   //remaining colors
	{//
            varcolourwb="rgb(255, 255, 255)";
        context.strokeStyle = varcolourwb;


	divPreview.style.background = varcolourwb;
	context.save();
//	alert(varcolourwb);
	}else if( pc == "rgb(153, 153, 153)" )   //remaining colors
	{//
            varcolourwb="rgb(153, 153, 153)";
        context.strokeStyle = varcolourwb;

	divPreview.style.background = varcolourwb;
	}
         else if( pc == "rgb(0, 153, 0)" )   //remaining colors
	{//
            varcolourwb="rgb(0, 153, 0)";
        context.strokeStyle = varcolourwb;

	divPreview.style.background = varcolourwb;
	}else if( pc == "rgb(0, 153, 255)" )   //remaining colors
	{//
            varcolourwb="rgb(0, 153, 255)";
        context.strokeStyle = varcolourwb;

	divPreview.style.background = varcolourwb;
	}else if( pc == "rgb(153, 0, 255)" )   //remaining colors
	{//
            varcolourwb="rgb(153, 0, 255)";
        context.strokeStyle = varcolourwb;

	divPreview.style.background = varcolourwb;
	}
         else if( pc == "rgb(153, 68, 0)" )   //remaining colors
	{//
            varcolourwb="rgb(153, 68, 0)";
        context.strokeStyle = varcolourwb;

	divPreview.style.background = varcolourwb;
	}
         else if( pc == "rgb(255, 0, 0)" )   //remaining colors
	{//
            varcolourwb="rgb(255, 0, 0)";
        context.strokeStyle = varcolourwb;

	divPreview.style.background = varcolourwb;
	}
         else if( pc == "rgb(255, 255, 0)" )   //remaining colors
	{//
            varcolourwb="rgb(255, 255, 0)";
        context.strokeStyle = varcolourwb;

	divPreview.style.background = varcolourwb;
	}
         else if( pc == "rgb(0, 255, 0)" )   //remaining colors
	{//
            varcolourwb="rgb(0, 255, 0)";
        context.strokeStyle = varcolourwb;

	divPreview.style.background = varcolourwb;
	}
         else if( pc == "rgb(0, 255, 255)" )   //remaining colors
	{//
            varcolourwb="rgb(0, 255, 255)";
        context.strokeStyle = varcolourwb;

	divPreview.style.background = varcolourwb;
	}
         else if( pc == "rgb(0, 0, 255)" )   //remaining colors
	{//
            varcolourwb="rgb(0, 0, 255)";
        context.strokeStyle = varcolourwb;

	divPreview.style.background = varcolourwb;
	}else if( pc == "rgb(255, 0, 255)" )   //remaining colors
	{//
            varcolourwb="rgb(255, 0, 255)";
        context.strokeStyle = varcolourwb;

	divPreview.style.background = varcolourwb;


	}else if( pc == "rgb(255, 153, 68)" )   //remaining colors
	{//
            varcolourwb="rgb(255, 153, 68)";
        context.strokeStyle = varcolourwb;

	divPreview.style.background = varcolourwb;
	}
}

function bnwwb(){
    var imgd = ctx2.getImageData(0, 0, 768, 400);
	var pix = imgd.data;
	for (var i = 0, n = pix.length; i < n; i += 4) {
	var grayscale = pix[i  ] * .3 + pix[i+1] * .59 + pix[i+2] * .11;
	pix[i  ] = grayscale; 	// red
	pix[i+1] = grayscale; 	// green
	pix[i+2] = grayscale; 	// blue
	// alpha
	}
	ctx2.putImageData(imgd, 0, 0);
	saveas();
}
