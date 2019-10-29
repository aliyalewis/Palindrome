function palindrome(string) {
  string = string.toLowerCase();

  if (string.includes("_")) {
    string = string.replace("_", "");
  }

  let array = string.split(/\W/);

  let newString = array.join("");
  let newArray = newString.split("");
  let reverse = newArray.reverse();

  if (newString === reverse.join("")) {
    return true;
  } else {
    return false;
  }
}

palindrome("A man, a plan, a canal. Panama");