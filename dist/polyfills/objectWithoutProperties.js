"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=function(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!_Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;};var _Object=Object;