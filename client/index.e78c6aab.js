import{S as t,i as a,s as e,e as s,a as n,c as r,b as i,d as c,f as l,g as o,h as d,j as u,k as f,l as h,m as p,n as m,o as g,p as v,q as y,t as $,r as w,u as E,v as b,w as k,x as _,y as I,z as P,A as x,B as D,C as q,D as S,E as V,F as A,G as C,H as G}from"./client.9e7d35b7.js";function M(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function R(t){let a,e,g,v,y,$,w,E,b,k,_;return{c(){a=s("picture"),e=s("source"),v=n(),y=s("source"),w=n(),E=s("img"),this.h()},l(t){a=r(t,"PICTURE",{class:!0});var s=i(a);e=r(s,"SOURCE",{srcset:!0,type:!0}),v=c(s),y=r(s,"SOURCE",{srcset:!0,type:!0}),w=c(s),E=r(s,"IMG",{src:!0,alt:!0,style:!0,class:!0}),s.forEach(l),this.h()},h(){o(e,"srcset",g=t[0]+".webp"),o(e,"type","image/webp"),o(y,"srcset",$=t[0]+".png"),o(y,"type","image/png"),E.src!==(b=t[0]+".png")&&o(E,"src",b),o(E,"alt",t[1]),d(E,"opacity",t[2]),o(E,"class","svelte-elrt0b"),o(a,"class","svelte-elrt0b")},m(s,n){u(s,a,n),f(a,e),f(a,v),f(a,y),f(a,w),f(a,E),t[5](E),k||(_=h(E,"load",(function(){p(t[3])&&t[3].apply(this,arguments)})),k=!0)},p(a,[s]){t=a,1&s&&g!==(g=t[0]+".webp")&&o(e,"srcset",g),1&s&&$!==($=t[0]+".png")&&o(y,"srcset",$),1&s&&E.src!==(b=t[0]+".png")&&o(E,"src",b),2&s&&o(E,"alt",t[1]),4&s&&d(E,"opacity",t[2])},i:m,o:m,d(e){e&&l(a),t[5](null),k=!1,_()}}}function U(t,a,e){let s,{src:n}=a,{alt:r}=a,{opacity:i=1}=a,{onload:c=(()=>{})}=a;return g((function(){s.complete&&c()})),t.$$set=t=>{"src"in t&&e(0,n=t.src),"alt"in t&&e(1,r=t.alt),"opacity"in t&&e(2,i=t.opacity),"onload"in t&&e(3,c=t.onload)},[n,r,i,c,s,function(t){v[t?"unshift":"push"]((()=>{s=t,e(4,s)}))}]}class j extends t{constructor(t){super(),a(this,t,U,R,e,{src:0,alt:1,opacity:2,onload:3})}}function z(t,{delay:a=0,duration:e=400,easing:s=y}){const n=+getComputedStyle(t).opacity;return{delay:a,duration:e,easing:s,css:t=>"opacity: "+t*n}}function B(t){let a,e,d,h,p,g,v;return{c(){a=s("div"),e=s("p"),d=$("loading"),h=n(),p=s("span"),this.h()},l(t){a=r(t,"DIV",{class:!0});var s=i(a);e=r(s,"P",{class:!0});var n=i(e);d=w(n,"loading"),n.forEach(l),h=c(s),p=r(s,"SPAN",{class:!0}),i(p).forEach(l),s.forEach(l),this.h()},h(){o(e,"class","svelte-1qqwxry"),o(p,"class","svelte-1qqwxry"),o(a,"class","loading svelte-1qqwxry")},m(t,s){u(t,a,s),f(a,e),f(e,d),f(a,h),f(a,p),v=!0},p:m,i(t){v||(E((()=>{g||(g=b(a,z,{},!0)),g.run(1)})),v=!0)},o(t){g||(g=b(a,z,{},!1)),g.run(0),v=!1},d(t){t&&l(a),t&&g&&g.end()}}}class H extends t{constructor(t){super(),a(this,t,null,B,e,{})}}function L(t){let a,e;return a=new H({}),{c(){k(a.$$.fragment)},l(t){_(a.$$.fragment,t)},m(t,s){I(a,t,s),e=!0},i(t){e||(P(a.$$.fragment,t),e=!0)},o(t){x(a.$$.fragment,t),e=!1},d(t){D(a,t)}}}function N(t){let a,e,d,h,p,m,g,v;return e=new j({props:{src:"artwork/hidden_season_scaled",alt:"Hidden Season",opacity:t[1]?.6:1}}),{c(){a=s("div"),k(e.$$.fragment),d=n(),h=s("a"),p=$("Primary"),this.h()},l(t){a=r(t,"DIV",{class:!0,id:!0});var s=i(a);_(e.$$.fragment,s),d=c(s),h=r(s,"A",{type:!0,class:!0,hidden:!0,href:!0});var n=i(h);p=w(n,"Primary"),n.forEach(l),s.forEach(l),this.h()},h(){o(h,"type","button"),o(h,"class","btn btn-outline-primary svelte-tikr85"),h.hidden=m=!t[1],o(h,"href","left"),o(a,"class","inner-card svelte-tikr85"),o(a,"id","left-inner"),q(a,"active",t[1]),q(a,"normal",!t[0]&&!t[1]),q(a,"inactive",t[0]),q(a,"card-enter",X)},m(t,s){u(t,a,s),I(e,a,null),f(a,d),f(a,h),f(h,p),v=!0},p(t,s){const n={};2&s&&(n.opacity=t[1]?.6:1),e.$set(n),(!v||2&s&&m!==(m=!t[1]))&&(h.hidden=m),2&s&&q(a,"active",t[1]),3&s&&q(a,"normal",!t[0]&&!t[1]),1&s&&q(a,"inactive",t[0]),0&s&&q(a,"card-enter",X)},i(s){v||(P(e.$$.fragment,s),E((()=>{g||(g=b(a,t[5],{},!0)),g.run(1)})),v=!0)},o(s){x(e.$$.fragment,s),g||(g=b(a,t[5],{},!1)),g.run(0),v=!1},d(t){t&&l(a),D(e),t&&g&&g.end()}}}function O(t){let a,e,d,h,p,m,g,v;return e=new j({props:{src:"artwork/pelton_gaming_scaled",alt:"Pelton Gaming",opacity:t[0]?.6:1}}),{c(){a=s("div"),k(e.$$.fragment),d=n(),h=s("a"),p=$("Primary"),this.h()},l(t){a=r(t,"DIV",{class:!0,id:!0});var s=i(a);_(e.$$.fragment,s),d=c(s),h=r(s,"A",{type:!0,class:!0,hidden:!0,href:!0});var n=i(h);p=w(n,"Primary"),n.forEach(l),s.forEach(l),this.h()},h(){o(h,"type","button"),o(h,"class","btn btn-outline-primary svelte-tikr85"),h.hidden=m=!t[0],o(h,"href","right"),o(a,"class","inner-card svelte-tikr85"),o(a,"id","right-inner"),q(a,"active",t[0]),q(a,"normal",!t[0]&&!t[1]),q(a,"inactive",t[1]),q(a,"card-enter",X)},m(t,s){u(t,a,s),I(e,a,null),f(a,d),f(a,h),f(h,p),v=!0},p(t,s){const n={};1&s&&(n.opacity=t[0]?.6:1),e.$set(n),(!v||1&s&&m!==(m=!t[0]))&&(h.hidden=m),1&s&&q(a,"active",t[0]),3&s&&q(a,"normal",!t[0]&&!t[1]),2&s&&q(a,"inactive",t[1]),0&s&&q(a,"card-enter",X)},i(s){v||(P(e.$$.fragment,s),E((()=>{g||(g=b(a,t[4],{},!0)),g.run(1)})),v=!0)},o(s){x(e.$$.fragment,s),g||(g=b(a,t[4],{},!1)),g.run(0),v=!1},d(t){t&&l(a),D(e),t&&g&&g.end()}}}function T(t){let a,e,d,p,m,g,v,y,$,w,E=t[3]&&L(),b=F===t[2]&&N(t),k=F===t[2]&&O(t);return{c(){a=n(),e=s("main"),E&&E.c(),d=n(),p=s("div"),m=s("div"),b&&b.c(),g=n(),v=s("div"),k&&k.c(),this.h()},l(t){S('[data-svelte="svelte-tozi5p"]',document.head).forEach(l),a=c(t),e=r(t,"MAIN",{class:!0});var s=i(e);E&&E.l(s),d=c(s),p=r(s,"DIV",{id:!0,class:!0});var n=i(p);m=r(n,"DIV",{id:!0,class:!0});var o=i(m);b&&b.l(o),o.forEach(l),g=c(n),v=r(n,"DIV",{id:!0,class:!0});var u=i(v);k&&k.l(u),u.forEach(l),n.forEach(l),s.forEach(l),this.h()},h(){document.title="Berly Dai Portfolio",o(m,"id","left"),o(m,"class","poster-card svelte-tikr85"),o(v,"id","right"),o(v,"class","poster-card svelte-tikr85"),o(p,"id","card-container"),o(p,"class","svelte-tikr85"),o(e,"class","svelte-tikr85")},m(s,n){u(s,a,n),u(s,e,n),E&&E.m(e,null),f(e,d),f(e,p),f(p,m),b&&b.m(m,null),f(p,g),f(p,v),k&&k.m(v,null),y=!0,$||(w=[h(m,"mouseenter",t[8]),h(m,"mouseleave",t[9]),h(v,"mouseenter",t[10]),h(v,"mouseleave",t[11])],$=!0)},p(t,[a]){t[3]?E?8&a&&P(E,1):(E=L(),E.c(),P(E,1),E.m(e,d)):E&&(C(),x(E,1,1,(()=>{E=null})),V()),F===t[2]?b?(b.p(t,a),4&a&&P(b,1)):(b=N(t),b.c(),P(b,1),b.m(m,null)):b&&(C(),x(b,1,1,(()=>{b=null})),V()),F===t[2]?k?(k.p(t,a),4&a&&P(k,1)):(k=O(t),k.c(),P(k,1),k.m(v,null)):k&&(C(),x(k,1,1,(()=>{k=null})),V())},i(t){y||(P(E),P(b),P(k),y=!0)},o(t){x(E),x(b),x(k),y=!1},d(t){t&&l(a),t&&l(e),E&&E.d(),b&&b.d(),k&&k.d(),$=!1,A(w)}}}let X=!1;const F=2;function J(t,a,e){let s=!1,n=!1,r=0,i=!1;function c(t){"right"===t?e(0,s=!0):"left"===t&&e(1,n=!0)}function l(t){"right"===t?e(0,s=!1):"left"===t&&e(1,n=!1)}g((function(){const t=G();let a=new Image;a.addEventListener("load",(function(){e(2,r+=1)})),a.src=t?"artwork/hidden_season_scaled.webp":"artwork/hidden_season_scaled.png";let s=new Image;s.addEventListener("load",(function(){e(2,r+=1)})),s.src=t?"artwork/pelton_gaming_scaled.webp":"artwork/pelton_gaming_scaled.png",setTimeout((function(){r!=F&&(console.log("starting loader"),e(3,i=!0))}),500)}));return[s,n,r,i,function(t,{delay:a=0,duration:e=500}){return{delay:a,duration:e,easing:M,css:t=>`transform: translateX(${100*(1-t)}%)`}},function(t,{delay:a=0,duration:e=500}){return{delay:a,duration:e,easing:M,css:t=>`transform: translateX(-${100*(1-t)}%)`}},c,l,function(){c("left")},function(){l("left")},function(){c("right")},function(){l("right")}]}export default class extends t{constructor(t){super(),a(this,t,J,T,e,{})}}