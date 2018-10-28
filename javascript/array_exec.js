// print the elements of the array in the reverse order
function printReverse(array){
	for(var i = array.length-1;i >= 0;i--){
		console.log(array[i]);
	}
}
// check the uniformity of the elements of the array
function isUniform(array){
	var first_value = array[0];
	for(var i = 1;i < array.length;i++){
		if(first_value !== array[i]){
			return false
		}
	}
	return true
}
// print the sum of the elements of the array
function sumArray(array){
	var sum = 0;
	array.forEach(function(item){
		sum += item;
	})
	return sum
}
// print the max value in the array
function max(array){
	var max = array[0];
	for(i=1;i<array.length;i++){
		if(array[i]>max){
			max = array[i]
		}
	}
	return max
}