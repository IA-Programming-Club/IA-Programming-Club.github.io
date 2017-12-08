var itemList = [
	{
		"name": "To-Do List",
		"url": "ToDoList",
		"category": "Beginner",
		"type": "Demonstration",
		"session": "Introduction to Web Development"
	}
];

for(var i = 0; i < itemList.length; i++) {
	var container = document.getElementById("itemList");
	container.appendChild(createItem(itemList[i]));
}

function createItem(item) {
	var d = document.createElement("div");
	d.className = "item";
	var h4 = document.createElement("h4");
	var h5 = document.createElement("h5");
	var p = document.createElement("p");

	h4.appendChild(document.createTextNode(item.name))
	h5.appendChild(document.createTextNode(item.category + " " + item.type))	
	p.appendChild(document.createTextNode("Lesson:"));
	p.appendChild(document.createElement("br"));
	p.appendChild(document.createTextNode(item.session));

	d.appendChild(h4);
	d.appendChild(h5);
	d.appendChild(p);

	d.onclick = function() {
		window.location.replace(window.location.href+"/"+item.url);
	}
	return d;
}