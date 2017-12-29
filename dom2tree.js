window.console.clear();
//----------------------

((w)=>{
 (w.dom2tree||(w.dom2tree=((w)=>{
	function on(a,b,c){a.removeEventListener(b,c);a.addEventListener(b,c)}
	function at(a,b,c){on(a,b,function f(x){c(x);a.removeEventListener(b,f)})}
	function ok(a,b){const d=a.document;d.readyState!=='complete'?at(a,'load',b):b({target:d})}

	function polulate(branch,node,depth,num){
	 const m=node.children,l=m.length;
	 let x=function(s){return branch.appendChild(d.createElement(s))};
	 if(l<1){
		x=x('li');
	 }else{
		x=x('ul');
		const j=depth+1;
		let e,i=0;
		while(i<l){
		 e=m[i];
		 polulate(x,e,j,++i);
		};
	 };
	 x.insertAdjacentText('afterbegin',depth+'.'+num+':'+node.tagName);
	}

	function process(evt){
		locked=true;
		log.group('dom2tree',++runs);
		const d=evt.target, tree=frag.appendChild(d.createElement('div'));
		polulate(tree,d.body,0,1);
		ok(d.defaultView.open(),function(evt){evt.target.body.appendChild(tree)});
		log.groupEnd();
		locked=false;
	}

	const log=w.console, d=w.document, frag=d.createDocumentFragment();
	let locked=false,runs=0;
	return (w)=>{if(locked!==true){ok(w,process)}}
 })(w)))(w);
})(window);

//-------------------------------------------------------------------------------
window.document.getElementById('button').onclick=function(){dom2tree(window)};
