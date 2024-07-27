// @ts-check
export function frontDoorResponse(line) {
  // Using 'line' as a list of characters and taking out the first index.
  return line[0];
}

export function frontDoorPassword(word) {
  // First, we make everything lowercase, then we make the first letter uppercase and add it back to the rest of the word.
  return word[0].toUpperCase() + word.toLowerCase().slice(1);
}

export function backDoorResponse(line) {
  // Using the string method 'trim()' to remove all unnecessary whitespaces and using slice to get the last letter. We don't have to output a word here, just the last letter.
  return line.trim().slice(-1);
}

export function backDoorPassword(word) {
  // Taking the first letter and making it upper case, then cutting out the rest of the word (other than the first letter) and adding it back, then adding the politeness.
  // return word[0].toUpperCase() + word.slice(1) + ", please";

  // Instead, we can implement DRY and use a previous function instead.
  return frontDoorPassword(word) + ", please";
}
