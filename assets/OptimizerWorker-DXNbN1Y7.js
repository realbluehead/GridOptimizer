(function(){"use strict";function i(t,n,s,a){return{id:Date.now(),rl:t,rh:n,grid:s,dateRange:a}}function r(t){const n=t.range[0],s=t.range[1],a=t.dateRange,c=s-n;Array.from({length:c-1}).map((e,o)=>o+2).forEach(e=>{const o=i(n,s,e,a);postMessage(o)})}onmessage=function(t){switch(t.data.action){case"start":r(t.data.options);break}}})();