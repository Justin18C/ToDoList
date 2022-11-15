let input = document.getElementById("input");
let enterbutton = document.getElementById("enterbutton");
let box = document.getElementById("bottomBox");
let ol = document.createElement("ol");

enterbutton.addEventListener("click", function () {
    let li = document.createElement('li');
    let text = document.createTextNode(input.value);
    let dltbutton = document.createElement('button');
    let dlticon = document.createElement('i');
	
	dlticon.setAttribute('id', 'dlticon');
	dlticon.setAttribute('class', 'fa-solid fa-trash fa-2xl');
	dltbutton.appendChild(dlticon);
    
    if (input.value != 0) {
        li.appendChild(text);
        ol.appendChild(li);
        box.appendChild(ol);
        li.appendChild(dltbutton);
        li.classList.add("li");
        dltbutton.classList.add("dltbutton");
    }

    input.value = "";

    dltbutton.addEventListener("click", function () {
    ol.removeChild(li);
    });
});

    input.addEventListener("keyup", function(event) {
	event.preventDefault();
	if (event.keyCode === 13) {
		document.getElementById("enterbutton").click();
	}
})

 

