/*! Built with http://stenciljs.com */
(function(appNamespace,publicPath){"use strict";
!function(n){var t=Object.assign||function(n){for(var t,r=1,e=arguments.length;r<e;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n};Context.activeRouter=function(){function n(){for(var n=e,t=0;t<n.length;t++)(0,n[t])()}var r={},e=[];return{set:function(e){r=t({},r,e),n()},get:function(n){return n?r[n]:r},subscribe:function(n){if("function"!=typeof n)throw new Error("Expected listener to be a function.");var t=!0;return e.push(n),function(){if(t){t=!1;var r=e.indexOf(n);e.splice(r,1)}}}}}()}(publicPath);
})("App","/build/app/");
