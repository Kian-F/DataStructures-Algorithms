class HashTable {
    constructor(size){
      this.data = new Array(size);
      // this.data = [];
    }
  
    _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }
  
    set(key, value) {
      let address = this._hash(key);
      if (!this.data[address]) {
        this.data[address] = [];
      }
      this.data[address].push([key, value]);
      return this.data;
    }

get(key){
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if(currentBucket){
        for (let i = 0; i < currentBucket.length; i++) {
           if(currentBucket[i][0] == key)
            return currentBucket[i][1]
        }

    }
    return undefined
}

keys(){
	let keysArray = [];
	for (var i = 0; i < data.length; i++) {
		if(this.data[i]){
			keysArray.push(data[i][0][0])
		}
	}
	return keysArray
}
   
}
const myHashTable = new HashTable(50);
myHashTable.set('test', 4)
myHashTable.set('test1', 5)
myHashTable.set('test2', 7)
myHashTable.get('test')

