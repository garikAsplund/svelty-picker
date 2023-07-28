import{s as F,f as c,a as m,g as r,x as y,c as h,j as b,k as f,i as o,r as C,d as e}from"./scheduler.0d62fe99.js";import{S as g,i as v}from"./index.1b0dad2e.js";function x(u){let n,i="Component exposes following CSS variables to customize it’s appearance as you can see through whole in example below or on the homepage.",t,a,d=`<code><span class="line"><span style="color: #D7BA7D">:root</span><span style="color: #D4D4D4"> {</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">--sdt-bg-main</span><span style="color: #D4D4D4">: </span><span style="color: #CE9178">#fff</span><span style="color: #D4D4D4">;</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">--sdt-shadow-color</span><span style="color: #D4D4D4">: </span><span style="color: #CE9178">#ccc</span><span style="color: #D4D4D4">;</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">--sdt-color</span><span style="color: #D4D4D4">: </span><span style="color: #CE9178">#000</span><span style="color: #D4D4D4">;</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">--sdt-primary</span><span style="color: #D4D4D4">: </span><span style="color: #CE9178">#286090</span><span style="color: #D4D4D4">;</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">--sdt-disabled-date</span><span style="color: #D4D4D4">: </span><span style="color: #CE9178">#b22222</span><span style="color: #D4D4D4">;</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">--sdt-disabled-date-bg</span><span style="color: #D4D4D4">: </span><span style="color: #DCDCAA">var</span><span style="color: #D4D4D4">(</span><span style="color: #9CDCFE">--sdt-bg-main</span><span style="color: #D4D4D4">);</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">--sdt-btn-bg-hover</span><span style="color: #D4D4D4">: </span><span style="color: #CE9178">#eee</span><span style="color: #D4D4D4">;</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">--sdt-btn-header-bg-hover</span><span style="color: #D4D4D4">: </span><span style="color: #CE9178">#dfdfdf</span><span style="color: #D4D4D4">;</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">--sdt-color-selected</span><span style="color: #D4D4D4">: </span><span style="color: #DCDCAA">var</span><span style="color: #D4D4D4">(</span><span style="color: #9CDCFE">--sdt-bg-main</span><span style="color: #D4D4D4">);</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">--sdt-today-indicator</span><span style="color: #D4D4D4">: </span><span style="color: #CE9178">#ccc</span><span style="color: #D4D4D4">;</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">--sdt-clock-bg</span><span style="color: #D4D4D4">: </span><span style="color: #CE9178">#eeeded</span><span style="color: #D4D4D4">;</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #6A9955">/* action buttons */</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">--sdt-today-bg</span><span style="color: #D4D4D4">: </span><span style="color: #CE9178">#1e486d</span><span style="color: #D4D4D4">;</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">--sdt-today-color</span><span style="color: #D4D4D4">: </span><span style="color: #DCDCAA">var</span><span style="color: #D4D4D4">(</span><span style="color: #9CDCFE">--sdt-bg-main</span><span style="color: #D4D4D4">);</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">--sdt-clear-color</span><span style="color: #D4D4D4">: </span><span style="color: #CE9178">#dc3545</span><span style="color: #D4D4D4">;</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">--sdt-clear-bg</span><span style="color: #D4D4D4">: </span><span style="color: #CE9178">transparent</span><span style="color: #D4D4D4">;</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE">--sdt-clear-hover-color</span><span style="color: #D4D4D4">: </span><span style="color: #DCDCAA">var</span><span style="color: #D4D4D4">(</span><span style="color: #9CDCFE">--sdt-bg-main</span><span style="color: #D4D4D4">);</span></span>
<span class="line"><span style="color: #D4D4D4">}</span></span></code>`,D,l,E="You can play with them here:";return{c(){n=c("p"),n.textContent=i,t=m(),a=c("pre"),a.innerHTML=d,D=m(),l=c("p"),l.textContent=E,this.h()},l(s){n=r(s,"P",{"data-svelte-h":!0}),y(n)!=="svelte-1yl3ei3"&&(n.textContent=i),t=h(s),a=r(s,"PRE",{class:!0,style:!0,tabindex:!0,"data-svelte-h":!0}),y(a)!=="svelte-1anx7g1"&&(a.innerHTML=d),D=h(s),l=r(s,"P",{"data-svelte-h":!0}),y(l)!=="svelte-1vpogh1"&&(l.textContent=E),this.h()},h(){b(a,"class","shiki dark-plus"),f(a,"background-color","#1E1E1E"),b(a,"tabindex","0")},m(s,p){o(s,n,p),o(s,t,p),o(s,a,p),o(s,D,p),o(s,l,p)},p:C,i:C,o:C,d(s){s&&(e(n),e(t),e(a),e(D),e(l))}}}const k={title:"Theme"};class w extends g{constructor(n){super(),v(this,n,null,x,F,{})}}export{w as default,k as metadata};