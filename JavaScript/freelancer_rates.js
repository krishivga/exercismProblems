// @ts-check
export function dayRate(ratePerHour) {
  return ratePerHour * 8; // Finding Daily Rate when they work 8 hours a day, given hourly rate.
}

export function daysInBudget(budget, ratePerHour) {
  /*
  * To find the number of days in the budget, we just divide the budget by the daily rate (using dayRate function).
  */
  return Math.floor(budget/dayRate(ratePerHour)); 
}

export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  /*
  let monthlyRate = 22 * dayRate(ratePerHour);
  let months = Math.floor(numDays / 22);
  let monthPrice = months * monthlyRate * (1 - discount);
  console.log(monthPrice)

  let days = numDays % 22;
  let dailyRate = dayRate(ratePerHour)
  let dayPrice = days * dailyRate
  console.log(dayPrice)
  return Math.ceil(dayPrice + monthPrice)
  */
  
    /*
  In the Months section, we first find the number of months (and round down, because strangely JS doesn't support integer division as an operator), then we find the rate for 1 month and we multiply them along with the discounted rate.
  In the days section, we just find the remainder of days after all the months have been finished (using remainder division) and we multiply that by the daily rate.
  */
  return Math.ceil((Math.floor(numDays / 22) * (22 * dayRate(ratePerHour)) * (1 - discount)) + ((numDays % 22) * dayRate(ratePerHour)));
}
