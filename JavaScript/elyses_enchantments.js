// @ts-check

export function getItem(cards, position) {
  return cards[position]; // We can use simple array indexing to find the position.
}

export function setItem(cards, position, replacementCard) {
  cards[position] = replacementCard; // Doing the same as the previous, just that we are now replacing that value with something else.
  return cards;
}

export function insertItemAtTop(cards, newCard) {
  cards.push(newCard); // Push() allows us to add stuff at the 'end' aka 'top' of the array.
  return cards;
}

export function removeItem(cards, position) {
  cards.splice(position, 1) // Splice lets us 'delete' a set of items from an array (also allows for replace)
  return cards;
}

export function removeItemFromTop(cards) {
  cards.pop(); // Pop removes from the end of the array
  return cards;
}

export function insertItemAtBottom(cards, newCard) {
  cards.unshift(newCard); // Unshift  adds stuff to the bottom
  return cards;
}

export function removeItemAtBottom(cards) {
  cards.shift(); // Shift removes stuff from the bottom
  return cards;
}

export function checkSizeOfStack(cards, stackSize) {
  return cards.length == stackSize; // Simple conditional
}
