document.getElementById("insert").onclick = function() {
	var input = document.getElementById("todoInput");
	var itemList = document.getElementById("itemList");

	var p = document.createElement("p");
	p.className = "item";
	p.appendChild(document.createTextNode(input.value));
	itemList.appendChild(p);
	input.value = "";
}

document.getElementById("clear").onclick = function() {
	var itemList = document.getElementById("itemList");
	while(itemList.childNodes.length > 0) {
		itemList.removeChild(itemList.childNodes[0]);
	}
}