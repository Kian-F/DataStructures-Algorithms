
class LinkedList {
    constructor(value) {
     this.head ={
       value: value,
       next: null
     }
     this.tail = this.head
    }
   append(value){
     const newNode = {
       value: value,
       next: null
     };
     this.tail.next = newNode;
     this.tail = newNode;
     return this
  
   }
   prepend(value){
     const newNode={
       value: value,
       next: null
     }
    newNode.next = this.head
     this.head = newNode 
     return this 
   }
  }
  
  let myLinkedList = new LinkedList(10);
  myLinkedList.append(5);
  myLinkedList.prepend(16);
  console.log(myLinkedList)
  
  
  
  