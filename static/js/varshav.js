$(document).on("ready",function(){function e(){var e={$selfNode:a,isAnimDone:!1,findChild:function(n){return e.$selfNode.find(n)},animationPlay:function(){}};if(e.$selfNode.length){e.$hline=e.findChild(".js-hline"),e.$cline=e.findChild(".js-cline"),e.$fline=e.findChild(".js-fline"),e.$flinevignette=e.findChild(".js-vignette");var n=[[e.$hline],[e.$cline.get(0),e.$cline.get(1),[e.$cline.get(2),e.$cline.get(3)]],[e.$fline]],i=[[e.$hline],[e.$cline.get(0),e.$cline.get(1),e.$cline.get(2),e.$cline.get(3)],[e.$fline]],t=e.$hline.add(e.$cline).add(e.$fline),o=window.innerWidth>=1200?n:window.innerWidth>=768?i:t;e.tlAnim=new TimelineLite({paused:!0,onComplete:function(){t.css("transform","").removeClass("no-transition")}});window.innerWidth>=768?e.tlAnim.to(e.$flinevignette,1.95,{autoAlpha:1,ease:Power1.easeInOut},0).staggerFrom(o[0],1,{y:70,ease:Power3.easeOut},.35,1.5).staggerTo(o[0],.8,{autoAlpha:1,ease:Sine.easeIn},.35,1.6).staggerFrom(o[1],1,{y:90,ease:Power3.easeOut},.25,2).staggerTo(o[1],.68,{autoAlpha:1,ease:Sine.easeIn},.25,2.1).staggerFrom(o[2],1.2,{y:60,ease:Power3.easeOut},.35,3.1).staggerTo(o[2],1,{autoAlpha:1,ease:Sine.easeIn},.35,3.2):e.tlAnim.to(e.$flinevignette,1.95,{autoAlpha:1,ease:Power1.easeInOut},0).staggerFrom(o,1.1,{y:60,ease:Power3.easeOut},.25,1.5).staggerTo(o,.68,{autoAlpha:1,ease:Sine.easeIn},.25,1.6),e.animationPlay=function(){e.tlAnim.play()},e.animationPlay()}}function n(e){var n=!0;return $(e).find("form").find("input").each(function(){this.validity.valid||($(this).closest(".form__group").addClass("has-error"),n=!1)}),n}function i(e){if(e.length)for(var n=0;n<e.length;++n){var i=$(e[n]),t=i.css("transform","").css("transform");t=t.slice(7,-1).split(" ").map(function(e){return parseInt(e)}),i.css("transform","matrix("+t.join(",")+")")}}var t=window.innerWidth,o=window.innerHeight,a=$(".js-ms-home"),s=$(".js-matrix"),l=$(".js-callback-btn"),r=$(".js-pops-callback"),c=$(".js-plan-btn"),f=$(".js-pops-plan"),u=$(".js-pops-close");a.addClass("prep"),i(s),function(){var e=!0;TweenLite.defaultEase=Power1.easeInOut;var n=function(){var n=Math.random,i={1:null,2:null,3:null,4:null,5:null,6:null,7:null},a={1:.5*t,2:.1*t,3:.2*t,4:-400,5:-800,6:-200,7:0};for(var s in i)!function(s,l){return i[l]=function(){var r=t>=768?45*n()+30:100*n()+70,c=n()*-o/4+o/5,f=n()*-o/3-c,u=e?a[l]:-t/100*r-n()*t;(new TimelineMax).fromTo($(s),80*n()+81,{x:u,y:c,width:r+"%",opacity:.3*n()+.75},{x:1.7*t,y:f,opacity:.7*n()+.1,width:r+20*n()+"%",ease:Linear.easeNone,force3D:!0,onComplete:function(){i[l]()}})}}(".cloud"+s,s)(),s>=7&&(e=!1)},i=function(){n()};"complete"==document.readyState?i():$(window).load(i)}(),function(){var n={$selfNode:$(".js-preloader"),isAnimDone:!1,findChild:function(e){return n.$selfNode.find(e)},animationPlay:function(){}};n.$selfNode.length&&(n.$logo=n.findChild(".js-pre-logo"),n.$progress=n.findChild(".js-pre-progress"),n.$center=n.findChild(".js-pre-center"),n.tlAnim=new TimelineLite({paused:!0}),n.tlAnim.staggerFrom(n.$logo,1.2,{y:40,ease:Power2.easeOut},.15,.7).staggerTo(n.$logo,1,{autoAlpha:1,ease:Sine.easeIn},.15,.8).to(n.$progress,4.5,{width:"100%",ease:Power2.easeInOut},"+=0.2").to(n.$selfNode,.7,{autoAlpha:0,ease:Sine.easeIn,onComplete:function(){e()}},"+=0.2").to(n.$center,1.3,{y:40,ease:Power2.easeIn},"+=.3"),n.animationPlay=function(){n.tlAnim.play()},n.animationPlay())}(),l.click(function(){r.addClass("open")}),c.click(function(){f.addClass("open")}),$(".js-submit-btn").click(function(e){var i=$(this).closest(".pops");n(i)&&(e.preventDefault(),i.addClass("thanks"))}),u.click(function(){var e=$(this).closest(".pops");n(e)&&(e.removeClass("open"),setTimeout(function(){e.removeClass("thanks")},500))}),u.click(function(){var e=$(this).closest(".pops");e.removeClass("open"),setTimeout(function(){e.removeClass("thanks")},500)}),$(".form__control").on("click change",function(){var e=$(this);e.closest(".form__group").removeClass("has-error"),e.val()?e.addClass("filled"):e.removeClass("filled")}),$(window).resize(function(e,n,i){var t,o;return n=n||250,function(){var a=i||this,s=+new Date,l=arguments;t&&s<t+n?(clearTimeout(o),o=setTimeout(function(){t=s,e.apply(a,l)},n)):(t=s,e.apply(a,l))}}(function(){i(s),t=window.innerWidth,o=window.innerHeight}))});