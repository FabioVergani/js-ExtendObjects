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
function extend(extended,extensor,deeply=false){//extended,extensor,deeply
 const f=isObject;
 for(let p of Object.keys(extensor)){
	const e=extended[p],v=extensor[p];
	if(deeply && f(e) && f(v)){
		extend(e,v,true)
	}else{
		extended[p]=v
	}
 };
 return extended
} 
/*
console.dir(extend({a:1},{a:2}));
console.dir(extend({a:{num:3}},{a:2},true));
console.dir(extend({a:{num:{z:3}}},{a:{num:{z:4}}},true));
*/
