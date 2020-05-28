class LinkedLis{
     
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head
        
    }
    
    append(value){
        const newNode = {
            value: value,
            next: null
        } 
       this.tail.next = newNode;
       this.tail = newNode; 
    }

}

const myLinkedList = new LinkedLis(10);
myLinkedList.append(5)
console.log(myLinkedList)