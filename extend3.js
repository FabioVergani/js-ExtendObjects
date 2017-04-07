 let e;
 //
 e=Function.prototype;
 const callable=e.bind.bind(e.call),
 toString=callable(Object.prototype.toString);
 //
 function isObject(e){return toString(e)==='[object Object]'}
 //
 function extend(a,b,c=true){
	const f=isObject,x=a,o=b,m=Object.keys(o);
	if(m.length!==0){for(let p of m){const e=x[p],v=o[p];if(c && f(e) && f(v)){extend(e,v,true)}else{x[p]=v}}};
	return x
 }
