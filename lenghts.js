class Node{
    constructor(value){
        this.val = value;
        this.next = null;
    }
}

class SLL{
    constructor(){
        this.head = null;
    }
    // contains(value){
    //     var walker = this.head;
    //     while(walker != null){
    //         if(walker.val == value){
    //             return true;
    //         }
    //         walker = walker.next;
    //     }
    //     return false;
    // }
    // length(){
    //     var count = 0;
    //     var walker = this.head;
    //     while(walker != null){
    //         count++;
    //         walker = walker.next;
    //     }
    //     return count;
    // }
    display(){
        var str = "";
        var walker = this.head;
        while(walker != null){
            str = str + walker.val + " ";
            walker = walker.next;
        }
        return str; 
    }
    // addFront(value){
    //     var newNode = new Node(value);
    //     newNode.next = this.head;
    //     this.head = newNode;
    //     return this.head;
    // }   
    // front(){
    //     if(this.head == null){
    //         return null;
    //     }
    //     return this.head.val;
    // }
    // removeFront(){
    //     if (this.head == null){
    //         return null;
    //     }
    //     this.head = this.head.next;
    //     return this.head;
    // }
}

sll1 = new SLL();
node1 = new Node(13);
sll1.head = node1;
node2 = new Node(10);
node1.next = node2 ;

console.log(sll1.contains(10));
console.log(sll1.contains(6));
console.log(sll1.length()); 
console.log(sll1.addFront(2));
console.log(sll1.front());
console.log(sll1.removeFront());
console.log(sll1.display());

// for(var i = 0; i < 5; i++){

// }
// var i = 0;
// while(i < 5){

//     i++;
// }

// var walker = this.head;
// while(walker != null){
//     walker = walker.next;
// }

