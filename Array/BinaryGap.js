// BinaryGap
// Find longest sequence of zeros in binary representation of an integer.

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(N === parseInt(N, 10) &&   N>=1 && N<=2147483647){
        const Binary = N.toString(2)
        const BinaryArray = Binary.split('');
        //console.log(BinaryArray)
        const firstOne = BinaryArray.indexOf("1");
        
        let newBinaryArray = BinaryArray.slice(firstOne+1) ;
        const secondOne = newBinaryArray.indexOf('1')
        const gaps = []
        gaps.push(secondOne)
        return Math.max.apply(Math, gaps)
        }
        
        return 0  
    }
    

solution(9)
