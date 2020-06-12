const number = [6,3,2,1,8,40,23,5]

bubbleSort = (array) =>{

    for (let i = 0; i < array.length; i++) {
       for (let j = 0; j < array.length; j++) {
           let temp;
           if(array[j] > array[j+1] ){
               temp = array[j];
               array[j] = array[j+1]
               array[j+1] = temp

           }
           
       }
      
        
    }

}
bubbleSort(number)
console.log(number)