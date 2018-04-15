function customElement(tagname,created){
	var proto = Object.create(HTMLElement.prototype);
	proto.createdCallback = function(){
			created(this);
	}
	this.custom = document.registerElement(tagname,{
		prototype:proto
	});
}
