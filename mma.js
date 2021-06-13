class Node{
    constructor(value){
        this.val = value;
        this.next = null;
    }
}

class SLL{
    maxMinAvg() {
        var sum = 0;
        var max = this.head.val;
        var min = this.head.val;
        var walker = this.head;
        while(walker) {
            sum += walker.val;
            if(walker.value > max) {
                max = walker.val;
            }
            else if(walker.val < min) {
                min = walker.val;
            }
            walker = walker.next
        }
        return `max: ${max}, min: ${min}, avg: ${sum/this.head.val}`
    }
}

sll1 = new SLL();
node1 = new Node(13);
sll1.head = node1;
node2 = new Node(10);
node1.next = node2;

console.log(sll1.maxMinAvg());