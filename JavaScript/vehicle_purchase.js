// @ts-check

export function needsLicense(kind) {
  return kind === "car" || kind === "truck" // If it's a car or a truck, return true.
}

export function chooseVehicle(option1, option2) {
  let answer;
  if (option1 > option2) {answer = option2;} else {answer = option1;} // If option 1 comes before option 2, we return option 1, otherwise, option 2.
  return answer + " is clearly the better choice."
}

export function calculateResellPrice(originalPrice, age) {
  /* Pretty cool implementation of the solution IMO. Basically, ages is going to be booleans (as the conditions 'resolve' at point of definition) and prices will already be calculated. 
  In this loop, we go over each condition (we do this so we don't have to create a bunch of if statements, instead each condition is looped over) and we find the 'correct' price for that condition by accesing the index. 
  The only 'must' is that index order must be followed, otherwise the whole thing doesn't work.
  Another implementation would be using a dictionary but that's unnecessarily complicated for the scope of this problem. If we were given a more scalable problemset, I would likely take that approach.*/
  let [ages, prices] = [[age < 3, age > 10, age >= 3 && age <= 10], [originalPrice * 0.8, originalPrice * 0.5, originalPrice * 0.7]]
  for (let condition of ages) { if (condition){ return prices[ages.indexOf(condition)] } }
}
