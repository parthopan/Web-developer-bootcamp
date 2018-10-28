var todoArr = []
var input = prompt("What you would like to do?")

while (input !== "quit") {
	if (input === "new") {
		var newItem = prompt("Name the element to be added to the todo")
		todoArr.push(newItem)
	}
	else if (input === "list") {
		todoArr.forEach(function(item,i){
			console.log(i+" : "+item)	
		})
	}	
	else if (input === "delete") {
		var inptRemoval = prompt("Enter the index to be removed")
		if (!isNaN(Number(inptRemoval))) {
			console.log("11111111")
			console.log(Number(inptRemoval))
			todoArr.splice(Number(inptRemoval))
		}	
	}
	else {
		console.log("WrongInput");
	}
	input = prompt("What you would like to do?")
}