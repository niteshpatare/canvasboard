var texts = [];

function ttext() {

  this.x = 0;
  this.y = 0;
  this.c1 = 1;
  this.d = 1;
  this.ft = 1;


}

function addtext(x, y, c1, d,ft) {
  var txtt = new ttext;
  txtt.x = x;
  txtt.y = y;
  txtt.c1 = c1;
 txtt.d = d;
  txtt.ft = ft;
  texts.push(txtt);

  invalidate();

}

var circles = [];

function ccircle() {

  this.x = 0;
  this.y = 0;
  this.r = 1; // default width and height?
  this.c1 = 1;
   this.ft = 1;
 // this.fill = '#444444';
 // context.strokeStyle = varcolourwb;
}

function addCirc(x, y, r,c1, ft) {
  var circ = new ccircle;
  circ.x = x;
  circ.y = y;
  circ.r = r;
 circ.c1 = c1;
  circ.ft = ft;
  circles.push(circ);

  invalidate();

}
var rectangles = [];

function crectangle() {
     //alert("k"); k 0th is here
  this.x = 0;
  this.y = 0;
  this.w = 1; // default width and height?
  this.h = 1;
  this.c1 = 1;
   this.ft = 1;
 // this.fill = '#444444';
 // context.strokeStyle = varcolourwb;
}

function addRect(x, y, w, h, c1, ft) {
  var rect = new crectangle;
  rect.x = x;
  rect.y = y;
  rect.w = w
  rect.h = h;
  rect.c1 = c1;
   rect.ft = ft;
  rectangles.push(rect);
 // alert("k1");
  invalidate();
//  alert("k2");
}
var lines = [];

function cline(){
    this.x1 = 0;
    this.y1 = 0;
    this.x2 = 1;
    this.y2 = 1;
	this.c1 = 1;
    this.ft = 1;
  //  context.strokeStyle = varcolourwb;

}

function addline(x1,y1,x2,y2,c1,ft){
    var line = new cline;
    line.x1 = x1;
    line.y1 = y1;
  line.x2 = x2
  line.y2 = y2;
line.c1 = c1;
  line.ft = ft;
  lines.push(line);

  invalidate();

}


var pixels = [];

function cpixel(){
    this.x1 = 0;
    this.y1 = 0;
     this.x2 = 1;
    this.y2 = 1;

}

function addpencil(freed){

   pixels.push(freed);
   invalidate();

}

function clear(c) {
  c.clearRect(0, 0, WIDTH, HEIGHT);
}

function mainDrawp(tempclr,tempft) {

  if (canvasValid == false) {

   clear(ctx2);
    // Add stuff you want drawn in the background all the time here
   //   alert(tempclr);
    // draw all boxes
    ctx2.strokeStyle = tempclr;
	ctx2.lineWidth = tempft;
	cl = pixels.length;
    for (var j = 0; j < cl; j++) {
      //pixels[j].drawp(ctx2); // we used to call drawshape, but now each box draws itself
     //var px1 = pixels[j].x1;
            //pecil logic

            //working
             ctx2.beginPath();
			ctx2.strokeStyle = pixels[j].c1;
             //alert(pixels[j].c1)
		for(var t = 0; t < pixels[j].length; t++)
                    {
                        //alert(pixels[j][t].x+","+pixels[j][t].y);



						var tn = t + 1;


                        if(tn < pixels[j].length)
                            {	//ctx2.strokeStyle = retcolorp;

                                ctx2.moveTo(pixels[j][t].x,pixels[j][t].y);
                                ctx2.lineTo(pixels[j][tn].x,pixels[j][tn].y);
                                ctx2.stroke();

                            }

                    }
             // var flagsp = true;
  //pencil logic ends
    }



    // Add stuff you want drawn on top all the time here

    canvasValid = true;
  }

}


function invalidate() {
  canvasValid = false;

}

function mainDraw() {

  if (canvasValid == false) {
   // alert(tempclr);
   //  clear(ctx);

  //clear(ctx2);

 ////// ctx2.strokeStyle = tempclr;
    // Add stuff you want drawn in the background all the time here

    // draw all boxes

	cl = lines.length;
    for (var j = 0; j < cl; j++) {
      //pixels[j].drawp(ctx2); // we used to call drawshape, but now each box draws itself
     //var px1 = pixels[j].x1;
            //pecil logic

            //working
             ctx2.beginPath();
             //alert(pixels[j].length)
		//for(var t = 0; t < lines[j].length; t++)
                 //   {
                        //alert(pixels[j][t].x+","+pixels[j][t].y);

					//	var tn = t + 1;


                      //  if(tn < lines[j].length)
                       //     {	//ctx2.strokeStyle = retcolorp;

                            //    ctx2.moveTo(lines[j][t].x,lines[j][t].y);
                           //     ctx2.lineTo(lines[j][tn].w,lines[j][tn].h);
                             //   ctx2.stroke();

                        //    }

                  //  }
             // var flagsp = true;
  //pencil logic ends
 // alert(lines[j].x1);
  ctx2.lineWidth = lines[j].ft;
  ctx2.strokeStyle = lines[j].c1;
   ctx2.moveTo(lines[j].x1,lines[j].y1);
                                ctx2.lineTo(lines[j].x2,lines[j].y2);
                                ctx2.stroke();

    }


    	cl = rectangles.length;
	for (var j = 0; j < cl; j++) {
	  ctx2.strokeStyle = rectangles[j].c1;
	   ctx2.lineWidth = rectangles[j].ft;
	 // alert(rectangles[j].c1);
	ctx2.strokeRect(rectangles[j].x,rectangles[j].y,rectangles[j].w,rectangles[j].h);
	}
    // Add stuff you want drawn on top all the time here

  	cl = circles.length;
	for (var j = 0; j < cl; j++) {
	 ctx2.strokeStyle = circles[j].c1;
	  ctx2.lineWidth = circles[j].ft;
	ctx2.beginPath();
	ctx2.arc(circles[j].x,circles[j].y,circles[j].r,0,Math.PI*2 ,true);
	ctx2.stroke();
	}


		cl = texts.length;

	for (var j = 0; j < cl; j++) {
		  ctx2.fillStyle = texts[j].c1;
	 //varsizeup = ctx2.lineWidth+25;
	// alert(texts[j].ft);
	ctx2.textBaseline = "alphabetic";
	ctx2.font = (texts[j].ft) + "pt Calibri";

     		//if inside the x,y coordinates

       	ctx2.fillText(texts[j].d, texts[j].x,texts[j].y);
	}

 clear(ctx);
    canvasValid = true;
  }

}
