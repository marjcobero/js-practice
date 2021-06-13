const users = [
    "albert",
    "ben",
    "luke",
    "zen"
]




// function reverseUsers(arr){
// var x = arr[0]
// for (var i = arr.length - 1; i >= 0; i--) {
//     arr[0] = arr[i] 
//     arr[i] = x
//     x = arr[i]
//     }
// }
// console.log(reverseUsers(users))

function reverseUsers(arr) {
    var x = arr[0];
    var half = arr.length/2
    for (var i = 0; i >=half; i++) {
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = x;
        x = arr[i + 1];
    }
    return arr;
}

console.log(reverseUsers(users))