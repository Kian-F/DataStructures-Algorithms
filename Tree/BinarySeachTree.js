class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root =null;
    }

    insert(value){
        const newNode = new Node(value);
        if(this.root == null){
            this.root = newNode;
           
        }else{
            const currentNode = this.root;
            while(true){
                if(currentNode.value > value ){
                    if(!currentNode.left){
                        currentNode.left = newNode;
                        return this
                    }
                    currentNode = currentNode.left
                }else{
                    if(!currentNode.right){
                        currentNode.right = newNode
                        return this
                    }
                    currentNode = currentNode.right
                }
            }
           

        }
      }

      lookup(value){
          let currentNode = this.root
          if(!currentNode){
              return false
          }
             while(currentNode){
                if(value < currentNode.value){
                   currentNode = currentNode.left;
                   } else if(value > currentNode.value){
                       currentNode = currentNode.right;
                   }else if(currentNode.vale === value){
                       return currentNode
                   }
                }
                return false
             }
           
      
}



const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
JSON.stringify(traverse(tree.root))

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}