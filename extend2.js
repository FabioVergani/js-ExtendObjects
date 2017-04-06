//#
function isObject(e){return toString(e)==='[object Object]'}
//
let e;
//
e=Function.prototype;
const callable=e.bind.bind(e.call),
toString=callable(Object.prototype.toString);
//
e=null;
//
function extend(a,b,c=false){//extended,extensor,deeply
 const f=isObject, x=a, o=b;
 for(let p of Object.keys(o)){const e=x[p],v=o[p];if(c && f(e) && f(v)){extend(e,v,true)}else{x[p]=v}};
 return x
} 
//
/*
console.dir(extend({a:1},{a:2}));
console.dir(extend({a:{num:3}},{a:2},true));
console.dir(extend({a:{num:{z:3}}},{a:{num:{z:4}}},true));

console.dir(extend({a:{num:{z:3}}},{a:{num:{y:4}}},true));
console.dir(Object.assign({a:{num:{z:3}}},{a:{num:{y:4}}},true));
*/
