/*! The MIT License (MIT)
Copyright (c) 2014 Prince John Wesley <princejohnwesley@gmail.com>
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
**/
!function(t,o){"use strict";t.fn.minimap=function(o){var e=this,i=t(window),n=function(){},a=!0,s={heightRatio:.6,widthRatio:.05,offsetHeightRatio:.035,offsetWidthRatio:.035,position:"right",touch:!0,smoothScroll:!0,smoothScrollDelay:200,onPreviewChange:n,disableFind:!1},r=t.extend({},s,o),h=["right","left"];jQuery.fn.disableFind=function(){return this.each(function(){for(var o="",e=!1,i=t(this),n=i.html(),a=0;a<n.length;a++)o+=n[a],"<"===n[a]&&(e=!0),">"===n[a]&&(e=!1),e===!1&&(o+='<span style="position:absolute; right:-999999999px;">.</span>')," "===n[a]&&(o+=" ");i.html(o)})};var c=function(o,e){switch(o){case"disableFind":if(1!=e&&0!=e)throw"Invalid disableFind: "+e;break;case"heightRatio":var i=e;if(!t.isNumeric(i)||0>=i||i>1)throw"Invalid heightRatio: "+i;break;case"widthRatio":var n=e;if(!t.isNumeric(n)||0>=n||n>.5)throw"Invalid widthRatio: "+n;break;case"offsetHeightRatio":var a=e;if(!t.isNumeric(a)||0>a||a>.9)throw"Invalid offsetHeightRatio: "+a;break;case"offsetWidthRatio":var s=e;if(!t.isNumeric(s)||0>s||s>.9)throw"Invalid offsetWidthRatio: "+s;break;case"position":var c=e.toLowerCase(),l=h.indexOf(c);if(-1===l)throw"Invalid position: "+r.position;r.position=c;break;case"smoothScrollDelay":var d=e;if((0|d)!==d||4>d)throw"Invalid smoothScrollDelay(in ms): "+d;break;case"touch":case"smoothScroll":break;case"onPreviewChange":var f=e;if(!f||!t.isFunction(f))throw"Invalid onPreviewChange: "+e;break;default:throw"Invalid validation property: "+o}};for(var l in r)c(l,r[l]);var d=e.clone();d.find(".minimap.noselect").remove(),d.find(".miniregion").remove(),d.addClass("minimap noselect"),r.disableFind===!0&&d.children().each(function(){t(this).addClass("unsearchable")}),d.children().each(function(){t(this).css({"pointer-events":"none"})});var f=t('<div class="miniregion"> </div>');t(t("body")[0]).append(f),t(t("body")[0]).append(d),t(".unsearchable").disableFind();var u=function(){return{x:i.width()/e.width()*r.widthRatio,y:i.height()/e.height()*r.heightRatio}},v=function(t){if(a){var o=u(),n="scale("+o.x+","+o.y+")",s=i.height()*r.offsetHeightRatio,h=i.width()*r.offsetWidthRatio,c=e.height()*(o.y-1)/2+s,l=e.width()*(o.x-1)/2+h,v=i.width()*(1/o.x)*r.widthRatio,m=i.height()*(1/o.y)*r.heightRatio,p={"-webkit-transform":n,"-moz-transform":n,"-ms-transform":n,"-o-transform":n,transform:n,top:c,width:v,height:m,margin:"0px",padding:"0px"};p[r.position]=l,d.css(p);var g=e.offset().top*o.y,w={width:d.width()*o.x,height:i.height()*o.y,margin:"0px",top:i.scrollTop()*o.y+s-g+"px"};w[r.position]=h+"px",f.css(w),r.onPreviewChange(d,o)}},m=function(t){if(a){var o=u(),n=i.height()*r.offsetHeightRatio,s=e.offset().top*o.y,h=i.scrollTop()*o.y,c=f.outerHeight(!0),l=e.outerHeight(!0)*o.y+s;s>h+c+n||h>l?f.css({display:"none"}):f.css({top:h+n-s+"px",display:"block"})}},p=function(t){if(a){var o=u(),n=i.height()*r.offsetHeightRatio,s=e.offset().top*o.y,h=f.outerHeight(!0),c=(t.clientY-h/2-n+s)/o.y;if("click"===t.type&&r.smoothScroll){var l=i.scrollTop(),d=e.outerHeight(!0);c=Math.max(c,Math.min(c,d));var v=c>l,m=r.smoothScrollDelay,p=Math.abs(l-c),g=m/p,y=1,R=4;g>=4?R=parseInt(y):y=g>=1?4*parseInt(g):4/g;var b=l,x=parseInt(p/y);w=!0;var k=function(){b+=v?y:-y,--x<=0&&(clearInterval(I),w=!1,b=c),i.scrollTop(b)},I=window.setInterval(k,R)}else i.scrollTop(c);t.stopPropagation()}},g=!1,w=!1,y=function(t){g=!1,e.removeClass("noselect"),f.removeClass("dragging")},R=function(t){g&&!w&&p(t)},b=function(t){p(t),g=!1},x=function(t){g=!0,e.addClass("noselect"),f.addClass("dragging")};v(),i.on("resize",v),i.on("scroll",m),t(document).on("mouseup",y),t(document).on("mousemove",R),t(f).on("mousedown",x),t(f).on("mouseup",y),t(f).on("mousemove",R),t(f).on("click",b),t(d).on("mousedown",x),t(d).on("mouseup",y),t(d).on("mousemove",R),t(d).on("click",b);var k="",I=function(t){var o=t.changedTouches;if(!(o.length>1)){var e=o[0],i=["touchstart","touchmove","touchend"],n=["mousedown","mousemove","mouseup"],a=i.indexOf(t.type);if(-1!==a){var s=n[a];t.type===i[2]&&k===i[0]&&(s="click");var r=document.createEvent("MouseEvent");r.initMouseEvent(s,!0,!0,window,1,e.screenX,e.screenY,e.clientX,e.clientY,!1,!1,!1,!1,0,null),e.target.dispatchEvent(r),t.preventDefault(),k=t.type}}};r.touch&&(document.addEventListener("touchstart",I,!0),document.addEventListener("touchmove",I,!0),document.addEventListener("touchend",I,!0),document.addEventListener("touchcancel",I,!0));var H=function(t){var o=r.position;if(c("position",t),o!==r.position){var e={};e[o]="",v(),f.css(e),d.css(e)}},S=function(t,o){return function(e){c(t,e),r[t]=e,o&&v()}},C=function(){a||(d.show(),f.show(),a=!0,v())},E=function(){a&&(d.hide(),f.hide(),a=!1)},D=function(){d.toggle(),f.toggle(),a=!a,a&&v()};return t.extend({},this,{setPosition:H,setHeightRatio:S("heightRatio",!0),setWidthRatio:S("widthRatio",!0),setOffsetHeightRatio:S("offsetHeightRatio",!0),setOffsetWidthRatio:S("offsetWidthRatio",!0),setSmoothScroll:S("smoothScroll"),setSmoothScrollDelay:S("smoothScrollDelay"),show:C,hide:E,toggle:D})}}(jQuery);
	$(document).ready(function(){
		var contentHeight = $(".sublime-body li").height();
		var screenHeight = $( document ).height();
		var screenWidth = $( document ).width();
		console.log("contentHeight/17 : ", contentHeight/17);
		console.log("contentHeight : ", contentHeight);
		for(i=1; i<=contentHeight/17; i++){
		  $(".list_num").append("<div class='num'>" + i + "</div>");
		}

		var previewBody = $('body').minimap({
		    heightRatio : 0.25,
		    widthRatio : 0.05,

		    offsetHeightRatio : 0.1,
		    offsetWidthRatio : 0.02,
		    position : "right",
		    touch: true,
		    smoothScroll: true,
		    smoothScrollDelay: 200,
		    onPreviewChange: function() {}
		});
	});
