function palindrome(string) {
  string = string.toLowerCase();
  let array = string.split(/\W/);
  let newString = array.join("");
  let newArray = newString.split("");

  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] !== newArray[newArray.length - 1]) {
      return "Not a palindrome.";
    } else if (newArray[i] == newArray[-1]) {
      newArray.shift();
      newArray.pop();
    }
    return "Yes, this is a palindrome!";
  }
}

palindrome("Kayak")

//make sure all letters are lower case.
// split into an array.
// check first and last elements of the array.
// return "Yes, ${word} is a palindrome!" if true and
// "No, ${word} is not a palindrome." if false.