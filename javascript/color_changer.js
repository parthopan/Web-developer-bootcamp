var button = document.querySelector("button")
var toggling_div = document.getElementById("toggle_div")

button.addEventListener("click",function(){
	toggling_div.classList.toggle("toggle_color")
})