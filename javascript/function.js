function factorial(num) {
	fact = 1
	for(i=1;i<=num;i+=1){
		fact = fact * i
	}
	return fact;
}


function isEven(num) {
	return num % 2 == 0;
}

function kebabToSnake(str) {
	return str.replace(/\-/g,"_")
}