// You're working on a secret team solving coded transmissions.

// Your team is scrambling to decipher a recent message, 
// worried it's a plot to break into a major European National Cake Vault.
//  The message has been mostly deciphered, but all the words are backward! Your colleagues have handed off the last step to you.

// Write a function reverseWords() that takes a message as an array of characters and reverses the order of the words in place.
function reverseCharacters(message) {

    let leftIndex = 0;
    let rightIndex = message.length - 1;
  
    // Walk towards the middle, from both sides
    while (leftIndex < rightIndex) {
  
      // Swap the left char and right char
      const temp = message[leftIndex];
      message[leftIndex] = message[rightIndex];
      message[rightIndex] = temp;
      leftIndex++;
      rightIndex--;
    }
  }