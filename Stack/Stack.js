class Stack{
    constructor(){
        this.items = []
    }

    push(element){
        this.items.push(element)
    }
    pop(){
        if (this.items.length == 0) 
        return "Underflow";
        return this.items.pop()
    }
    peek(){
        return this.items[this.items.length -1]
    }
    isEmpty(){
        
            return this.items.length === 0
        
    }
}

function s(H){
    let count =1;
    var stack = new Stack();
    stack.push(H[0]);
   

    let N = H.length;

    for (let i = 1; i < N; i++) {

        if (H[i] == stack.peek()) {
            continue;
        } else if (H[i] > stack.peek()) {
            stack.push(H[i]);
            count++;
        } else {

            while (!stack.isEmpty() && H[i] < stack.peek()) {
                stack.pop();
            }

            /*
             * the new entity is either in same elevation or higher
             * */

            /*
            * if in same elevation, we already added the block, so keep iterating
            * */
            if (!stack.isEmpty() && H[i] == stack.peek()) {
                continue;
            }

            stack.push(H[i]);
            count++;
        }
    }
     console.log(count)
    return count;
}
    

s([8,8,2,5,7,9,8,7,4,8])