import{s as b,f as r,a as v,g as i,x as d,c as m,j as F,k as T,i as a,r as h,d as l}from"./scheduler.3ecd3668.js";import{S as w,i as H}from"./index.bf4ded2a.js";function M(L){let t,f="Component emits <code>input</code>, <code>change</code>, <code>dateChange</code>, <code>cancel</code> and <code>blur</code> events.",D,o,g="<li><code>input</code> is dispatched on <code>&lt;input&gt;</code> element therefore you can get current value like from every native event:</li> <li><code>change</code> event is using Svelte’s <code>eventDispatcher</code>, therefore triggered event contains <code>detail</code> property</li> <li><code>dateChange</code> event is dispatched on date change as well as <code>change</code> event, but with more data on <code>detail</code> property:</li> <li><code>cancel</code> event is dispatched when “Cancel” button is pressed (which resets any changes that were not confirmed. Typically when <code>autocommit</code> is set to <code>false</code>)</li>",y,s,x=`<code><span class="line"><span style="color: #D4D4D4">{   </span><span style="color: #6A9955">// event.detail property</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #C8C8C8">value</span><span style="color: #D4D4D4">: </span><span style="color: #9CDCFE">string</span><span style="color: #D4D4D4"> | </span><span style="color: #9CDCFE">string</span><span style="color: #D4D4D4">[] | </span><span style="color: #569CD6">null</span><span style="color: #D4D4D4">     </span><span style="color: #6A9955">// array for range</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #C8C8C8">dateValue</span><span style="color: #D4D4D4">: </span><span style="color: #9CDCFE">Date</span><span style="color: #D4D4D4"> | </span><span style="color: #9CDCFE">Date</span><span style="color: #D4D4D4">[] | </span><span style="color: #569CD6">null</span><span style="color: #D4D4D4">     </span><span style="color: #6A9955">// array for range</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #C8C8C8">displayValue</span><span style="color: #D4D4D4">: </span><span style="color: #9CDCFE">string</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #C8C8C8">valueFormat</span><span style="color: #D4D4D4">: </span><span style="color: #9CDCFE">string</span></span>
<span class="line"><span style="color: #D4D4D4">    </span><span style="color: #C8C8C8">displayFormat</span><span style="color: #D4D4D4">: </span><span style="color: #9CDCFE">string</span></span>
<span class="line"><span style="color: #D4D4D4">}</span></span></code>`,u,p,_="For custom element:",C,c,E="<li><code>input</code> is also triggered on underlying <code>input[value]</code> and it’s value is accessible underas standard input <code>event.target.value</code></li>";return{c(){t=r("p"),t.innerHTML=f,D=v(),o=r("ul"),o.innerHTML=g,y=v(),s=r("pre"),s.innerHTML=x,u=v(),p=r("p"),p.textContent=_,C=v(),c=r("ul"),c.innerHTML=E,this.h()},l(e){t=i(e,"P",{"data-svelte-h":!0}),d(t)!=="svelte-1m2giot"&&(t.innerHTML=f),D=m(e),o=i(e,"UL",{"data-svelte-h":!0}),d(o)!=="svelte-8towof"&&(o.innerHTML=g),y=m(e),s=i(e,"PRE",{class:!0,style:!0,tabindex:!0,"data-svelte-h":!0}),d(s)!=="svelte-1byzqbu"&&(s.innerHTML=x),u=m(e),p=i(e,"P",{"data-svelte-h":!0}),d(p)!=="svelte-3drq0w"&&(p.textContent=_),C=m(e),c=i(e,"UL",{"data-svelte-h":!0}),d(c)!=="svelte-6ezm3l"&&(c.innerHTML=E),this.h()},h(){F(s,"class","shiki dark-plus"),T(s,"background-color","#1E1E1E"),F(s,"tabindex","0")},m(e,n){a(e,t,n),a(e,D,n),a(e,o,n),a(e,y,n),a(e,s,n),a(e,u,n),a(e,p,n),a(e,C,n),a(e,c,n)},p:h,i:h,o:h,d(e){e&&(l(t),l(D),l(o),l(y),l(s),l(u),l(p),l(C),l(c))}}}const q={title:"Events"};class A extends w{constructor(t){super(),H(this,t,null,M,b,{})}}export{A as default,q as metadata};
