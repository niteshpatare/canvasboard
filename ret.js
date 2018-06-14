function getDraw()
{


  //clear(ctx2);


	//var retcolorp;
    pixels = null;
    pixels = [];
    var tpx = new tpixel();
    var pen_arr = [];

	  lines = null;
    lines = [];
    var ltpx = new cline();
    var lin_arr = [];

  	rectangles = null;
    rectangles = [];
    var rtpx = new crectangle();
    var rec_arr = [];

	  circles = null;
    circles = [];
    var ctpx = new ccircle();
    var cir_arr = [];

  	texts = null;
    texts = [];
    var txttpx = new ttext();
    var tex_arr = [];

    function processData(xmlhttp) {
                      //alert(xmlhttp.responseText);
            //pencil
        var ret_pen = xmlhttp.responseXML.documentElement.getElementsByTagName("pencil");
        var ret_lin = xmlhttp.responseXML.documentElement.getElementsByTagName("line");
        var ret_rec = xmlhttp.responseXML.documentElement.getElementsByTagName("rect");
        var ret_cir = xmlhttp.responseXML.documentElement.getElementsByTagName("circle");
        var ret_tex = xmlhttp.responseXML.documentElement.getElementsByTagName("textt");

        if( ret_pen.length === 0 && ret_pen.length === 0 && ret_pen.length === 0 && ret_pen.length === 0 && ret_pen.length === 0){
          return;
        }
        var x,y,p,q,ct,ft;
        var mydata = {
          ret_pen: ret_pen,
          ret_lin: ret_lin,
          ret_rec: ret_rec,
          ret_cir: ret_cir,
          ret_tex: ret_tex
        };
        function setCache(mydata){
                    var cacheSet = {
                        data: mydata,
                        expires: new Date().getTime()
                    };
                    sessionStorage.setItem("cache", JSON.stringify(cacheSet));

          }
          setCache(mydata);
          function getCache(){
                    var cacheRetrieve = JSON.parse( sessionStorage.getItem("cache") );
                    var dataNew = {
                        data: mydata,
                    };
                    dataNew = JSON.stringify(dataNew);
                    dataNew = JSON.parse(dataNew);
                    if ( cacheRetrieve.expires < new Date().getTime() && cacheRetrieve.data !== dataNew.data ) {
                        JSON.parse({data:mydata})
                        // get a fresh copy
                        setCache(mydata);
                        setValue(dataNew);
                    } else {
                      setValue(cacheRetrieve);
                    }
          }
          getCache();
          function setValue(value){
            var tempmydata = value.data;
            ret_pen = tempmydata.ret_pen;
            ret_lin: tempmydata.ret_lin;
            ret_rec: tempmydata.ret_rec;
            ret_cir: tempmydata.ret_cir;
            ret_tex: tempmydata.ret_tex;
          }
        //alert(retcolorp[0].firstChild.nodeValue);
        for(i=0;i<ret_pen.length;i++)
        {
            x = ret_pen[i].getElementsByTagName("x");
            y = ret_pen[i].getElementsByTagName("y");
            //ct = ret_pen[i].getElementsByTagName("c");
            retcolorp = ret_pen[i].getElementsByTagName("c");
            retft = ret_pen[i].getElementsByTagName("ft");
            for(j=0;j<x.length;j++)
            {

                tpx = new tpixel();
                tpx.x = x[j].firstChild.nodeValue;
                tpx.y = y[j].firstChild.nodeValue;
                tpx.c = retcolorp[0].firstChild.nodeValue;
                tpx.f = retft[0].firstChild.nodeValue;
              //tpx.c1 = ct[j].firstChild.nodeValue;
                ////alert(tpx.x+"-"+tpx.y);
                pen_arr.push(tpx);

            }
            addpencil(pen_arr);
            pen_arr = [];
            var tempclr =retcolorp[0].firstChild.nodeValue;
            var tempft =retft[0].firstChild.nodeValue;
            //alert(tempclr);
            //ctx2.strokeStyle = retcolorp[0].firstChild.nodeValue;
            //	ctx2.strokeStyle = tempclr;
            mainDrawp(tempclr,tempft);
        }

        //line
        for(i=0;i<ret_lin.length;i++)
        {
        x = ret_lin[i].getElementsByTagName("x1");
            y = ret_lin[i].getElementsByTagName("y1");
            p = ret_lin[i].getElementsByTagName("x2");
            q = ret_lin[i].getElementsByTagName("y2");
        ct = ret_lin[i].getElementsByTagName("c");
        ft = ret_lin[i].getElementsByTagName("ft");
        //retcolorp = ret_lin[i].getElementsByTagName("color");
            for(j=0;j<p.length;j++)
            {
              ltpx = new cline();

              ltpx.x = x[j].firstChild.nodeValue;
              ltpx.y = y[j].firstChild.nodeValue;
              ltpx.w = p[j].firstChild.nodeValue;
              ltpx.h = q[j].firstChild.nodeValue;
              ltpx.c1 = ct[j].firstChild.nodeValue;
              ltpx.ft = ft[j].firstChild.nodeValue;
              lin_arr.push(ltpx);

            }
            addline(ltpx.x,ltpx.y,ltpx.w,ltpx.h,ltpx.c1,ltpx.ft);
            lin_arr = [];
        // tempclr =retcolorp[0].firstChild.nodeValue;
        //alert(ltpx.c1);
        //ctx2.strokeStyle = retcolorp[0].firstChild.nodeValue;
        //ctx2.strokeStyle = tempclr;
        // mainDraw();
        }
        //rectangle

        for(i=0;i<ret_rec.length;i++)
        {
            x = ret_rec[i].getElementsByTagName("x");
            y = ret_rec[i].getElementsByTagName("y");
            p = ret_rec[i].getElementsByTagName("w");
                q = ret_rec[i].getElementsByTagName("h");
            ct = ret_rec[i].getElementsByTagName("c");
            ft = ret_rec[i].getElementsByTagName("ft");
            //retcolorp = ret_rec[i].getElementsByTagName("color");
            for(j=0;j<x.length;j++)
            {
                rtpx = new crectangle();

                rtpx.x = x[j].firstChild.nodeValue;
                rtpx.y = y[j].firstChild.nodeValue;
                rtpx.w = p[j].firstChild.nodeValue;
                rtpx.h = q[j].firstChild.nodeValue;
                rtpx.c1 = ct[j].firstChild.nodeValue;
                    rtpx.ft = ft[j].firstChild.nodeValue;


            }


      addRect(rtpx.x,rtpx.y,rtpx.w,rtpx.h,rtpx.c1,rtpx.ft);
      // tempclr =retcolorp[0].firstChild.nodeValue;
      //alert(tempclr);
      //ctx2.strokeStyle = retcolorp[0].firstChild.nodeValue;
      //ctx2.strokeStyle = tempclr;
              //  mainDraw();
      }
        //circle

        for(i=0;i<ret_cir.length;i++)
        {
            x = ret_cir[i].getElementsByTagName("x");
            y = ret_cir[i].getElementsByTagName("y");
        p = ret_cir[i].getElementsByTagName("r");
        ct = ret_cir[i].getElementsByTagName("c");
        ft = ret_cir[i].getElementsByTagName("ft");
        //retcolorp = ret_cir[i].getElementsByTagName("color");
        for(j=0;j<x.length;j++)
        {
          ctpx = new ccircle();
          ctpx.x = x[j].firstChild.nodeValue;
          ctpx.y = y[j].firstChild.nodeValue;
          ctpx.r = p[j].firstChild.nodeValue;
          ctpx.c1 = ct[j].firstChild.nodeValue;
          ctpx.ft = ft[j].firstChild.nodeValue;
        }
        addCirc(ctpx.x,ctpx.y,ctpx.r,ctpx.c1,ctpx.ft);
              //  tempclr =retcolorp[0].firstChild.nodeValue;
        //alert(tempclr);
        //ctx2.strokeStyle = retcolorp[0].firstChild.nodeValue;
        //ctx2.strokeStyle = tempclr;
        //mainDraw();
        }
        //
                      //text

        for(i=0;i<ret_tex.length;i++)
        {
        x = ret_tex[i].getElementsByTagName("x");
        y = ret_tex[i].getElementsByTagName("y");
        w = ret_tex[i].getElementsByTagName("c");
        h = ret_tex[i].getElementsByTagName("td");
        ft = ret_tex[i].getElementsByTagName("ft");

        for(j=0;j<x.length;j++)
            {
                txttpx = new ttext();

                txttpx.x = x[j].firstChild.nodeValue;
                txttpx.y = y[j].firstChild.nodeValue;
                txttpx.c1 = w[j].firstChild.nodeValue;
                txttpx.d = h[j].firstChild.nodeValue;
                txttpx.ft = ft[j].firstChild.nodeValue;
            }


        addtext(txttpx.x,txttpx.y,txttpx.c1,txttpx.d,txttpx.ft);

        //alert(tempclr);
        //ctx2.strokeStyle = retcolorp[0].firstChild.nodeValue;
        //ctx2.strokeStyle = tempclr;

        }
        mainDraw();

    }

    function handler() {
      if(this.status == 200 && this.responseXML != null ) {
        // success!
        processData(this);
        syncTxt();
      } else {
        // something went wrong
        console.log('Data not fetched');
      }
    }



    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = handler;
    xmlhttp.open("GET",bid+".xml",true);
    xmlhttp.send();
}
