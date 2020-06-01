
class Node{
    constructor(value){
        this.value= value;
        this.next =null
    }

}

class Stack{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek(){
        return this.top
    }

    push(value){
        const newNode = new Node(value);
        if(this.length === 0){
            this.top = newNode;
            this.bottom = newNode
        }else{
           const currentNode = this.top
           this.top = newNode
           this.top.next = currentNode 
        }
        this.length++
        return this
    }
}


const myStack = new Stack();
myStack.peek();
console.log(myStack.push('google'));


