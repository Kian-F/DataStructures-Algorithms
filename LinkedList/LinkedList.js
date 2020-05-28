class LinkedLis{
     
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head
        
    }
    

}

const myLinkedList = new LinkedLis(10);
console.log(myLinkedList)