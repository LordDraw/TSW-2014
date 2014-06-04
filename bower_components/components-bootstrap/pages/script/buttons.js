window.onload = button;
function button(){
	var praca1= document.getElementById("praca1");
	var praca2= document.getElementById("praca2");
	var poli1= document.getElementById("poli1");
	var poli2= document.getElementById("poli2");
	var muzyka1= document.getElementById("muzyka1");
	var muzyka2= document.getElementById("muzyka2");
	var inny1= document.getElementById("inny1");
	var inny2= document.getElementById("inny2");
	
	praca1.onclick = func1;
	
};
function func1(){
	//document.open("../pages/form.html");
	//alert(document.h3);
	alert(document.body.elements);
};