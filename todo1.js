// Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.
function pushFront(arr, value){
    for (var i = arr.length; i > 0; i--)
        arr[i] = arr[i-1]
    arr[0] = value;
    return arr
}

console.log(pushFront([1,2,3,4], 5))

// Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().
function popFront(arr){
    val = arr[0]
    for (var i = 0; i < arr.length-1; i++)
        arr[i] = arr[i+1]
    arr.pop()
    console.log(arr)
    return val
}

console.log(popFront([1,2,3,4]))

// Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).
function insertAt(arr, index, value){
    for (var i = 0; i < arr.length; i++){
        if (i == index){
            arr[i] = value
        }
    }
    return arr
}

console.log(insertAt([1,2,3,4],2,7))

// Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).
function removeAt(arr, index){
    for (var i = 0; i < arr.length-1; i++)
        arr[i] = arr[i+1];
    arr.pop(index)
    return arr
}

console.log(removeAt([1,2,3,4],5))

// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. 
// As with all array challenges, do this without using any built-in array methods.
function swapPairs(arr) {
	for(let i = 0; i < arr.length-1; i=i+2) {
		let temp = arr[i];
		arr[i] = arr[i + 1];
		arr[i + 1] = temp;
	}
    return arr
}

console.log(swapPairs(["Brendan", true, 42]))

// Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together.
function removeDupesUnnested(arr) {
	let newArr = [];
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] !== arr[i+1]) 
			newArr.push(arr[i])
	}
	return newArr;
}

console.log(removeDupesUnnested([1,1,2,4,5,]))