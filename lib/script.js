'use strict';document.addEventListener('DOMContentLoaded',function(){ // Toggle navbar
var main=document.getElementById('main');main.addEventListener('click',function(_){main.className=main.className==='show-nav'?'hide-nav':'show-nav'}); // Prevent toggling navbar when clicking navbar items
var nav=document.getElementById('nav');nav.addEventListener('click',function(e){e.stopPropagation()})});
