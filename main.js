// declaring the p1 variable to the <p> id
let p1 = document.getElementById("p1");

//adding an event listener which takes two parameters; an event and function
p1.addEventListener("dblclick", function(ev) {

//setting style for p1
	p1.style.backgroundColor="green";
	p1.style.fontFamily="sans-serif";

	console.log(ev.target);
 console.log("hello");
	console.log(ev.type);
});

// declaring the p1 variable to the <p> id
let p2 = document.getElementById("p2");

let text = document.getElementById("text");

//adding an event listener which takes two parameters; an event and function
text.addEventListener("keypress", function(ev) {

	 console.log(ev.target);

	// console.log(ev.type)
});


function myfunction() {
	let vent="sell";
	var p3 = document.getElementById("p3").innerHTML;
	var txt = p3.replace(vent,"buy");
	document.getElementById("p3").innerHTML = txt;
}